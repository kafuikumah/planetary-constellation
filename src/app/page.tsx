'use client';

import { AfricaMap } from '@/components/charts/AfricaMap';
import { CountryInfoPanel } from '@/components/map/CountryInfoPanel';
import { MiniCountryProfile } from '@/components/map/MiniCountryProfile';
import { WelcomePrompt } from '@/components/map/WelcomePrompt';
import { useSelectedCountry } from '@/hooks/useSelectedCountry';

import { PageLayout } from '@/components/layout/PageLayout';
import { CountrySidebar } from '@/components/layout/CountrySidebar';

export default function MapViewPage() {
  const { selectedId } = useSelectedCountry();

  return (
    <PageLayout sidebar={<CountrySidebar />} isMapView={true}>
      <div className="relative w-full h-full bg-slate-50 overflow-hidden">
        {/* Welcome Prompt - Floating centered initial view */}
        <WelcomePrompt />

        {/* Country Info Panel — floating left visible ON CLICK (State 3) */}
        {selectedId && (
          <div className="absolute top-4 left-4 bottom-4 z-20 animate-in fade-in slide-in-from-left-4 duration-300 flex flex-col max-h-[calc(100%-2rem)]">
            <CountryInfoPanel />
          </div>
        )}

        {/* Africa Map (States 1 & 2 handle their own visual logic) */}
        <div className="w-full h-full rounded-[10px] overflow-hidden">
          <AfricaMap />
        </div>

        {/* Mini Profile — floating top right (State 2) */}
        <div className="absolute top-4 right-4 z-20">
          <MiniCountryProfile />
        </div>
      </div>
    </PageLayout>
  );
}
