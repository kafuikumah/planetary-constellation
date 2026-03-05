'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding } from './OnboardingProvider';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TourOverlay() {
    const { currentStepIndex, isOpen, steps, nextStep, prevStep, skipTour } = useOnboarding();
    const [coords, setCoords] = useState<{ top: number; left: number; width: number; height: number; padding: number } | null>(null);

    const currentStep = steps[currentStepIndex];

    const updateCoords = useCallback(() => {
        if (!isOpen || !currentStep) return;

        // For "center" placement or if no targetId, we center it.
        if (currentStep.placement === 'center' || !currentStep.targetId) {
            setCoords(null);
            return;
        }

        const element = document.getElementById(currentStep.targetId);
        if (element) {
            const rect = element.getBoundingClientRect();
            setCoords({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                padding: 8
            });
            // Scroll into view if needed
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // If element not found, we fallback to center or hide
            setCoords(null);
        }
    }, [isOpen, currentStep]);

    useEffect(() => {
        updateCoords();
        window.addEventListener('resize', updateCoords);
        window.addEventListener('scroll', updateCoords, true);
        return () => {
            window.removeEventListener('resize', updateCoords);
            window.removeEventListener('scroll', updateCoords, true);
        };
    }, [updateCoords]);

    if (!isOpen || !currentStep) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
            <AnimatePresence>
                {/* Spotlight SVG */}
                <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full pointer-events-auto"
                >
                    <defs>
                        <mask id="spotlight-mask">
                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                            {coords && (
                                <motion.rect
                                    layout
                                    x={coords.left - coords.padding}
                                    y={coords.top - coords.padding}
                                    width={coords.width + coords.padding * 2}
                                    height={coords.height + coords.padding * 2}
                                    rx="12"
                                    fill="black"
                                    initial={false}
                                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                />
                            )}
                        </mask>
                    </defs>
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="rgba(0, 0, 0, 0.6)"
                        mask="url(#spotlight-mask)"
                        className="backdrop-blur-[2px]"
                    />
                </motion.svg>

                {/* Tooltip Content */}
                <TourTooltip
                    step={currentStep}
                    coords={coords}
                    totalSteps={steps.length}
                    currentIndex={currentStepIndex}
                    onNext={nextStep}
                    onPrev={prevStep}
                    onSkip={skipTour}
                />
            </AnimatePresence>
        </div>
    );
}

function TourTooltip({
    step,
    coords,
    totalSteps,
    currentIndex,
    onNext,
    onPrev,
    onSkip
}: {
    step: any,
    coords: any,
    totalSteps: number,
    currentIndex: number,
    onNext: () => void,
    onPrev: () => void,
    onSkip: () => void
}) {
    const tooltipStyle = useMemo(() => {
        if (!coords || step.placement === 'center') {
            return {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'fixed' as const
            };
        }

        const padding = 20;
        const tooltipWidth = 320;
        // Simple placement logic
        let top = coords.top + coords.height + padding;
        let left = coords.left + (coords.width / 2) - (tooltipWidth / 2);

        // Boundary checks
        if (left < padding) left = padding;
        if (left + tooltipWidth > window.innerWidth - padding) left = window.innerWidth - tooltipWidth - padding;
        if (top + 200 > window.innerHeight - padding) {
            top = coords.top - 200 - padding; // Show above if no space below
        }

        return {
            top: `${top}px`,
            left: `${left}px`,
            position: 'absolute' as const,
            width: `${tooltipWidth}px`
        };
    }, [coords, step]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            style={tooltipStyle}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 pointer-events-auto z-[10000]"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 mb-1">
                        Step {currentIndex + 1} of {totalSteps}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{step.title}</h3>
                </div>
                <button
                    onClick={onSkip}
                    className="p-1 hover:bg-slate-100 rounded-lg transition-colors text-slate-400"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {step.content}
            </p>

            <div className="flex items-center justify-between mt-auto">
                <button
                    onClick={onSkip}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                >
                    Skip Tour
                </button>

                <div className="flex items-center gap-2">
                    {currentIndex > 0 && (
                        <button
                            onClick={onPrev}
                            className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-600"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                    )}
                    <button
                        onClick={onNext}
                        className="bg-orange-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all border-b-2 border-orange-700 active:translate-y-px active:border-b-0"
                    >
                        {currentIndex === totalSteps - 1 ? 'Finish' : 'Next'}
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
