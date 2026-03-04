"use client";

import { useEffect, useState, useCallback } from 'react';
import dynamic from "next/dynamic";
import * as echarts from 'echarts';
import { countries } from '@/data/countries';
import { useSelectedCountry } from '@/hooks/useSelectedCountry';
import { calculateOverallScore, getScoreHex } from '@/lib/utils';

const ReactECharts = dynamic(
    () => import("echarts-for-react"),
    { ssr: false, loading: () => <div className="animate-pulse bg-slate-100 rounded-lg h-full" /> }
);

// Map from our country IDs to GeoJSON names
const countryNameMap: Record<string, string> = {
    dza: 'Algeria', ago: 'Angola', ben: 'Benin', bwa: 'Botswana',
    bfa: 'Burkina Faso', bdi: 'Burundi', cmr: 'Cameroon', cpv: 'Cape Verde',
    caf: 'Central African Republic', tcd: 'Chad', com: 'Comoros',
    cod: 'Democratic Republic of the Congo', cog: 'Republic of the Congo',
    civ: "Ivory Coast", dji: 'Djibouti', egy: 'Egypt',
    gnq: 'Equatorial Guinea', eri: 'Eritrea', swz: 'Swaziland',
    eth: 'Ethiopia', gab: 'Gabon', gmb: 'Gambia', gha: 'Ghana',
    gin: 'Guinea', gnb: 'Guinea Bissau', ken: 'Kenya', lso: 'Lesotho',
    lbr: 'Liberia', lby: 'Libya', mdg: 'Madagascar', mwi: 'Malawi',
    mli: 'Mali', mrt: 'Mauritania', mus: 'Mauritius', mar: 'Morocco',
    moz: 'Mozambique', nam: 'Namibia', ner: 'Niger', nga: 'Nigeria',
    rwa: 'Rwanda', stp: 'Sao Tome and Principe', sen: 'Senegal',
    syc: 'Seychelles', sle: 'Sierra Leone', som: 'Somalia', som_land: 'Somaliland',
    zaf: 'South Africa', ssd: 'South Sudan', sdn: 'Sudan',
    tza: 'United Republic of Tanzania', tgo: 'Togo', tun: 'Tunisia',
    uga: 'Uganda', zmb: 'Zambia', zwe: 'Zimbabwe',
};

// Reverse lookup
const nameToId: Record<string, string> = {};
Object.entries(countryNameMap).forEach(([id, name]) => {
    nameToId[name] = id === 'som_land' ? 'som' : id;
});

export function AfricaMap() {
    const [mapRegistered, setMapRegistered] = useState(false);
    const { setSelectedId, selectedId, setHoveredId } = useSelectedCountry();

    useEffect(() => {
        // Fetch Africa GeoJSON
        fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
            .then(res => res.json())
            .then((worldGeo) => {
                // Filter to African countries only
                const africanCountryNames = Object.values(countryNameMap);
                const africaGeo = {
                    type: 'FeatureCollection',
                    features: worldGeo.features.filter((f: { properties: { name: string } }) =>
                        africanCountryNames.includes(f.properties.name)
                    ),
                };
                echarts.registerMap('africa', africaGeo as never);
                setMapRegistered(true);
            })
            .catch(console.error);
    }, []);

    const onEvents = useCallback(() => ({
        click: (params: { name?: string }) => {
            if (params.name && nameToId[params.name]) {
                const id = nameToId[params.name];
                setSelectedId(id === selectedId ? null : id); // Toggle selection
            }
        },
        mouseover: (params: { name?: string }) => {
            if (params.name && nameToId[params.name]) {
                setHoveredId(nameToId[params.name]);
            } else {
                setHoveredId(null);
            }
        },
        mouseout: () => {
            setHoveredId(null);
        },
    }), [setSelectedId, selectedId, setHoveredId]);

    if (!mapRegistered) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-transparent">
                <div className="animate-pulse text-slate-400 text-sm">Loading map...</div>
            </div>
        );
    }

    // Build data array for map
    const mapData = countries.flatMap(c => {
        const item = {
            name: countryNameMap[c.id] || c.name,
            value: calculateOverallScore(c.buildingBlocks),
            itemStyle: {
                areaColor: c.id === selectedId ? '#F29D38' : '#FFFFFF', // Selected is orange, else white
                borderColor: '#CBD5E1',
                borderWidth: 0.8,
            },
        };

        if (c.id === 'som') {
            return [item, { ...item, name: 'Somaliland' }];
        }
        return [item];
    });

    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: (params: { name: string; value: number }) => {
                return `<strong>${params.name}</strong>`; // Reduced tooltip to just name
            },
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#E2E8F0',
            textStyle: { color: '#0F172A', fontSize: 13, fontFamily: 'Inter' },
        },
        series: [
            {
                type: 'map',
                map: 'africa',
                aspectScale: 1,
                roam: true,
                scaleLimit: { min: 1, max: 5 },
                label: {
                    show: false,
                },
                emphasis: {
                    label: { show: true, color: '#0F172A', fontSize: 10, fontFamily: 'Inter' },
                    itemStyle: { areaColor: '#FFF7ED', borderColor: '#F29D38', borderWidth: 1.5 },
                },
                select: {
                    disabled: true,
                },
                data: mapData,
                nameMap: {},
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{ height: '100%', width: '100%' }}
            onEvents={onEvents()}
            opts={{ renderer: 'svg' }}
        />
    );
}
