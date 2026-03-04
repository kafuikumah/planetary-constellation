'use client';

import { Activity } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const tabs = [
    { label: 'Map View', href: '/' },
    { label: 'Comparison Matrix', href: '/comparison' },
    { label: 'Policies', href: '/policies' },
    { label: 'Benchmarking', href: '/benchmarking' },
    { label: 'Country Profiles', href: '/country-profiles' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'About', href: '/about' },
];

export function AppHeader() {
    const pathname = usePathname();

    return (
        <header className="h-[60px] mx-4 mt-4 mb-2 flex items-center gap-4 flex-shrink-0 z-20">
            {/* Logo Block */}
            <div className="w-[280px] h-full bg-white border border-slate-200 rounded-lg shadow-sm flex items-center px-4 gap-3 flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    {/* Empty gray circle mimicking the mockup */}
                </div>
                <span className="text-[15px] font-bold font-sans text-slate-900 tracking-tight">Afri Health</span>
            </div>

            {/* Navigation Block */}
            <nav className="flex-1 h-full bg-white border border-slate-200 rounded-lg shadow-sm flex items-center px-10 gap-10 overflow-x-auto">
                {tabs.map((tab) => {
                    const isActive = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={cn(
                                'h-full flex items-center text-sm font-medium transition-all whitespace-nowrap border-b-[3px]',
                                isActive
                                    ? 'text-[#606060] border-[#606060]'
                                    : 'text-[#A2A2A2] border-transparent hover:text-slate-600'
                            )}
                        >
                            {tab.label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
