'use client';

import { useState, useMemo } from 'react';
import { Country } from '@/types/country';
import { getCountryById } from '@/data/countries';

export function useComparison() {
    const [selectedIds, setSelectedIds] = useState<string[]>(['nga', 'zaf', 'ken']);

    const selectedCountries = useMemo(() => {
        return selectedIds
            .map(id => getCountryById(id))
            .filter((c): c is Country => c !== undefined);
    }, [selectedIds]);

    const addCountry = (id: string) => {
        if (!selectedIds.includes(id)) {
            setSelectedIds(prev => [...prev, id]);
        }
    };

    const removeCountry = (id: string) => {
        setSelectedIds(prev => prev.filter(i => i !== id));
    };

    const toggleCountry = (id: string) => {
        if (selectedIds.includes(id)) {
            removeCountry(id);
        } else {
            addCountry(id);
        }
    };

    return { selectedIds, selectedCountries, addCountry, removeCountry, toggleCountry, setSelectedIds };
}
