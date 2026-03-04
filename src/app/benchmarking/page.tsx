'use client';

import { useState, useMemo } from 'react';
import { getAllCountriesAlphabetical, getCountriesByRegion } from '@/data/countries';
import { buildingBlocks } from '@/data/indicators';
import { RadarChart } from '@/components/charts/RadarChart';
import { BarChart } from '@/components/charts/BarChart';
import { CountryFlag } from '@/components/shared/CountryFlag';
import { ScoreBadge } from '@/components/shared/ScoreBadge';
import { calculateOverallScore, cn, getScoreColor, formatRank, average } from '@/lib/utils';
import { REGIONS } from '@/lib/constants';
import { Country } from '@/types/country';
import { PageLayout } from '@/components/layout/PageLayout';

const allCountries = getAllCountriesAlphabetical();

export default function BenchmarkingPage() {
    const [selectedCountryId, setSelectedCountryId] = useState('nga');
    const [peerGroup, setPeerGroup] = useState<string>('region');

    const selectedCountry = allCountries.find(c => c.id === selectedCountryId);

    const peerCountries = useMemo((): Country[] => {
        if (!selectedCountry) return [];
        if (peerGroup === 'region') return getCountriesByRegion(selectedCountry.region).filter(c => c.id !== selectedCountryId);
        if (peerGroup === 'income') return allCountries.filter(c => c.incomeLevel === selectedCountry.incomeLevel && c.id !== selectedCountryId);
        return allCountries.filter(c => c.rec === selectedCountry.rec && c.id !== selectedCountryId);
    }, [selectedCountry, peerGroup, selectedCountryId]);

    const radarCountries = useMemo(() => {
        if (!selectedCountry) return [];
        const result = [
            {
                name: selectedCountry.name,
                scores: buildingBlocks.map(bb => selectedCountry.buildingBlocks[bb.id as keyof typeof selectedCountry.buildingBlocks].score),
            },
        ];

        if (peerCountries.length > 0) {
            result.push({
                name: 'Peer Average',
                scores: buildingBlocks.map(bb => Math.round(average(peerCountries.map(c => c.buildingBlocks[bb.id as keyof typeof c.buildingBlocks].score)))),
            });
        }
        return result;
    }, [selectedCountry, peerCountries]);

    const rankingData = useMemo(() => {
        const group = selectedCountry ? [selectedCountry, ...peerCountries] : peerCountries;
        return group
            .map(c => ({ country: c, score: calculateOverallScore(c.buildingBlocks) }))
            .sort((a, b) => b.score - a.score);
    }, [selectedCountry, peerCountries]);

    const gapAnalysis = useMemo(() => {
        if (!selectedCountry || radarCountries.length < 2) return [];
        const peerScores = radarCountries[1].scores;
        return buildingBlocks.map((bb, i) => {
            const myScore = selectedCountry.buildingBlocks[bb.id as keyof typeof selectedCountry.buildingBlocks].score;
            const peerAvg = peerScores[i];
            return { block: bb.name, myScore, peerAvg, gap: myScore - peerAvg };
        });
    }, [selectedCountry, radarCountries]);

    const regionalAverages = useMemo(() => {
        return REGIONS.map(region => {
            const regionCountries = getCountriesByRegion(region);
            const avgScore = Math.round(average(regionCountries.map(c => calculateOverallScore(c.buildingBlocks))));
            return { region, avgScore, count: regionCountries.length };
        });
    }, []);

    if (!selectedCountry) return null;

    const sidebar = (
        <aside className="w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full p-4 overflow-y-auto">
            <h2 className="text-sm font-bold text-slate-900 mb-4">Configuration</h2>

            <div className="space-y-4">
                <div>
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block">Focus Country</label>
                    <select
                        value={selectedCountryId}
                        onChange={e => setSelectedCountryId(e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    >
                        {allCountries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>

                <div>
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block">Peer Group By</label>
                    <div className="flex flex-col gap-2">
                        {[['region', 'Region'], ['income', 'Income Level'], ['rec', 'REC']].map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setPeerGroup(key)}
                                className={cn(
                                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left',
                                    peerGroup === key ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                )}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );

    return (
        <PageLayout sidebar={sidebar}>
            <div className="p-6 space-y-6">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">Benchmarking & Analytics</h1>
                    <p className="text-sm text-slate-500 mt-1">Compare a country against its peers and regional averages</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Scorecard */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <CountryFlag code={selectedCountry.code} name={selectedCountry.name} size="lg" />
                            <div>
                                <h2 className="text-lg font-bold text-slate-900">{selectedCountry.name}</h2>
                                <p className="text-sm text-slate-500">{selectedCountry.region} • {selectedCountry.incomeLevel}</p>
                            </div>
                            <ScoreBadge score={calculateOverallScore(selectedCountry.buildingBlocks)} size="lg" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="text-center p-3 bg-slate-50 rounded-lg">
                                <p className="text-[10px] text-slate-400 uppercase tracking-wide">Africa Rank</p>
                                <p className="text-2xl font-bold text-orange-500 font-mono-data">{formatRank(selectedCountry.afriHealthRank)}</p>
                            </div>
                            <div className="text-center p-3 bg-slate-50 rounded-lg">
                                <p className="text-[10px] text-slate-400 uppercase tracking-wide">Peer Rank</p>
                                <p className="text-2xl font-bold text-orange-500 font-mono-data">
                                    {formatRank(rankingData.findIndex(r => r.country.id === selectedCountryId) + 1)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Radar Chart */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                            {selectedCountry.name} vs Peer Average
                        </p>
                        <RadarChart indicators={buildingBlocks.map(bb => bb.name)} countries={radarCountries} />
                    </div>

                    {/* Rankings Table */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-4 border-b border-slate-100">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Peer Rankings</p>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                            <table className="w-full text-sm">
                                <tbody>
                                    {rankingData.map((r, i) => (
                                        <tr key={r.country.id} className={cn(
                                            'border-b border-slate-50',
                                            r.country.id === selectedCountryId ? 'bg-orange-50' : 'hover:bg-slate-50'
                                        )}>
                                            <td className="px-4 py-2.5 font-mono-data text-slate-400 w-8">{i + 1}</td>
                                            <td className="px-2 py-2.5 flex items-center gap-2">
                                                <CountryFlag code={r.country.code} name={r.country.name} />
                                                <span className={cn('font-medium', r.country.id === selectedCountryId ? 'text-orange-700' : 'text-slate-700')}>
                                                    {r.country.name}
                                                </span>
                                            </td>
                                            <td className={cn('px-4 py-2.5 text-right font-semibold font-mono-data', getScoreColor(r.score))}>
                                                {r.score}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Gap Analysis */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3">Gap Analysis</p>
                        <div className="space-y-3">
                            {gapAnalysis.map(g => (
                                <div key={g.block} className="flex items-center gap-3">
                                    <span className="text-xs text-slate-600 w-28 truncate">{g.block}</span>
                                    <div className="flex-1 h-2 bg-slate-100 rounded-full relative">
                                        <div
                                            className={cn('h-2 rounded-full', g.gap >= 0 ? 'bg-green-400' : 'bg-red-400')}
                                            style={{ width: `${Math.min(Math.abs(g.gap) + 50, 100)}%` }}
                                        />
                                    </div>
                                    <span className={cn(
                                        'text-xs font-semibold font-mono-data w-12 text-right',
                                        g.gap >= 0 ? 'text-green-500' : 'text-red-500'
                                    )}>
                                        {g.gap > 0 ? '+' : ''}{g.gap}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Regional Averages */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3">Regional Averages</p>
                    <BarChart
                        categories={regionalAverages.map(r => r.region)}
                        data={[{ name: 'Average Score', values: regionalAverages.map(r => r.avgScore) }]}
                        horizontal
                        height={250}
                    />
                </div>
            </div>
        </PageLayout>
    );
}
