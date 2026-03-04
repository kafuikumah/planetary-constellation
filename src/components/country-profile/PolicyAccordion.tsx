'use client';

import { useState } from 'react';
import { Policy } from '@/types/policy';
import { ChevronDown, ExternalLink, FileText } from 'lucide-react';
import { ImpactBadge } from '@/components/shared/ImpactBadge';

interface Props {
    policies: Policy[];
}

export function PolicyAccordion({ policies }: Props) {
    if (!policies || policies.length === 0) {
        return (
            <div className="bg-white rounded-[10px] shadow-sm border border-slate-200 p-6">
                <h2 className="text-base font-semibold text-slate-900 mb-2">Health Policies</h2>
                <div className="py-8 text-center text-sm text-slate-400 italic bg-slate-50 rounded-lg border border-slate-100">
                    No policies on record for this country.
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[10px] shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#F29D38]" />
                    Health Policies
                </h2>
                <span className="bg-[#F29D38]/10 text-[#F29D38] text-xs font-bold px-2.5 py-1 rounded-full">
                    {policies.length} {policies.length === 1 ? 'Policy' : 'Policies'}
                </span>
            </div>

            <div className="divide-y divide-slate-100">
                {policies.map(policy => (
                    <AccordionItem key={policy.id} policy={policy} />
                ))}
            </div>
        </div>
    );
}

function AccordionItem({ policy }: { policy: Policy }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-5 hover:bg-slate-50 transition-colors flex items-start gap-4 focus:outline-none"
            >
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                        <h3 className="font-semibold text-slate-900 group-hover:text-[#F29D38] transition-colors pr-4">
                            {policy.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-medium">
                                {policy.status}
                            </span>
                            <span className="text-xs font-mono-data text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                                {policy.yearEnacted}
                            </span>
                        </div>
                    </div>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 mt-0.5 shrink-0 group-hover:text-[#F29D38] ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="px-5 pb-6 pt-1 animate-in slide-in-from-top-2 fade-in duration-200">
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mb-4">
                            {policy.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Category:</span>
                                <span className="font-medium text-slate-700">{policy.category}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Agency:</span>
                                <span className="font-medium text-slate-700">{policy.agency}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Impact:</span>
                                <ImpactBadge impact={policy.impact} />
                            </div>

                            <a
                                href={policy.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-[#F29D38] hover:text-orange-500 font-medium ml-auto transition-colors"
                            >
                                View Source <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
