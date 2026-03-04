'use client';

import { Country } from '@/types/country';
import { CountryFlag } from '@/components/shared/CountryFlag';
import { ScoreBadge } from '@/components/shared/ScoreBadge';
import { formatPopulation, formatPercent, formatCurrency, calculateOverallScore } from '@/lib/utils';

interface CountryTooltipProps {
    country: Country;
    position?: { x: number; y: number };
}

export function CountryTooltip({ country, position }: CountryTooltipProps) {
    const overallScore = calculateOverallScore(country.buildingBlocks);

    return (
        <div
            className="bg-white shadow-lg rounded-xl border border-slate-100 p-4 w-[260px] pointer-events-auto"
            style={position ? {
                position: 'absolute',
                left: position.x + 10,
                top: position.y - 80,
                zIndex: 50,
            } : undefined}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <CountryFlag code={country.code} name={country.name} size="md" />
                    <span className="text-sm font-semibold text-slate-900">{country.name}</span>
                </div>
                <ScoreBadge score={overallScore} size="sm" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide">Population</p>
                    <p className="text-sm font-semibold text-slate-900 font-mono-data">
                        {formatPopulation(country.population)}
                    </p>
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide">Health/GDP</p>
                    <p className="text-sm font-semibold text-slate-900 font-mono-data">
                        {formatPercent(country.healthGdpPercent)}
                    </p>
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide">Per Capita</p>
                    <p className="text-sm font-semibold text-slate-900 font-mono-data">
                        {formatCurrency(country.healthExpPerCapita)}
                    </p>
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide">Debt Service</p>
                    <p className="text-sm font-semibold text-slate-900 font-mono-data">
                        {formatPercent(country.debtServiceRatio)}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <p className="text-xs text-slate-400 text-center">Click to see details</p>
        </div>
    );
}
