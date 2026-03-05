'use client';

import { AppHeader } from './AppHeader';
import { SelectedCountryProvider } from '@/hooks/useSelectedCountry';
import { MobileNotice } from './MobileNotice';
import { OnboardingProvider } from '../onboarding/OnboardingProvider';
import { TourOverlay } from '../onboarding/TourOverlay';

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <SelectedCountryProvider>
            <OnboardingProvider>
                <div className="h-screen flex flex-col overflow-hidden bg-[#F1F5F9] font-sans text-slate-800">
                    <AppHeader />
                    {children}
                    <MobileNotice />
                    <TourOverlay />
                </div>
            </OnboardingProvider>
        </SelectedCountryProvider>
    );
}
