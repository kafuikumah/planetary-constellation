'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Country } from '@/types/country';
import { getCountryById } from '@/data/countries';

interface SelectedCountryContextType {
    country: Country | undefined;
    hoveredCountry: Country | undefined;
    selectedId: string | null;
    setSelectedId: (id: string | null) => void;
    hoveredId: string | null;
    setHoveredId: (id: string | null) => void;
}

const SelectedCountryContext = createContext<SelectedCountryContextType | undefined>(undefined);

export function SelectedCountryProvider({ children }: { children: ReactNode }) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const country = selectedId ? getCountryById(selectedId) : undefined;
    const hoveredCountry = hoveredId ? getCountryById(hoveredId) : undefined;

    return (
        <SelectedCountryContext.Provider value={{
            country, hoveredCountry,
            selectedId, setSelectedId,
            hoveredId, setHoveredId
        }}>
            {children}
        </SelectedCountryContext.Provider>
    );
}

export function useSelectedCountry() {
    const context = useContext(SelectedCountryContext);
    if (!context) {
        throw new Error('useSelectedCountry must be used within SelectedCountryProvider');
    }
    return context;
}
