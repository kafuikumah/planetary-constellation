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

const allCountries = getAllCountriesAlphabetical();

type ChartType = 'bar' | 'radar' | 'line';

export default function ComparisonPage() {
    const { selectedIds, selectedCountries, toggleCountry } = useComparison();
    const [chartType, setChartType] = useState<ChartType>('bar');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCountries = useMemo(() => {
        if (!searchQuery) return allCountries;
        return allCountries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery]);

    const bbNames = buildingBlocks.map(bb => bb.name);

    const barData = selectedCountries.map(c => ({
        name: c.name,
        values: buildingBlocks.map(bb => c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score),
    }));

    const radarData = selectedCountries.length > 0
        ? buildingBlocks.map(bb => ({
            name: bb.name,
            value: selectedCountries[0].buildingBlocks[bb.id as keyof typeof selectedCountries[0]['buildingBlocks']].score,
        }))
        : [];

    const radarCompare = selectedCountries.length > 1
        ? buildingBlocks.map(bb => ({
            name: bb.name,
            value: Math.round(
                selectedCountries.slice(1).reduce(
                    (sum, c) => sum + c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score, 0
                ) / (selectedCountries.length - 1)
            ),
        }))
        : undefined;

    // Generate insights
    const insights = useMemo(() => {
        if (selectedCountries.length < 2) return [];
        const results: string[] = [];
        const best = selectedCountries.reduce((a, b) =>
            calculateOverallScore(a.buildingBlocks) > calculateOverallScore(b.buildingBlocks) ? a : b
        );
        results.push(`${best.name} leads with an overall score of ${calculateOverallScore(best.buildingBlocks)}.`);

        buildingBlocks.forEach(bb => {
            const scores = selectedCountries.map(c => ({
                name: c.name,
                score: c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score,
            }));
            const max = scores.reduce((a, b) => a.score > b.score ? a : b);
            const min = scores.reduce((a, b) => a.score < b.score ? a : b);
            if (max.score - min.score > 20) {
                results.push(`Largest gap in ${bb.name}: ${max.name} (${max.score}) vs ${min.name} (${min.score}).`);
            }
        });

        return results;
    }, [selectedCountries]);

    const sidebar = (
        <aside className="w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full overflow-hidden p-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 block">Select Countries</p>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            />
            <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                {filteredCountries.map(c => (
                    <button
                        key={c.id}
                        onClick={() => toggleCountry(c.id)}
                        className={cn(
                            'w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-2 transition-colors',
                            selectedIds.includes(c.id)
                                ? 'bg-orange-50 text-orange-700'
                                : 'text-slate-600 hover:bg-slate-50'
                        )}
                    >
                        <CountryFlag code={c.code} name={c.name} />
                        <span className="truncate">{c.name}</span>
                    </button>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 block">Chart Type</p>
                <div className="flex flex-col gap-2">
                    {(['bar', 'radar', 'line'] as ChartType[]).map(t => (
                        <button
                            key={t}
                            onClick={() => setChartType(t)}
                            className={cn(
                                'px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize text-left',
                                chartType === t ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            )}
                        >
                            {t} Chart
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );

    return (
        <PageLayout sidebar={sidebar}>
            <div className="p-6 space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-xl font-bold text-slate-900">Comparison Matrix</h1>
                    <p className="text-sm text-slate-500 mt-1">Compare health system performance across multiple countries</p>
                </div>

                <div className="space-y-6">
                    {/* Chart Area */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                        {selectedCountries.length === 0 ? (
                            <div className="h-64 flex items-center justify-center text-slate-400 text-sm">
                                Select at least one country to compare
                            </div>
                        ) : chartType === 'bar' ? (
                            <BarChart categories={bbNames} data={barData} height={400} />
                        ) : chartType === 'radar' ? (
                            <RadarChart data={radarData} compareData={radarCompare} title={selectedCountries[0]?.name} height={400} />
                        ) : (
                            <LineChart categories={bbNames} data={barData} height={400} />
                        )}
                    </div>

                    {/* Comparison Table */}
                    {selectedCountries.length > 0 && (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-100">
                                            <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Country</th>
                                            <th className="text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Overall</th>
                                            {buildingBlocks.map(bb => (
                                                <th key={bb.id} className="text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">{bb.name.split(' ')[0]}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedCountries.map(c => (
                                            <tr key={c.id} className="border-b border-slate-50 hover:bg-slate-50">
                                                <td className="px-4 py-3 flex items-center gap-2">
                                                    <CountryFlag code={c.code} name={c.name} />
                                                    <span className="font-medium text-slate-800">{c.name}</span>
                                                </td>
                                                <td className="text-center px-3 py-3">
                                                    <ScoreBadge score={calculateOverallScore(c.buildingBlocks)} size="sm" />
                                                </td>
                                                {buildingBlocks.map(bb => {
                                                    const score = c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score;
                                                    return (
                                                        <td key={bb.id} className={cn('text-center px-3 py-3 font-semibold font-mono-data', getScoreColor(score))}>
                                                            {score}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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
