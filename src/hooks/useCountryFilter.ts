'use client';

import { useState, useMemo } from 'react';
import { Country } from '@/types/country';

export function useCountryFilter(countries: Country[]) {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('All Regions');
    const [incomeLevel, setIncomeLevel] = useState('All Income Levels');

    const filtered = useMemo(() => {
        let result = countries;

        if (region !== 'All Regions') {
            result = result.filter(c => c.region === region);
        }

        if (incomeLevel !== 'All Income Levels') {
            result = result.filter(c => c.incomeLevel === incomeLevel);
        }

        if (query) {
            const q = query.toLowerCase();
            result = result.filter(c =>
                c.name.toLowerCase().includes(q)
            );
        }

        return result;
    }, [countries, query, region, incomeLevel]);

    return {
        query, setQuery,
        region, setRegion,
        incomeLevel, setIncomeLevel,
        filtered
    };
}
