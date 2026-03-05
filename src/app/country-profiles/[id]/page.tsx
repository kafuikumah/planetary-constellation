'use client';

import { useParams, useRouter } from 'next/navigation';
import { useCountryProfile } from '@/hooks/useCountryProfile';
import { getAllCountriesAlphabetical } from '@/data/countries';
import { CountryProfileHeader } from '@/components/country-profile/CountryProfileHeader';
import { FiscalAlert } from '@/components/country-profile/FiscalAlert';
import { BuildingBlockCard } from '@/components/country-profile/BuildingBlockCard';
import { PolicyAccordion } from '@/components/country-profile/PolicyAccordion';
import { ScoreBreakdownModal, BuildingBlockModal } from '@/components/country-profile/ProfileModals';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

import { PageLayout } from '@/components/layout/PageLayout';
import { CountrySidebar } from '@/components/layout/CountrySidebar';
import { useOnboarding, TourStep } from '@/components/onboarding/OnboardingProvider';
import { useEffect } from 'react';

export default function CountryProfilePage() {
    const params = useParams();
    const router = useRouter();
    const id = typeof params.id === 'string' ? params.id : '';

    const {
        country,
        policies,
        overallScore,
        rank,
        hasFiscalAlert,
        openModal,
        setOpenModal,
    } = useCountryProfile(id);

    const { startTour } = useOnboarding();

    useEffect(() => {
        const hasSeenDetailTour = localStorage.getItem('tour_country_detail_seen');
        if (hasSeenDetailTour === 'true') return;

        const tourSteps: TourStep[] = [
            {
                targetId: 'profile-header-section',
                title: 'Country Overview',
                content: 'This header gives you a quick snapshot of the overall score, rank, and population of the country.',
                placement: 'bottom'
            },
            {
                targetId: 'blocks-performance',
                title: 'Building Blocks',
                content: 'Click on any of the 6 WHO building blocks to see a detailed breakdown of the indicators that contribute to that score.',
                placement: 'top'
            },
            {
                targetId: 'policy-framework',
                title: 'Policies & Frameworks',
                content: 'Detailed information about the institutional and economic policies of the country are listed here.',
                placement: 'top'
            }
        ];

        startTour(tourSteps);
        localStorage.setItem('tour_country_detail_seen', 'true');
    }, [startTour]);

    const allCountries = getAllCountriesAlphabetical();

    if (!country) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50 relative h-full">
                <AlertCircle className="w-12 h-12 text-slate-300 mb-4" />
                <h1 className="text-xl font-bold text-slate-900 mb-2">Country Not Found</h1>
                <p className="text-slate-500 mb-6">The profile you are looking for does not exist or has been removed.</p>
                <button
                    onClick={() => router.push('/country-profiles')}
                    className="px-4 py-2 bg-[#F29D38] hover:bg-orange-500 text-white rounded-lg font-semibold transition-colors"
                >
                    Return to Profiles
                </button>
            </div>
        );
    }

    const handleCountrySelect = (cId: string) => {
        router.push(`/country-profiles/${cId}`);
    };

    return (
        <PageLayout sidebar={<CountrySidebar selectedCountry={id} onCountrySelect={handleCountrySelect} />}>
            <div className="flex flex-col h-full relative overflow-hidden">
                {/* Top Navigation Bar for returning */}
                <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center shrink-0">
                    <Link href="/country-profiles" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#F29D38] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Map
                    </Link>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto w-full">

                    {/* Section A: Header */}
                    <div id="profile-header-section">
                        <CountryProfileHeader
                            country={country}
                            overallScore={overallScore}
                            rank={rank}
                            onScoreClick={() => setOpenModal('scoreBreakdown')}
                        />
                    </div>

                    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">

                        {/* Section B: Fiscal Alert */}
                        {hasFiscalAlert && (
                            <FiscalAlert
                                debtServiceRatio={country.debtServiceRatio}
                                healthBudgetPercent={country.healthBudgetPercent}
                            />
                        )}

                        {/* Section C: Building Blocks Grid */}
                        <section id="blocks-performance">
                            <h2 className="text-lg font-bold font-heading text-slate-900 mb-5 pl-1 border-l-4 border-[#F29D38]">
                                WHO 6 Building Blocks Performance
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {Object.entries(country.buildingBlocks).map(([key, data]) => {
                                    const names: Record<string, string> = {
                                        service: 'Service Delivery', workforce: 'Health Workforce', info: 'Health Information',
                                        financing: 'Health Financing', medicines: 'Medicines & Tech', governance: 'Leadership & Gov.'
                                    };
                                    const colors: Record<string, string> = {
                                        service: 'bg-blue-500', workforce: 'bg-violet-500', info: 'bg-cyan-500',
                                        financing: 'bg-emerald-500', medicines: 'bg-amber-500', governance: 'bg-red-500'
                                    };

                                    return (
                                        <BuildingBlockCard
                                            key={key}
                                            blockKey={key}
                                            name={names[key] || key}
                                            data={data}
                                            colorClass={colors[key] || 'bg-slate-500'}
                                            onClick={() => setOpenModal(key)}
                                        />
                                    );
                                })}
                            </div>
                        </section>

                        {/* Section D: Policy Accordion */}
                        <section id="policy-framework">
                            <PolicyAccordion policies={policies} />
                        </section>
                    </div>

                    {/* Section E: Modals */}
                    {openModal === 'scoreBreakdown' && (
                        <ScoreBreakdownModal
                            country={country}
                            overallScore={overallScore}
                            onClose={() => setOpenModal(null)}
                        />
                    )}

                    {openModal && openModal !== 'scoreBreakdown' && (
                        <BuildingBlockModal
                            blockKey={openModal}
                            country={country}
                            allCountries={allCountries}
                            onClose={() => setOpenModal(null)}
                        />
                    )}

                </div>
            </div>
        </PageLayout>
    );
}
