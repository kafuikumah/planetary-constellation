'use client';

import { useState, useEffect } from 'react';
import { Heart, Users, BarChart3, DollarSign, Pill, Building2, BookOpen, Database, Calculator } from 'lucide-react';

const blocks = [
    { name: 'Service Delivery', icon: Heart, color: 'bg-blue-50 text-blue-500', desc: 'Delivery of effective, safe, quality health services to those who need them.' },
    { name: 'Health Workforce', icon: Users, color: 'bg-purple-50 text-purple-500', desc: 'Health workers who are responsive, fair and efficient to achieve the best health outcomes.' },
    { name: 'Health Information Systems', icon: BarChart3, color: 'bg-cyan-50 text-cyan-500', desc: 'Production, analysis, dissemination and use of reliable and timely health information.' },
    { name: 'Health Financing', icon: DollarSign, color: 'bg-amber-50 text-amber-500', desc: 'Raising adequate funds so people can use needed services and are protected from financial hardship.' },
    { name: 'Medical Products & Technologies', icon: Pill, color: 'bg-emerald-50 text-emerald-500', desc: 'Equitable access to essential medical products, vaccines and technologies.' },
    { name: 'Leadership & Governance', icon: Building2, color: 'bg-red-50 text-red-500', desc: 'Strategic policy frameworks combined with effective oversight and accountability.' },
];

const dataSources = [
    { name: 'World Health Organization (WHO)', desc: 'Global Health Observatory data repository' },
    { name: 'World Bank', desc: 'World Development Indicators and health expenditure data' },
    { name: 'African Union', desc: 'Africa Health Strategy and institutional reports' },
    { name: 'UNICEF', desc: 'Maternal and child health indicators' },
    { name: 'Institute for Health Metrics and Evaluation (IHME)', desc: 'Global Burden of Disease study' },
];

import { PageLayout } from '@/components/layout/PageLayout';
import { Search } from 'lucide-react';
import { useOnboarding, TourStep } from '@/components/onboarding/OnboardingProvider';

export default function MethodologyPage() {
    const [activeSection, setActiveSection] = useState('who-framework');

    const { startTour } = useOnboarding();

    useEffect(() => {
        const hasSeenMethodologyTour = localStorage.getItem('tour_methodology_seen');
        if (hasSeenMethodologyTour === 'true') return;

        const tourSteps: TourStep[] = [
            {
                targetId: 'methodology-sidebar',
                title: 'Table of Contents',
                content: 'Navigate through different sections of our methodology using this sidebar.',
                placement: 'right'
            },
            {
                targetId: 'scoring',
                title: 'Scoring Logic',
                content: 'Understand how we calculate the scores and what the different color codes mean.',
                placement: 'top'
            },
            {
                targetId: 'data-sources',
                title: 'Verified Sources',
                content: 'We use data from reputable international organizations like the WHO and World Bank.',
                placement: 'top'
            }
        ];

        startTour(tourSteps);
        localStorage.setItem('tour_methodology_seen', 'true');
    }, [startTour]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0px -80% 0px' }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const linkBaseClass = "block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all";
    const getLinkClass = (id: string) =>
        activeSection === id ? `${linkBaseClass} bg-[#F29D38]/10 text-[#F29D38]` : `${linkBaseClass} text-slate-600 hover:bg-slate-50 hover:text-slate-900`;

    const sidebar = (
        <aside id="methodology-sidebar" className="w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex-shrink-0">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search methodology..."
                        className="w-full border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F29D38]/30 focus:border-[#F29D38] transition-all"
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 block">Contents</p>
                <a href="#who-framework" className={getLinkClass('who-framework')}>WHO Framework</a>
                <a href="#scoring" className={getLinkClass('scoring')}>Scoring Methodology</a>
                <a href="#data-sources" className={getLinkClass('data-sources')}>Data Sources</a>
                <a href="#limitations" className={getLinkClass('limitations')}>Limitations & Caveats</a>
            </div>
        </aside>
    );

    return (
        <PageLayout sidebar={sidebar}>
            <div className="p-6 space-y-8 max-w-4xl mx-auto w-full">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">Methodology</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Understanding our approach to measuring and comparing African health systems
                    </p>
                </div>

                {/* WHO Framework */}
                <section id="who-framework" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 scroll-mt-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-orange-500" />
                        </div>
                        <h2 className="text-lg font-semibold text-slate-900">WHO 6 Building Blocks Framework</h2>
                    </div>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        Our assessment is structured around the World Health Organization&apos;s six building blocks of a health system.
                        This framework provides a comprehensive approach to understanding and evaluating health systems globally,
                        enabling meaningful comparisons across countries with different contexts and priorities.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {blocks.map((block) => (
                            <div key={block.name} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${block.color}`}>
                                    <block.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-800">{block.name}</h3>
                                    <p className="text-xs text-slate-500 mt-1">{block.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Scoring */}
                <section id="scoring" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 scroll-mt-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                            <Calculator className="w-5 h-5 text-blue-500" />
                        </div>
                        <h2 className="text-lg font-semibold text-slate-900">Scoring Methodology</h2>
                    </div>
                    <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                        <p>
                            Each building block is scored on a 0–100 scale based on a composite of multiple indicators.
                            The overall country score is the arithmetic mean of all six building block scores.
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="text-center p-4 rounded-lg bg-green-50">
                                <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">70+</div>
                                <p className="text-xs font-semibold text-green-700">Strong</p>
                                <p className="text-[10px] text-green-600">Meets or exceeds WHO benchmarks</p>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-orange-50">
                                <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">50+</div>
                                <p className="text-xs font-semibold text-orange-700">Moderate</p>
                                <p className="text-[10px] text-orange-600">Progressing but gaps remain</p>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-red-50">
                                <div className="w-8 h-8 rounded-full bg-red-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">&lt;50</div>
                                <p className="text-xs font-semibold text-red-700">Weak</p>
                                <p className="text-[10px] text-red-600">Significant challenges ahead</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Sources */}
                <section id="data-sources" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 scroll-mt-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                            <Database className="w-5 h-5 text-purple-500" />
                        </div>
                        <h2 className="text-lg font-semibold text-slate-900">Data Sources</h2>
                    </div>
                    <div className="space-y-3">
                        {dataSources.map(s => (
                            <div key={s.name} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-slate-800">{s.name}</p>
                                    <p className="text-xs text-slate-500">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Limitations */}
                <section id="limitations" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 scroll-mt-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-3">Limitations & Caveats</h2>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex gap-2"><span className="text-orange-500">•</span>Data availability varies significantly across countries and indicators</li>
                        <li className="flex gap-2"><span className="text-orange-500">•</span>Some indicators use proxy measures where direct data is unavailable</li>
                        <li className="flex gap-2"><span className="text-orange-500">•</span>Scores reflect the most recently available data, which may span different years</li>
                        <li className="flex gap-2"><span className="text-orange-500">•</span>Composite scoring inherently simplifies complex health system dynamics</li>
                    </ul>
                </section>
            </div>
        </PageLayout>
    );
}
