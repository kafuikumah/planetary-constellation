'use client';

import { FileText } from 'lucide-react';
import Link from 'next/link';
import { useSelectedCountry } from '@/hooks/useSelectedCountry';
import { getPoliciesByCountry } from '@/data/policies';
import { formatRank } from '@/lib/utils';
import { CountryFlag } from '@/components/shared/CountryFlag';
import { ImpactBadge } from '@/components/shared/ImpactBadge';

export function CountryInfoPanel() {
    const { country } = useSelectedCountry();

    if (!country) return null;

    const policies = getPoliciesByCountry(country.id);
    const displayPolicies = policies.slice(0, 5);

    return (
        <div className="w-[320px] h-full bg-white rounded-xl shadow-lg border border-slate-100 flex flex-col overflow-hidden">
            {/* Country Header */}
            <div className="p-4 border-b border-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                    Country
                </p>
                <div className="flex items-center gap-3">
                    <CountryFlag code={country.code} name={country.name} size="md" />
                    <span className="text-lg font-semibold text-slate-900">{country.name}</span>
                </div>
            </div>

            {/* Ranking */}
            <div className="p-4 border-b border-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1">
                    Africa Health Index Ranking
                </p>
                <p className="text-3xl font-bold text-orange-500 font-mono-data">
                    {formatRank(country.afriHealthRank)}
                </p>
            </div>

            {/* Health Policies */}
            <div className="p-4 flex-1 overflow-y-auto min-h-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
                    Health Policies
                </p>
                <div className="space-y-0">
                    {displayPolicies.length > 0 ? (
                        displayPolicies.map((policy) => (
                            <div key={policy.id} className="py-3 border-b border-slate-100 last:border-b-0">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-800 truncate">{policy.title}</p>
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="text-[10px] text-slate-400 uppercase">Impact:</span>
                                            <ImpactBadge impact={policy.impact} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-slate-400 italic">No policies recorded</p>
                    )}
                </div>
            </div>

            {/* See More Button */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 mt-auto shrink-0">
                <Link
                    href="/policies"
                    className="w-full py-2 bg-black hover:bg-slate-800 text-white text-[12px] font-semibold rounded-[10px] transition-colors flex items-center justify-center gap-2"
                >
                    View All {country.name}&apos;s Health Policies
                </Link>
            </div>
        </div>
    );
}
