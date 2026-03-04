'use client';

import { useSelectedCountry } from '@/hooks/useSelectedCountry';
import { cn, formatNumber } from '@/lib/utils';
import { BOTTOM_BAR_INDICATORS } from '@/lib/constants';
import Link from 'next/link';

function renderIndicator(key: string, score: number) {
    if (key === 'service') {
        const text = score >= 70 ? 'Low Risk' : score >= 50 ? 'Moderate' : 'High Risk';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return <p className={cn('text-sm font-semibold font-mono-data', color)}>{text}</p>;
    }
    if (key === 'workforce') {
        const text = score >= 70 ? 'Good' : score >= 50 ? 'Medium' : 'Critical';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return <p className={cn('text-sm font-semibold font-mono-data', color)}>{text}</p>;
    }
    if (key === 'info') {
        const text = score >= 70 ? '70-100%' : score >= 41 ? '41-69%' : '0-40%';
        const color = score >= 70 ? 'text-green-500' : score >= 41 ? 'text-orange-500' : 'text-red-500';
        return <p className={cn('text-sm font-semibold font-mono-data', color)}>{text}</p>;
    }
    if (key === 'financing') {
        const text = score >= 70 ? 'Top Percentile' : score >= 50 ? 'Middle Percentile' : 'Lower Percentile';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return <p className={cn('text-sm font-semibold font-mono-data', color)}>{text}</p>;
    }

    // Default fallback for medicines / governance
    const text = score >= 70 ? 'Stable' : score >= 50 ? 'At Risk' : 'Critical';
    const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
    return <p className={cn('text-sm font-semibold font-mono-data', color)}>{text}</p>;
}

export function BottomBar() {
    const { country } = useSelectedCountry();

    if (!country) return null;

    return (
        <div className="h-[60px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex items-center px-4 gap-6 flex-shrink-0 z-10 overflow-x-auto">
            {/* Country */}
            <div className="flex items-center gap-2 flex-shrink-0">
                <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Country</p>
                <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`https://flagcdn.com/w20/${country.code}.png`}
                        alt={`${country.name} flag`}
                        className="w-5 h-4 object-cover rounded-sm"
                        width={20}
                        height={15}
                    />
                    <span className="text-sm font-medium text-slate-900 border-b-2 border-orange-500 pb-0.5">
                        {country.name}
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-slate-200 flex-shrink-0" />

            {/* Total Cases */}
            <div className="flex-shrink-0">
                <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Total Cases</p>
                <p className="text-sm font-bold text-orange-500 font-mono-data">
                    {formatNumber(country.totalCases)}
                </p>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-slate-200 flex-shrink-0" />

            {/* Building Block Indicators */}
            {BOTTOM_BAR_INDICATORS.map((indicator) => {
                const block = country.buildingBlocks[indicator.key as keyof typeof country.buildingBlocks];
                return (
                    <div key={indicator.key} className="flex-shrink-0">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">{indicator.label}</p>
                        {renderIndicator(indicator.key, block.score)}
                    </div>
                );
            })}

            {/* All Indicators Link */}
            <div className="ml-auto pl-4 border-l border-slate-200 flex-shrink-0">
                <Link
                    href="/country-profiles"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200"
                >
                    All Indicators →
                </Link>
            </div>
        </div>
    );
}
