import { useState } from 'react';
import { getCountryById } from '@/data/countries';
import { getPoliciesByCountry } from '@/data/policies';
import { calculateOverallScore } from '@/lib/utils';

export function useCountryProfile(id: string) {
    const country = getCountryById(id);
    const policies = country ? getPoliciesByCountry(country.id) : [];
    const overallScore = country ? calculateOverallScore(country.buildingBlocks) : 0;
    const rank = country ? country.afriHealthRank : 0;
    const hasFiscalAlert = country ? country.debtServiceRatio > country.healthBudgetPercent : false;

    const [openModal, setOpenModal] = useState<string | null>(null);

    return {
        country,
        policies,
        overallScore,
        rank,
        hasFiscalAlert,
        openModal,
        setOpenModal,
    };
}
