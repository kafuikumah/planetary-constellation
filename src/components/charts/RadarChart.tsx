"use client";

import dynamic from "next/dynamic";

const ReactECharts = dynamic(
    () => import("echarts-for-react"),
    { ssr: false, loading: () => <div className="animate-pulse bg-slate-100 rounded-lg h-64" /> }
);

interface RadarChartProps {
    data: { name: string; value: number }[];
    compareData?: { name: string; value: number }[];
    title?: string;
    height?: number;
}

export function RadarChart({ data, compareData, title, height = 350 }: RadarChartProps) {
    const indicator = data.map(d => ({ name: d.name, max: 100 }));

    const series = [
        {
            type: 'radar',
            data: [
                {
                    value: data.map(d => d.value),
                    name: title || 'Score',
                    areaStyle: { opacity: 0.2, color: '#F97316' },
                    lineStyle: { color: '#F97316', width: 2 },
                    itemStyle: { color: '#F97316' },
                },
            ],
        },
    ];

    if (compareData) {
        series[0].data.push({
            value: compareData.map(d => d.value),
            name: 'Peer Average',
            areaStyle: { opacity: 0.1, color: '#3B82F6' },
            lineStyle: { color: '#3B82F6', width: 2 },
            itemStyle: { color: '#3B82F6' },
        });
    }

    const option = {
        tooltip: { trigger: 'item' },
        legend: compareData ? { data: [title || 'Score', 'Peer Average'], bottom: 0, textStyle: { fontSize: 11, color: '#64748B' } } : undefined,
        radar: {
            indicator,
            shape: 'polygon',
            splitNumber: 5,
            axisName: { color: '#64748B', fontSize: 11 },
            splitLine: { lineStyle: { color: '#E2E8F0' } },
            splitArea: { areaStyle: { color: ['#F8FAFC', '#FFFFFF'] } },
            axisLine: { lineStyle: { color: '#E2E8F0' } },
        },
        series,
    };

    return (
        <ReactECharts
            option={option}
            style={{ height, width: '100%' }}
            opts={{ renderer: 'svg' }}
        />
    );
}
