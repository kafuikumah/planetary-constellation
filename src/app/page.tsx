'use client';

import { AfricaMap } from '@/components/charts/AfricaMap';
import { CountryInfoPanel } from '@/components/map/CountryInfoPanel';
import { MiniCountryProfile } from '@/components/map/MiniCountryProfile';
import { WelcomePrompt } from '@/components/map/WelcomePrompt';
import { useSelectedCountry } from '@/hooks/useSelectedCountry';

import { PageLayout } from '@/components/layout/PageLayout';
import { CountrySidebar } from '@/components/layout/CountrySidebar';
import { useOnboarding, TourStep } from '@/components/onboarding/OnboardingProvider';
import { useEffect } from 'react';

export default function MapViewPage() {
  const { selectedId } = useSelectedCountry();
  const { startTour, isCompleted } = useOnboarding();

  useEffect(() => {
    const tourSteps: TourStep[] = [
      {
        targetId: 'header-logo',
        title: 'Welcome to Afri Health',
        content: 'This dashboard provides a comprehensive look at health system performance across Africa using the WHO 6 Building Blocks framework.',
        placement: 'bottom'
      },
      {
        targetId: 'header-nav',
        title: 'Navigation',
        content: 'Easily switch between the Map View, Comparison Matrix, Benchmarking, and detailed Country Profiles.',
        placement: 'bottom'
      },
      {
        targetId: 'sidebar-container',
        title: 'Country Explorer',
        content: 'Use this sidebar to search for specific countries or browse the list to see their performance at a glance.',
        placement: 'right'
      },
      {
        targetId: 'map-container',
        title: 'Interactive Map',
        content: 'The map is color-coded by health score. Click on any country to see its detailed metrics in the info panel.',
        placement: 'top'
      },
      {
        targetId: 'mini-profile',
        title: 'Regional Snapshot',
        content: 'This panel shows quick stats for the selected country or region.',
        placement: 'left'
      }
    ];

    if (!isCompleted) {
      startTour(tourSteps);
    }
  }, [startTour, isCompleted]);

  return (
    <PageLayout sidebar={<CountrySidebar />} isMapView={true}>
      <div className="relative w-full h-full bg-slate-50 overflow-hidden">
        {/* Welcome Prompt - Floating centered initial view */}
        <WelcomePrompt />

        {/* Country Info Panel — floating left visible ON CLICK (State 3) */}
        {selectedId && (
          <div id="country-info-panel" className="absolute top-4 left-4 bottom-4 z-20 animate-in fade-in slide-in-from-left-4 duration-300 flex flex-col max-h-[calc(100%-2rem)]">
            <CountryInfoPanel />
          </div>
        )}

        {/* Africa Map (States 1 & 2 handle their own visual logic) */}
        <div id="map-container" className="w-full h-full rounded-[10px] overflow-hidden">
          <AfricaMap />
        </div>

        {/* Mini Profile — floating top right (State 2) */}
        <div id="mini-profile" className="absolute top-4 right-4 z-20">
          <MiniCountryProfile />
        </div>
      </div>
    </PageLayout>
  );
}
