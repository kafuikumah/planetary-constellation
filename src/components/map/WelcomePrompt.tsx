'use client';

import { useEffect, useState } from 'react';
import { useSelectedCountry } from '@/hooks/useSelectedCountry';
import { X, Map, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WelcomePrompt() {
    const { selectedId } = useSelectedCountry();
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    // Initialize visibility based on session storage and selected country
    useEffect(() => {
        const hasSeenPrompt = sessionStorage.getItem('hasSeenWelcomePrompt');
        if (!hasSeenPrompt && !selectedId) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        }
    }, [selectedId]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem('hasSeenWelcomePrompt', 'true');
    };

    // Automatically dismiss if a country is selected
    useEffect(() => {
        if (selectedId && isVisible) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            handleDismiss();
        }
    }, [selectedId, isVisible]);

    // If completely dismissed, remove from DOM
    if (!isVisible && isDismissed) {
        return null;
    }

    // Always keep it in the tree if it hasn't been dismissed, so the fade-out animation can play
    return (
        <div
            className={cn(
                "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm transition-all duration-500",
                isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
        >
            <div
                className={cn(
                    "relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 transform transition-all duration-500",
                    isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                )}
            >
                {/* Close Button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    aria-label="Close welcome prompt"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Header */}
                    <div className="w-16 h-16 bg-[#F29D38]/10 rounded-2xl flex items-center justify-center mb-2">
                        <Map className="w-8 h-8 text-[#F29D38]" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-sans text-slate-900 mb-2">
                            Explore African Health Financing
                        </h2>
                        <p className="text-slate-600 font-sans leading-relaxed">
                            Discover data-driven insights into health system performance and financing across the continent.
                        </p>
                    </div>

                    {/* How to start */}
                    <div className="w-full bg-slate-50 rounded-xl p-5 border border-slate-100 text-left space-y-4">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                            How to begin
                        </h3>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 text-slate-400 rounded-lg shadow-sm border border-slate-100 shrink-0">
                                <Map className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Select on Map</h4>
                                <p className="text-sm text-slate-500">Click any highlighted country to view its overview and performance scores.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-2 text-slate-400 rounded-lg shadow-sm border border-slate-100 shrink-0">
                                <Search className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Search Sidebar</h4>
                                <p className="text-sm text-slate-500">Use the left sidebar to find specific countries or browse the full list.</p>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <button
                        onClick={handleDismiss}
                        className="w-full bg-[#F29D38] hover:bg-[#E08D28] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#F29D38]/20 transition-all hover:shadow-[#F29D38]/40 hover:-translate-y-0.5"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
