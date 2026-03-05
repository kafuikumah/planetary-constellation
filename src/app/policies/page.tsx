'use client';

import { useState, useMemo } from 'react';
import { FileText, Search, Filter, Calendar } from 'lucide-react';
import { policies, searchPolicies } from '@/data/policies';
import { getAllCountriesAlphabetical, getCountryById } from '@/data/countries';
import { buildingBlocks } from '@/data/indicators';
import { ImpactBadge } from '@/components/shared/ImpactBadge';
import { CountryFlag } from '@/components/shared/CountryFlag';
import { cn, groupBy } from '@/lib/utils';
import { Policy } from '@/types/policy';
import { PageLayout } from '@/components/layout/PageLayout';
import { useOnboarding, TourStep } from '@/components/onboarding/OnboardingProvider';
import { useEffect } from 'react';

type SubView = 'list' | 'coverage' | 'timeline';

const allCountries = getAllCountriesAlphabetical();

export default function PoliciesPage() {
    const [subView, setSubView] = useState<SubView>('list');
    const [searchQuery, setSearchQuery] = useState('');
    const [countryFilter, setCountryFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [blockFilter, setBlockFilter] = useState('');

    const { startTour } = useOnboarding();

    useEffect(() => {
        const hasSeenPoliciesTour = localStorage.getItem('tour_policies_seen');
        if (hasSeenPoliciesTour === 'true') return;

        const tourSteps: TourStep[] = [
            {
                targetId: 'policies-sidebar',
                title: 'Filter Policies',
                content: 'Narrow down the policy list by country, building block, or status.',
                placement: 'right'
            },
            {
                targetId: 'policy-tabs',
                title: 'Analysis Views',
                content: 'Switch between a simple list, a coverage matrix, or a historical timeline of policies.',
                placement: 'bottom'
            },
            {
                targetId: 'policy-search',
                title: 'Keywords',
                content: 'Search for specific policy titles or keywords in the descriptions.',
                placement: 'bottom'
            }
        ];

        startTour(tourSteps);
        localStorage.setItem('tour_policies_seen', 'true');
    }, [startTour]);

    const filteredPolicies = useMemo(() => {
        let result = searchQuery ? searchPolicies(searchQuery) : [...policies];
        if (countryFilter) result = result.filter(p => p.country === countryFilter);
        if (statusFilter) result = result.filter(p => p.status === statusFilter);
        if (blockFilter) result = result.filter(p => p.buildingBlocks.includes(blockFilter));
        return result;
    }, [searchQuery, countryFilter, statusFilter, blockFilter]);

    const coverageData = useMemo(() => {
        return allCountries.map(c => ({
            country: c,
            policyCount: policies.filter(p => p.country === c.id).length,
            blocksHit: new Set(policies.filter(p => p.country === c.id).flatMap(p => p.buildingBlocks)).size,
        })).sort((a, b) => b.policyCount - a.policyCount);
    }, []);

    const timelineData = useMemo(() => {
        const byYear = groupBy(policies, 'yearEnacted');
        return Object.entries(byYear)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([year, items]) => ({ year: Number(year), policies: items as Policy[] }));
    }, []);

    const sidebar = (
        <aside id="policies-sidebar" className="w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full p-4 overflow-y-auto">
            <h2 className="text-sm font-bold text-slate-900 mb-4">Filters</h2>

            <div className="space-y-4">
                <div>
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block">Select Country</label>
                    <select
                        value={countryFilter}
                        onChange={e => setCountryFilter(e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-white"
                    >
                        <option value="">All Countries</option>
                        {allCountries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>

                <div>
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block">Focus Areas</label>
                    <select
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-slate-50 cursor-not-allowed text-slate-400"
                        disabled
                    >
                        <option value="">All Focus Areas</option>
                    </select>
                </div>

                <div>
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block">Building Block</label>
                    <select
                        value={blockFilter}
                        onChange={e => setBlockFilter(e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-white"
                    >
                        <option value="">All Building Blocks</option>
                        {buildingBlocks.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                    </select>
                </div>

                <div>
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block">Status</label>
                    <select
                        value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-white"
                    >
                        <option value="">All Statuses</option>
                        <option value="Active">Active</option>
                        <option value="Draft">Draft</option>
                        <option value="Archived">Archived</option>
                    </select>
                </div>
            </div>
        </aside>
    );

    return (
        <PageLayout sidebar={sidebar}>
            <div className="p-6 space-y-6">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">Policy Library</h1>
                    <p className="text-sm text-slate-500 mt-1">Browse and analyze health policies across African nations</p>
                </div>

                {/* Tab Views */}
                <div id="policy-tabs" className="flex items-center gap-1 border-b border-slate-200">
                    {([['list', 'Policy List'], ['coverage', 'Coverage Analysis'], ['timeline', 'Timeline']] as [SubView, string][]).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setSubView(key)}
                            className={cn(
                                'px-4 py-2.5 text-sm font-medium transition-colors border-b-2',
                                subView === key
                                    ? 'text-orange-600 border-orange-500'
                                    : 'text-slate-500 border-transparent hover:text-slate-700'
                            )}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {subView === 'list' && (
                    <>
                        {/* Search Main Body */}
                        <div id="policy-search" className="flex flex-wrap items-center gap-3">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search policies..."
                                    className="w-full border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                                />
                            </div>
                        </div>

                        {/* Policy List */}
                        <div className="space-y-3">
                            {filteredPolicies.length === 0 ? (
                                <div className="bg-white rounded-xl border border-slate-100 p-8 text-center text-slate-400 text-sm">
                                    <Filter className="w-8 h-8 mx-auto mb-2 opacity-40" />
                                    No policies match your filters
                                </div>
                            ) : (
                                filteredPolicies.map(policy => {
                                    const policyCountry = getCountryById(policy.country);
                                    return (
                                        <div key={policy.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 hover:shadow-md transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                    <FileText className="w-5 h-5 text-blue-500" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="text-sm font-semibold text-slate-900">{policy.title}</h3>
                                                        <span className={cn(
                                                            'px-2 py-0.5 rounded-full text-[10px] font-medium',
                                                            policy.status === 'Active' ? 'bg-green-50 text-green-600' :
                                                                policy.status === 'Draft' ? 'bg-yellow-50 text-yellow-600' :
                                                                    'bg-slate-100 text-slate-500'
                                                        )}>
                                                            {policy.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-slate-500 line-clamp-2 mb-2">{policy.description}</p>
                                                    <div className="flex items-center gap-4 text-xs text-slate-400">
                                                        {policyCountry && (
                                                            <span className="flex items-center gap-1">
                                                                <CountryFlag code={policyCountry.code} name={policyCountry.name} />
                                                                {policyCountry.name}
                                                            </span>
                                                        )}
                                                        <span>{policy.yearEnacted}</span>
                                                        <span className="flex items-center gap-1">Impact: <ImpactBadge impact={policy.impact} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </>
                )}

                {subView === 'coverage' && (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Country</th>
                                        <th className="text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Policies</th>
                                        <th className="text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Blocks Covered</th>
                                        <th className="text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Coverage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coverageData.filter(d => d.policyCount > 0).map(d => (
                                        <tr key={d.country.id} className="border-b border-slate-50 hover:bg-slate-50">
                                            <td className="px-4 py-3 flex items-center gap-2">
                                                <CountryFlag code={d.country.code} name={d.country.name} />
                                                <span className="font-medium text-slate-800">{d.country.name}</span>
                                            </td>
                                            <td className="text-center px-3 py-3 font-mono-data font-semibold text-slate-700">{d.policyCount}</td>
                                            <td className="text-center px-3 py-3 font-mono-data text-slate-600">{d.blocksHit}/6</td>
                                            <td className="text-center px-3 py-3">
                                                <div className="w-full bg-slate-100 rounded-full h-2 max-w-[120px] mx-auto">
                                                    <div
                                                        className="bg-orange-500 h-2 rounded-full transition-all"
                                                        style={{ width: `${(d.blocksHit / 6) * 100}%` }}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {subView === 'timeline' && (
                    <div className="space-y-4">
                        {timelineData.map(({ year, policies: yearPolicies }) => (
                            <div key={year} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div className="w-px flex-1 bg-slate-200 mt-2" />
                                </div>
                                <div className="flex-1 pb-6">
                                    <p className="text-lg font-bold text-slate-900 font-mono-data mb-2">{year}</p>
                                    <div className="space-y-2">
                                        {yearPolicies.map(p => {
                                            const pc = getCountryById(p.country);
                                            return (
                                                <div key={p.id} className="bg-white rounded-lg border border-slate-100 p-3 shadow-sm">
                                                    <div className="flex items-center gap-2">
                                                        {pc && <CountryFlag code={pc.code} name={pc.name} />}
                                                        <span className="text-sm font-medium text-slate-800">{p.title}</span>
                                                        <ImpactBadge impact={p.impact} />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </PageLayout>
    );
}
