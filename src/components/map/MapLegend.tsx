'use client';

import { MAP_LEGEND_ITEMS } from '@/lib/constants';

export function MapLegend() {
    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-4 w-[180px]">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Legend / Key
            </p>
            <div className="space-y-2.5">
                {MAP_LEGEND_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                        <div
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="text-xs text-slate-600">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
