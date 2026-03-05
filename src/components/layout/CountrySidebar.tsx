'use client';

import { Search, ChevronDown } from 'lucide-react';
import { getAllCountriesAlphabetical } from '@/data/countries';
import { useCountryFilter } from '@/hooks/useCountryFilter';
import { useSelectedCountry } from '@/hooks/useSelectedCountry';
import { cn } from '@/lib/utils';

const allCountries = getAllCountriesAlphabetical();

interface CountrySidebarProps {
    selectedCountry?: string;
    onCountrySelect?: (id: string) => void;
}

export function CountrySidebar({ selectedCountry, onCountrySelect }: CountrySidebarProps = {}) {
    const { query, setQuery, filtered } = useCountryFilter(allCountries);
    const { selectedId: contextSelectedId, setSelectedId: contextSetSelectedId } = useSelectedCountry();

    const currentSelectedId = selectedCountry !== undefined ? selectedCountry : contextSelectedId;
    const handleSelect = onCountrySelect || contextSetSelectedId;

    return (
        <aside className="w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-slate-100 flex-shrink-0">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by Country"
                        className="w-full border border-slate-200 rounded-lg pl-9 pr-9 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F29D38]/30 focus:border-[#F29D38] transition-all"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
            </div>

            {/* Country list */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-2 space-y-0.5">
                    {filtered.map((country) => (
                        <button
                            key={country.id}
                            onClick={() => handleSelect(country.id)}
                            className={cn(
                                'w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all',
                                currentSelectedId === country.id
                                    ? 'bg-[#F29D38]/10 text-[#F29D38]'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            )}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`https://flagcdn.com/w20/${country.code}.png`}
                                alt={`${country.name} flag`}
                                className="w-6 h-4 object-cover rounded-[2px] shadow-sm flex-shrink-0"
                                width={24}
                                height={16}
                            />
                            <span className="truncate">{country.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-slate-100 bg-slate-50/50 flex-shrink-0">
                <p className="text-[10px] text-slate-400 text-center font-medium uppercase tracking-wider">
                    Afri Health V0.0.01
                </p>
            </div>
        </aside>
    );
}
