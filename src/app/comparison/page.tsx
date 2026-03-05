'use client';

import { useState, useMemo } from 'react';
import { useComparison } from '@/hooks/useComparison';
import { getAllCountriesAlphabetical } from '@/data/countries';
import { buildingBlocks } from '@/data/indicators';
import { BarChart } from '@/components/charts/BarChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { LineChart } from '@/components/charts/LineChart';
import { CountryFlag } from '@/components/shared/CountryFlag';
import { ScoreBadge } from '@/components/shared/ScoreBadge';
import { calculateOverallScore, cn, getScoreColor } from '@/lib/utils';
import { PageLayout } from '@/components/layout/PageLayout';
import { Check, X, BarChart2, Search, ChevronDown, BarChart3 } from 'lucide-react';
import { useOnboarding, TourStep } from '@/components/onboarding/OnboardingProvider';
import { useEffect } from 'react';

const allCountries = getAllCountriesAlphabetical();

type ChartType = 'bar' | 'radar' | 'line';

export default function ComparisonPage() {
    const { selectedIds, selectedCountries, toggleCountry, setSelectedIds } = useComparison();
    const [chartType, setChartType] = useState<ChartType>('radar');
    const [searchQuery, setSearchQuery] = useState('');

    const { startTour } = useOnboarding();

    useEffect(() => {
        const hasSeenComparisonTour = localStorage.getItem('tour_comparison_seen');
        if (hasSeenComparisonTour === 'true') return;

        const tourSteps: TourStep[] = [
            {
                targetId: 'comparison-sidebar',
                title: 'Comparison Settings',
                content: 'Configure your comparison by selecting multiple countries and a specific health indicator.',
                placement: 'right'
            },
            {
                targetId: 'indicator-selector',
                title: 'Choose Metrics',
                content: 'You can compare all building blocks at once or focus on a single metric like Health Financing.',
                placement: 'right'
            },
            {
                targetId: 'generate-btn',
                title: 'Visualize Data',
                content: 'Click here to update the charts and table with your selected countries and indicators.',
                placement: 'top'
            },
            {
                targetId: 'chart-toggles',
                title: 'View Modes',
                content: 'Switch between Radar, Bar, and Line charts to see the data from different perspectives.',
                placement: 'bottom'
            },
            {
                targetId: 'detailed-breakdown',
                title: 'Detailed Data',
                content: 'Scroll down to see the raw numbers, ranking data, and specific scores in this table.',
                placement: 'top'
            }
        ];

        startTour(tourSteps);
        localStorage.setItem('tour_comparison_seen', 'true');
    }, [startTour]);

    // UI states for sidebar
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [isIndicatorDropdownOpen, setIsIndicatorDropdownOpen] = useState(false);

    // Data states
    const [selectedIndicator, setSelectedIndicator] = useState<string>('all_building_blocks');
    const [appliedCountries, setAppliedCountries] = useState(selectedCountries);
    const [appliedIndicator, setAppliedIndicator] = useState<string>('all_building_blocks');

    const filteredCountries = useMemo(() => {
        if (!searchQuery) return allCountries;
        return allCountries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery]);

    const bbNames = buildingBlocks.map(bb => bb.name);

    // Dynamic Chart Data based on Applied Indicator
    let barData: { name: string, values: number[] }[] = [];
    let radarCountries: { name: string, scores: number[] }[] = [];
    let singleIndicatorName = '';

    if (appliedIndicator === 'all_building_blocks' || appliedIndicator === 'overall') {
        // Show all building blocks
        barData = appliedCountries.map(c => ({
            name: c.name,
            values: buildingBlocks.map(bb => c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score),
        }));

        radarCountries = appliedCountries.map(c => ({
            name: c.name,
            scores: buildingBlocks.map(bb => c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score),
        }));
    } else {
        // Single Building Block Selected
        const bb = buildingBlocks.find(b => b.id === appliedIndicator);
        if (bb) {
            singleIndicatorName = bb.name;
            barData = appliedCountries.map(c => ({
                name: c.name,
                values: [c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score],
            }));

            // Radar makes no sense for a single point, so we just supply empty array
            // and we will disable/hide the radar option in the UI below
        }
    }

    // Generate insights
    const insights = useMemo(() => {
        if (appliedCountries.length < 2) return [];
        const results: string[] = [];

        if (appliedIndicator === 'all_building_blocks' || appliedIndicator === 'overall') {
            const best = appliedCountries.reduce((a, b) =>
                calculateOverallScore(a.buildingBlocks) > calculateOverallScore(b.buildingBlocks) ? a : b
            );
            results.push(`${best.name} demonstrates the most robust health system among the selected group, achieving a leading overall score of ${calculateOverallScore(best.buildingBlocks)}.`);

            buildingBlocks.forEach(bb => {
                const scores = appliedCountries.map(c => ({
                    name: c.name,
                    score: c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score,
                }));
                const max = scores.reduce((a, b) => a.score > b.score ? a : b);
                const min = scores.reduce((a, b) => a.score < b.score ? a : b);

                if (max.score - min.score > 20) {
                    results.push(`There is a significant disparity of ${max.score - min.score} points in ${bb.name}, with ${max.name} outperforming ${min.name} (${max.score} vs ${min.score}).`);
                }
            });
        } else {
            // Insights for a single indicator
            const bb = buildingBlocks.find(b => b.id === appliedIndicator);
            if (bb) {
                const scores = appliedCountries.map(c => ({
                    name: c.name,
                    score: c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score,
                })).sort((a, b) => b.score - a.score);

                results.push(`${scores[0].name} leads the peer group in ${bb.name} with a score of ${scores[0].score}.`);
                if (scores.length > 1) {
                    const diff = scores[0].score - scores[scores.length - 1].score;
                    if (diff > 15) {
                        results.push(`${scores[scores.length - 1].name} lags behind with a ${bb.name} score of ${scores[scores.length - 1].score}, indicating a potential area for targeted capacity building.`);
                    } else {
                        results.push(`Performance in ${bb.name} is relatively consistent across the selected countries, with only a ${diff}-point gap between the highest and lowest performers.`);
                    }
                }
            }
        }

        return results;
    }, [appliedCountries, appliedIndicator]);

    const handleGenerate = () => {
        setAppliedCountries(selectedCountries);
        setAppliedIndicator(selectedIndicator);

        // Auto-switch away from radar if a single indicator is chosen
        if (selectedIndicator !== 'all_building_blocks' && selectedIndicator !== 'overall' && chartType === 'radar') {
            setChartType('bar');
        }
    };

    const sidebar = (
        <aside id="comparison-sidebar" className="w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full p-4 gap-6 overflow-y-auto">

            {/* Select Countries Dropdown */}
            <div className="flex flex-col gap-2 relative z-20">
                <label className="text-sm text-slate-600">Select Countries</label>
                <div className="relative">
                    <button
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="w-full flex items-center justify-between border border-slate-200 bg-slate-50/50 rounded-lg px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    >
                        <div className="flex items-center gap-2">
                            <Search className="w-4 h-4 text-slate-400" />
                            <span>Choose by Country</span>
                        </div>
                        <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform", isCountryDropdownOpen && "rotate-180")} />
                    </button>

                    {isCountryDropdownOpen && (
                        <div className="absolute top-12 left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden flex flex-col max-h-[250px]">
                            <input
                                type="text"
                                placeholder="Search countries..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full border-b border-slate-100 px-3 py-2 text-sm focus:outline-none bg-slate-50"
                            />
                            <div className="flex-1 overflow-y-auto">
                                {filteredCountries.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => {
                                            toggleCountry(c.id);
                                            setIsCountryDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors"
                                    >
                                        <div className={cn(
                                            "w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors",
                                            selectedIds.includes(c.id) ? "bg-orange-500 border-orange-500" : "border-slate-300 bg-white"
                                        )}>
                                            {selectedIds.includes(c.id) && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                        <CountryFlag code={c.code} name={c.name} />
                                        <span className={cn("truncate", selectedIds.includes(c.id) ? "text-slate-900 font-medium" : "text-slate-600")}>{c.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Visual feedback of selected countries below the dropdown */}
                {selectedCountries.length > 0 && !isCountryDropdownOpen && (
                    <div className="flex flex-wrap gap-1 mt-1">
                        {selectedCountries.map(c => (
                            <span key={c.id} className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">
                                {c.name}
                                <button onClick={() => toggleCountry(c.id)} className="hover:text-red-500 focus:outline-none"><X className="w-3 h-3" /></button>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Select Indicator Dropdown */}
            <div className="flex flex-col gap-2 relative z-10">
                <label className="text-sm text-slate-600">Select Indicator</label>
                <div className="relative">
                    <button
                        id="indicator-selector"
                        onClick={() => setIsIndicatorDropdownOpen(!isIndicatorDropdownOpen)}
                        className="w-full flex items-center justify-between border border-slate-200 bg-slate-50/50 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    >
                        <span className="truncate">
                            {selectedIndicator === 'all_building_blocks' ? 'All Building Blocks' :
                                selectedIndicator === 'overall' ? 'Overall Health Score' :
                                    buildingBlocks.find(b => b.id === selectedIndicator)?.name || 'Choose indicator'}
                        </span>
                        <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform", isIndicatorDropdownOpen && "rotate-180")} />
                    </button>

                    {isIndicatorDropdownOpen && (
                        <div className="absolute top-12 left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-y-auto max-h-[250px]">
                            <button
                                onClick={() => { setSelectedIndicator('all_building_blocks'); setIsIndicatorDropdownOpen(false); }}
                                className={cn("w-full text-left px-3 py-2.5 text-sm transition-colors", selectedIndicator === 'all_building_blocks' ? "bg-orange-50 text-orange-700 font-medium" : "text-slate-700 hover:bg-slate-50")}
                            >
                                All Building Blocks
                            </button>
                            <button
                                onClick={() => { setSelectedIndicator('overall'); setIsIndicatorDropdownOpen(false); }}
                                className={cn("w-full text-left px-3 py-2.5 text-sm transition-colors", selectedIndicator === 'overall' ? "bg-orange-50 text-orange-700 font-medium" : "text-slate-700 hover:bg-slate-50")}
                            >
                                Overall Health Score
                            </button>
                            <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 border-y border-slate-100">
                                Specific Building Blocks
                            </div>
                            {buildingBlocks.map(bb => (
                                <button
                                    key={bb.id}
                                    onClick={() => { setSelectedIndicator(bb.id); setIsIndicatorDropdownOpen(false); }}
                                    className={cn("w-full text-left px-3 py-2.5 text-sm transition-colors", selectedIndicator === bb.id ? "bg-orange-50 text-orange-700 font-medium" : "text-slate-700 hover:bg-slate-50")}
                                >
                                    {bb.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-auto pt-4 relative z-0">
                <button
                    id="generate-btn"
                    onClick={handleGenerate}
                    disabled={selectedCountries.length === 0}
                    className="w-full bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-slate-200 disabled:text-slate-400 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:ring-offset-2"
                >
                    <BarChart3 className="w-4 h-4" />
                    Generate Comparison
                </button>
            </div>
        </aside>
    );

    return (
        <PageLayout sidebar={sidebar}>
            <div className="p-6 space-y-6">
                {/* Header */}
                {/* Header and Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Comparison Matrix</h1>
                        <p className="text-sm text-slate-500 mt-1">Compare health system performance across multiple countries</p>
                    </div>
                    {/* Chart Type Toggle */}
                    {(appliedIndicator === 'all_building_blocks' || appliedIndicator === 'overall') && (
                        <div id="chart-toggles" className="flex bg-slate-100 p-1 rounded-lg self-start flex-shrink-0">
                            {(['radar', 'bar', 'line'] as ChartType[]).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setChartType(t)}
                                    className={cn(
                                        'px-4 py-1.5 rounded-md text-sm font-medium transition-colors capitalize',
                                        chartType === t ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                                    )}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    )}
                    {appliedIndicator !== 'all_building_blocks' && appliedIndicator !== 'overall' && (
                        <div id="chart-toggles" className="flex bg-slate-100 p-1 rounded-lg self-start flex-shrink-0">
                            {(['bar', 'line'] as ChartType[]).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setChartType(t)}
                                    className={cn(
                                        'px-4 py-1.5 rounded-md text-sm font-medium transition-colors capitalize',
                                        chartType === t ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                                    )}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Selected Countries Bubbles */}
                {appliedCountries.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {appliedCountries.map(c => (
                            <div key={c.id} className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full text-sm">
                                <CountryFlag code={c.code} name={c.name} />
                                <span className="font-medium text-slate-800">{c.name}</span>
                                <button
                                    onClick={() => {
                                        toggleCountry(c.id);
                                        setAppliedCountries(prev => prev.filter(ac => ac.id !== c.id));
                                    }}
                                    className="ml-1 text-slate-400 hover:text-orange-600 transition-colors p-0.5 rounded-full hover:bg-orange-100 focus:outline-none"
                                    aria-label={`Remove ${c.name}`}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="space-y-6">
                    {/* Chart Area */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                        {appliedCountries.length === 0 ? (
                            <div className="h-[400px] flex flex-col items-center justify-center text-center p-6 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                                <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                                    <BarChart2 className="w-8 h-8 text-orange-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">No Countries Generated</h3>
                                <p className="text-sm text-slate-500 max-w-sm">
                                    Select countries and an indicator from the sidebar, then click Generate Comparison.
                                </p>
                            </div>
                        ) : chartType === 'bar' ? (
                            <BarChart
                                categories={appliedIndicator === 'all_building_blocks' || appliedIndicator === 'overall' ? bbNames : [singleIndicatorName]}
                                data={barData}
                                height={400}
                            />
                        ) : chartType === 'radar' && radarCountries.length > 0 ? (
                            <RadarChart indicators={bbNames} countries={radarCountries} height={400} />
                        ) : (
                            <LineChart
                                categories={appliedIndicator === 'all_building_blocks' || appliedIndicator === 'overall' ? bbNames : [singleIndicatorName]}
                                data={barData}
                                height={400}
                            />
                        )}
                    </div>

                    {/* Comparison Table */}
                    {appliedCountries.length > 0 && (
                        <div id="detailed-breakdown">
                            <h3 className="text-lg font-semibold text-slate-800 mb-4 px-1">Detailed Breakdown</h3>
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-50/50 border-b border-slate-100">
                                            <tr>
                                                <th className="text-left px-5 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Country</th>
                                                <th className="text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Overall</th>
                                                <th className="text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap">Pop. (M)</th>
                                                <th className="text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap">Exp./Capita</th>
                                                <th className="text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap">Health/GDP %</th>
                                                <th className="text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap">Debt Service %</th>
                                                {buildingBlocks.map(bb => (
                                                    <th key={bb.id} className="text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap">
                                                        {bb.name}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {appliedCountries.map(c => (
                                                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-5 py-3.5 flex items-center gap-2 min-w-[140px]">
                                                        <CountryFlag code={c.code} name={c.name} />
                                                        <span className="font-medium text-slate-800 text-sm whitespace-nowrap">{c.name}</span>
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        {(() => {
                                                            const overallScore = calculateOverallScore(c.buildingBlocks);
                                                            return (
                                                                <span className={cn('px-2.5 py-1 rounded text-xs font-semibold font-mono-data', getScoreColor(overallScore))}>
                                                                    {overallScore}
                                                                </span>
                                                            );
                                                        })()}
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center text-slate-600 font-mono-data">{c.population.toFixed(1)}</td>
                                                    <td className="px-4 py-3.5 text-center text-slate-600 font-mono-data">${c.healthExpPerCapita}</td>
                                                    <td className="px-4 py-3.5 text-center text-slate-600 font-mono-data">{c.healthGdpPercent.toFixed(1)}%</td>
                                                    <td className="px-4 py-3.5 text-center text-slate-600 font-mono-data">{c.debtServiceRatio.toFixed(1)}%</td>
                                                    {buildingBlocks.map(bb => {
                                                        const score = c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score;
                                                        return (
                                                            <td key={`${bb.id}-${c.id}`} className="px-4 py-3.5 text-center">
                                                                <span className={cn('px-2.5 py-1 rounded text-xs font-semibold font-mono-data', getScoreColor(score))}>
                                                                    {score}
                                                                </span>
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Insights */}
                    {insights.length > 0 && (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3">Auto-Generated Insights</p>
                            <ul className="space-y-2">
                                {insights.map((insight, i) => (
                                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                                        {insight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </PageLayout>
    );
}
