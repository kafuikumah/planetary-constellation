'use client';

import { useSelectedCountry } from '@/hooks/useSelectedCountry';
import { CountryFlag } from '@/components/shared/CountryFlag';
import { ScoreBadge } from '@/components/shared/ScoreBadge';
import { formatPopulation, formatPercent, formatCurrency, calculateOverallScore } from '@/lib/utils';
import Link from 'next/link';

export function MiniCountryProfile() {
    const { hoveredCountry, country } = useSelectedCountry();
    const activeCountry = hoveredCountry || country;

    if (!activeCountry) {
        return null;
    }

    const overallScore = calculateOverallScore(activeCountry.buildingBlocks);

    return (
        <Link href={`/country-profiles/${activeCountry.id}`}>
            <div className="bg-white shadow-lg rounded-xl border border-slate-200 p-4 w-[280px] pointer-events-auto hover:border-[#F29D38] transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <CountryFlag code={activeCountry.code} name={activeCountry.name} size="md" />
                        <span className="text-sm font-bold font-sans text-slate-900 group-hover:text-[#F29D38] transition-colors">
                            {activeCountry.name}
                        </span>
                    </div>
                    <ScoreBadge score={overallScore} size="sm" />
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-2">
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Population</p>
                        <p className="text-sm font-semibold text-slate-900 font-mono-data">
                            {formatPopulation(activeCountry.population)}
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Health/GDP</p>
                        <p className="text-sm font-semibold text-slate-900 font-mono-data">
                            {formatPercent(activeCountry.healthGdpPercent)}
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Per Capita</p>
                        <p className="text-sm font-semibold text-slate-900 font-mono-data">
                            {formatCurrency(activeCountry.healthExpPerCapita)}
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Debt Service</p>
                        <p className="text-sm font-semibold text-slate-900 font-mono-data">
                            {formatPercent(activeCountry.debtServiceRatio)}
                        </p>
                    </div>
                </div>

                <p className="text-[10px] text-slate-400 text-center mt-3 opacity-80 transition-opacity italic">
                    Click to see details
                </p>
            </div>
        </Link>
    );
}
