'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export interface TourStep {
    targetId: string;
    title: string;
    content: string;
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

interface OnboardingContextType {
    currentStepIndex: number;
    isOpen: boolean;
    isCompleted: boolean;
    steps: TourStep[];
    nextStep: () => void;
    prevStep: () => void;
    skipTour: () => void;
    startTour: (customSteps?: TourStep[]) => void;
    setSteps: (steps: TourStep[]) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [steps, setSteps] = useState<TourStep[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const completed = localStorage.getItem('onboarding_completed');
        if (completed === 'true') {
            setIsCompleted(true);
        }
    }, []);

    const startTour = useCallback((customSteps?: TourStep[]) => {
        if (customSteps) setSteps(customSteps);
        setCurrentStepIndex(0);
        setIsOpen(true);
    }, []);

    const nextStep = useCallback(() => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
        } else {
            setIsOpen(false);
            setIsCompleted(true);
            localStorage.setItem('onboarding_completed', 'true');
        }
    }, [currentStepIndex, steps.length]);

    const prevStep = useCallback(() => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prev => prev - 1);
        }
    }, [currentStepIndex]);

    const skipTour = useCallback(() => {
        setIsOpen(false);
        setIsCompleted(true);
        localStorage.setItem('onboarding_completed', 'true');
    }, []);

    // Reset step when pathname changes (optional behavior)
    useEffect(() => {
        if (isOpen) {
            // If the tour is open and path changes, we might want to close it or adapt.
            // For now, let's close it if the target element isn't found on the new page.
        }
    }, [pathname, isOpen]);

    return (
        <OnboardingContext.Provider
            value={{
                currentStepIndex,
                isOpen,
                isCompleted,
                steps,
                nextStep,
                prevStep,
                skipTour,
                startTour,
                setSteps,
            }}
        >
            {children}
        </OnboardingContext.Provider>
    );
}

export function useOnboarding() {
    const context = useContext(OnboardingContext);
    if (context === undefined) {
        throw new Error('useOnboarding must be used within an OnboardingProvider');
    }
    return context;
}
