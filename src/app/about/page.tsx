'use client';

import { useState, useEffect } from 'react';
import { Heart, Globe, Users, Target, Mail, ExternalLink } from 'lucide-react';

const team = [
    { name: 'African Union Commission', role: 'Strategic Partner', desc: 'Providing continental health policy frameworks and guidance.' },
    { name: 'WHO Africa Regional Office', role: 'Technical Partner', desc: 'Supporting health systems assessment methodology and data.' },
    { name: 'Africa CDC', role: 'Data Partner', desc: 'Disease surveillance and public health intelligence.' },
    { name: 'World Bank Africa', role: 'Financing Partner', desc: 'Health financing data and analytical support.' },
];

const partners = [
    'UNICEF', 'GAVI', 'Global Fund', 'Bill & Melinda Gates Foundation',
    'Africa Development Bank', 'USAID', 'UK FCDO', 'GIZ',
];

import { PageLayout } from '@/components/layout/PageLayout';

export default function AboutPage() {
    const [activeSection, setActiveSection] = useState('mission');

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

        const sections = document.querySelectorAll('section[id], div[id="vision"]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const linkBaseClass = "block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all";
    const getLinkClass = (id: string) =>
        activeSection === id ? `${linkBaseClass} bg-[#F29D38]/10 text-[#F29D38]` : `${linkBaseClass} text-slate-600 hover:bg-slate-50 hover:text-slate-900`;

    const sidebar = (
        <aside className="w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 block">Contents</p>
                <a href="#mission" className={getLinkClass('mission')}>Our Mission</a>
                <a href="#vision" className={getLinkClass('vision')}>Vision & Goals</a>
                <a href="#team" className={getLinkClass('team')}>Key Partners</a>
                <a href="#partners" className={getLinkClass('partners')}>Supporting Organizations</a>
                <a href="#contact" className={getLinkClass('contact')}>Contact</a>
            </div>
        </aside>
    );

    return (
        <PageLayout sidebar={sidebar}>
            <div className="p-6 space-y-8 max-w-4xl mx-auto w-full">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">About Afri Health</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Tracking and strengthening health systems across Africa
                    </p>
                </div>

                {/* Mission */}
                <section id="mission" className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100 p-8 scroll-mt-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-lg font-bold text-slate-900">Our Mission</h2>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                        Afri Health is an interactive dashboard for tracking and comparing health system performance
                        across <span className="font-semibold text-orange-600">54 African nations</span>. Built on the
                        WHO&apos;s 6 Building Blocks Framework, we provide actionable insights to policymakers, researchers,
                        and development partners working to strengthen health systems across the continent.
                    </p>
                </section>

                {/* Vision & Goals */}
                <div id="vision" className="grid grid-cols-1 md:grid-cols-3 gap-4 scroll-mt-6">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                        <Globe className="w-8 h-8 text-blue-500 mb-3" />
                        <h3 className="text-sm font-semibold text-slate-900 mb-2">Pan-African Coverage</h3>
                        <p className="text-xs text-slate-500">Comprehensive data across all 54 African Union member states, enabling continent-wide analysis.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                        <Target className="w-8 h-8 text-green-500 mb-3" />
                        <h3 className="text-sm font-semibold text-slate-900 mb-2">Evidence-Based Insights</h3>
                        <p className="text-xs text-slate-500">Data-driven analysis supporting informed decision-making for health policy and investment.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5">
                        <Users className="w-8 h-8 text-purple-500 mb-3" />
                        <h3 className="text-sm font-semibold text-slate-900 mb-2">Multi-Stakeholder Collaboration</h3>
                        <p className="text-xs text-slate-500">Bringing together governments, institutions, and partners for collective health system strengthening.</p>
                    </div>
                </div>

                {/* Team */}
                <section id="team" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 scroll-mt-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Key Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {team.map(t => (
                            <div key={t.name} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                                    <span className="text-sm font-bold text-slate-500">{t.name[0]}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                                    <p className="text-xs text-orange-500 font-medium">{t.role}</p>
                                    <p className="text-xs text-slate-500 mt-1">{t.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Supporting Partners */}
                <section id="partners" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 scroll-mt-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Supporting Organizations</h2>
                    <div className="flex flex-wrap gap-3">
                        {partners.map(p => (
                            <span key={p} className="px-4 py-2 bg-slate-50 rounded-full text-sm text-slate-600 border border-slate-100">
                                {p}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 scroll-mt-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Contact</h2>
                    <div className="flex flex-wrap gap-4">
                        <a href="mailto:info@afrihealth.org" className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange-500 transition-colors">
                            <Mail className="w-4 h-4" /> info@afrihealth.org
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange-500 transition-colors">
                            <ExternalLink className="w-4 h-4" /> Website
                        </a>
                    </div>
                </section>

                {/* Footer Note */}
                <div className="text-center pb-8">
                    <p className="text-xs text-slate-400">
                        Afri Health Dashboard V0.0.01 — Built with ❤️ for African health systems
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
