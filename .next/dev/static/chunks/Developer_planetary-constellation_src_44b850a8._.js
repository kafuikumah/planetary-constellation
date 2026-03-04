(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/planetary-constellation/src/components/charts/AfricaMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AfricaMap",
    ()=>AfricaMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$echarts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/echarts/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const ReactECharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Developer/planetary-constellation/node_modules/echarts-for-react/esm/index.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Developer/planetary-constellation/node_modules/echarts-for-react/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse bg-slate-100 rounded-lg h-full"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/AfricaMap.tsx",
            lineNumber: 12,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ReactECharts;
// Map from our country IDs to GeoJSON names
const countryNameMap = {
    dza: 'Algeria',
    ago: 'Angola',
    ben: 'Benin',
    bwa: 'Botswana',
    bfa: 'Burkina Faso',
    bdi: 'Burundi',
    cmr: 'Cameroon',
    cpv: 'Cape Verde',
    caf: 'Central African Republic',
    tcd: 'Chad',
    com: 'Comoros',
    cod: 'Democratic Republic of the Congo',
    cog: 'Republic of the Congo',
    civ: "Ivory Coast",
    dji: 'Djibouti',
    egy: 'Egypt',
    gnq: 'Equatorial Guinea',
    eri: 'Eritrea',
    swz: 'Swaziland',
    eth: 'Ethiopia',
    gab: 'Gabon',
    gmb: 'Gambia',
    gha: 'Ghana',
    gin: 'Guinea',
    gnb: 'Guinea Bissau',
    ken: 'Kenya',
    lso: 'Lesotho',
    lbr: 'Liberia',
    lby: 'Libya',
    mdg: 'Madagascar',
    mwi: 'Malawi',
    mli: 'Mali',
    mrt: 'Mauritania',
    mus: 'Mauritius',
    mar: 'Morocco',
    moz: 'Mozambique',
    nam: 'Namibia',
    ner: 'Niger',
    nga: 'Nigeria',
    rwa: 'Rwanda',
    stp: 'Sao Tome and Principe',
    sen: 'Senegal',
    syc: 'Seychelles',
    sle: 'Sierra Leone',
    som: 'Somalia',
    som_land: 'Somaliland',
    zaf: 'South Africa',
    ssd: 'South Sudan',
    sdn: 'Sudan',
    tza: 'United Republic of Tanzania',
    tgo: 'Togo',
    tun: 'Tunisia',
    uga: 'Uganda',
    zmb: 'Zambia',
    zwe: 'Zimbabwe'
};
// Reverse lookup
const nameToId = {};
Object.entries(countryNameMap).forEach(([id, name])=>{
    nameToId[name] = id === 'som_land' ? 'som' : id;
});
function AfricaMap() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "bab3b7c51fe68c774e5f8e71bbfceae22e386b7bb8728879ee9a409813e5d76c") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bab3b7c51fe68c774e5f8e71bbfceae22e386b7bb8728879ee9a409813e5d76c";
    }
    const [mapRegistered, setMapRegistered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setSelectedId, selectedId, setHoveredId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "AfricaMap[useEffect()]": ()=>{
                fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json").then(_AfricaMapUseEffectAnonymous).then({
                    "AfricaMap[useEffect() > (anonymous)()]": (worldGeo)=>{
                        const africanCountryNames = Object.values(countryNameMap);
                        const africaGeo = {
                            type: "FeatureCollection",
                            features: worldGeo.features.filter({
                                "AfricaMap[useEffect() > (anonymous)() > worldGeo.features.filter()]": (f)=>africanCountryNames.includes(f.properties.name)
                            }["AfricaMap[useEffect() > (anonymous)() > worldGeo.features.filter()]"])
                        };
                        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerMap"]("africa", africaGeo);
                        setMapRegistered(true);
                    }
                }["AfricaMap[useEffect() > (anonymous)()]"]).catch(console.error);
            }
        })["AfricaMap[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== selectedId || $[4] !== setHoveredId || $[5] !== setSelectedId) {
        t2 = ({
            "AfricaMap[onEvents]": ()=>({
                    click: (params)=>{
                        if (params.name && nameToId[params.name]) {
                            const id = nameToId[params.name];
                            setSelectedId(id === selectedId ? null : id);
                        }
                    },
                    mouseover: (params_0)=>{
                        if (params_0.name && nameToId[params_0.name]) {
                            setHoveredId(nameToId[params_0.name]);
                        } else {
                            setHoveredId(null);
                        }
                    },
                    mouseout: ()=>{
                        setHoveredId(null);
                    }
                })
        })["AfricaMap[onEvents]"];
        $[3] = selectedId;
        $[4] = setHoveredId;
        $[5] = setSelectedId;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const onEvents = t2;
    if (!mapRegistered) {
        let t3;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center bg-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse text-slate-400 text-sm",
                    children: "Loading map..."
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/charts/AfricaMap.tsx",
                    lineNumber: 154,
                    columnNumber: 91
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/charts/AfricaMap.tsx",
                lineNumber: 154,
                columnNumber: 12
            }, this);
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        return t3;
    }
    let t3;
    if ($[8] !== selectedId) {
        t3 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].flatMap({
            "AfricaMap[countries.flatMap()]": (c)=>{
                const item = {
                    name: countryNameMap[c.id] || c.name,
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(c.buildingBlocks),
                    itemStyle: {
                        areaColor: c.id === selectedId ? "#F29D38" : "#FFFFFF",
                        borderColor: "#CBD5E1",
                        borderWidth: 0.8
                    }
                };
                if (c.id === "som") {
                    return [
                        item,
                        {
                            ...item,
                            name: "Somaliland"
                        }
                    ];
                }
                return [
                    item
                ];
            }
        }["AfricaMap[countries.flatMap()]"]);
        $[8] = selectedId;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const mapData = t3;
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            trigger: "item",
            formatter: _temp,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderColor: "#E2E8F0",
            textStyle: {
                color: "#0F172A",
                fontSize: 13,
                fontFamily: "Inter"
            }
        };
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            min: 1,
            max: 5
        };
        t6 = {
            show: false
        };
        t7 = {
            label: {
                show: true,
                color: "#0F172A",
                fontSize: 10,
                fontFamily: "Inter"
            },
            itemStyle: {
                areaColor: "#FFF7ED",
                borderColor: "#F29D38",
                borderWidth: 1.5
            }
        };
        t8 = {
            disabled: true
        };
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t5 = $[11];
        t6 = $[12];
        t7 = $[13];
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {};
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== mapData) {
        t10 = {
            backgroundColor: "transparent",
            tooltip: t4,
            series: [
                {
                    type: "map",
                    map: "africa",
                    aspectScale: 1,
                    roam: true,
                    scaleLimit: t5,
                    label: t6,
                    emphasis: t7,
                    select: t8,
                    data: mapData,
                    nameMap: t9
                }
            ]
        };
        $[16] = mapData;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    const option = t10;
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            height: "100%",
            width: "100%"
        };
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== onEvents) {
        t12 = onEvents();
        $[19] = onEvents;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            renderer: "svg"
        };
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== option || $[23] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactECharts, {
            option: option,
            style: t11,
            onEvents: t12,
            opts: t13
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/AfricaMap.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[22] = option;
        $[23] = t12;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    return t14;
}
_s(AfricaMap, "xNMuko9S+G0Z7cHTFOG3N1mXHWU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"]
    ];
});
_c1 = AfricaMap;
function _temp(params_1) {
    return `<strong>${params_1.name}</strong>`;
}
function _AfricaMapUseEffectAnonymous(res) {
    return res.json();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactECharts");
__turbopack_context__.k.register(_c1, "AfricaMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/data/policies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPoliciesByBuildingBlock",
    ()=>getPoliciesByBuildingBlock,
    "getPoliciesByCountry",
    ()=>getPoliciesByCountry,
    "getPoliciesByStatus",
    ()=>getPoliciesByStatus,
    "policies",
    ()=>policies,
    "searchPolicies",
    ()=>searchPolicies
]);
const policies = [
    // Nigeria
    {
        id: 'nga-001',
        title: 'National Health Act 2014',
        country: 'nga',
        category: 'Legislation',
        buildingBlocks: [
            'governance',
            'financing'
        ],
        yearEnacted: 2014,
        status: 'Active',
        impact: 'High',
        agency: 'Federal Ministry of Health',
        description: 'Establishes a framework for the regulation, development, and management of a national health system.',
        sourceUrl: '#'
    },
    {
        id: 'nga-002',
        title: 'Basic Health Care Provision Fund',
        country: 'nga',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'service'
        ],
        yearEnacted: 2018,
        status: 'Active',
        impact: 'High',
        agency: 'National Primary Health Care Development Agency',
        description: 'Funding mechanism to provide basic minimum package of health services.',
        sourceUrl: '#'
    },
    {
        id: 'nga-003',
        title: 'National Drug Policy',
        country: 'nga',
        category: 'Medicines',
        buildingBlocks: [
            'medicines'
        ],
        yearEnacted: 2005,
        status: 'Active',
        impact: 'Medium',
        agency: 'NAFDAC',
        description: 'Regulates drug manufacturing, importation and distribution.',
        sourceUrl: '#'
    },
    {
        id: 'nga-004',
        title: 'National Health Insurance Authority Act',
        country: 'nga',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'governance'
        ],
        yearEnacted: 2022,
        status: 'Active',
        impact: 'High',
        agency: 'NHIA',
        description: 'Mandatory health insurance coverage for all Nigerians.',
        sourceUrl: '#'
    },
    // South Africa
    {
        id: 'zaf-001',
        title: 'National Health Insurance Bill',
        country: 'zaf',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'service',
            'governance'
        ],
        yearEnacted: 2024,
        status: 'Active',
        impact: 'High',
        agency: 'Department of Health',
        description: 'Universal health coverage through a single-payer national health insurance fund.',
        sourceUrl: '#'
    },
    {
        id: 'zaf-002',
        title: 'National Drug Policy for South Africa',
        country: 'zaf',
        category: 'Medicines',
        buildingBlocks: [
            'medicines'
        ],
        yearEnacted: 1996,
        status: 'Active',
        impact: 'High',
        agency: 'Department of Health',
        description: 'Framework for ensuring access to affordable essential medicines.',
        sourceUrl: '#'
    },
    {
        id: 'zaf-003',
        title: 'Human Resources for Health Strategy',
        country: 'zaf',
        category: 'Workforce',
        buildingBlocks: [
            'workforce'
        ],
        yearEnacted: 2020,
        status: 'Active',
        impact: 'Medium',
        agency: 'Department of Health',
        description: 'Strategy to address health worker shortages and distribution.',
        sourceUrl: '#'
    },
    // Kenya
    {
        id: 'ken-001',
        title: 'Kenya Health Policy 2014–2030',
        country: 'ken',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'service'
        ],
        yearEnacted: 2014,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Long-term health sector strategic direction toward universal health coverage.',
        sourceUrl: '#'
    },
    {
        id: 'ken-002',
        title: 'Community Health Strategy',
        country: 'ken',
        category: 'Service',
        buildingBlocks: [
            'service',
            'workforce'
        ],
        yearEnacted: 2020,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Framework for community health services delivery.',
        sourceUrl: '#'
    },
    {
        id: 'ken-003',
        title: 'Kenya Digital Health Blueprint',
        country: 'ken',
        category: 'Information',
        buildingBlocks: [
            'info'
        ],
        yearEnacted: 2021,
        status: 'Active',
        impact: 'Medium',
        agency: 'Ministry of Health',
        description: 'Digital transformation strategy for health information systems.',
        sourceUrl: '#'
    },
    // Rwanda
    {
        id: 'rwa-001',
        title: 'Community-Based Health Insurance (Mutuelle de Santé)',
        country: 'rwa',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'service'
        ],
        yearEnacted: 2004,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Community-based health insurance achieving near-universal coverage.',
        sourceUrl: '#'
    },
    {
        id: 'rwa-002',
        title: 'Health Sector Strategic Plan IV',
        country: 'rwa',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'service',
            'workforce'
        ],
        yearEnacted: 2018,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Five-year strategic plan for health sector development.',
        sourceUrl: '#'
    },
    // Ghana
    {
        id: 'gha-001',
        title: 'National Health Insurance Scheme',
        country: 'gha',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'service'
        ],
        yearEnacted: 2003,
        status: 'Active',
        impact: 'High',
        agency: 'NHIA Ghana',
        description: 'Social health insurance program providing coverage for basic healthcare.',
        sourceUrl: '#'
    },
    {
        id: 'gha-002',
        title: 'Ghana Health Service Act',
        country: 'gha',
        category: 'Governance',
        buildingBlocks: [
            'governance'
        ],
        yearEnacted: 1996,
        status: 'Active',
        impact: 'High',
        agency: 'Ghana Health Service',
        description: 'Establishment of the Ghana Health Service for implementing health policies.',
        sourceUrl: '#'
    },
    // Egypt
    {
        id: 'egy-001',
        title: 'Universal Health Insurance Law',
        country: 'egy',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'governance'
        ],
        yearEnacted: 2018,
        status: 'Active',
        impact: 'High',
        agency: 'Universal Health Insurance Authority',
        description: 'Progressive rollout of mandatory health insurance for all Egyptian citizens.',
        sourceUrl: '#'
    },
    {
        id: 'egy-002',
        title: '100 Million Healthy Lives Initiative',
        country: 'egy',
        category: 'Service',
        buildingBlocks: [
            'service'
        ],
        yearEnacted: 2019,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health and Population',
        description: 'Mass screening campaign for Hepatitis C, NCDs, and other conditions.',
        sourceUrl: '#'
    },
    // Ethiopia
    {
        id: 'eth-001',
        title: 'Health Extension Program',
        country: 'eth',
        category: 'Service',
        buildingBlocks: [
            'service',
            'workforce'
        ],
        yearEnacted: 2003,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Community-based primary healthcare delivery through health extension workers.',
        sourceUrl: '#'
    },
    {
        id: 'eth-002',
        title: 'Community-Based Health Insurance',
        country: 'eth',
        category: 'Financing',
        buildingBlocks: [
            'financing'
        ],
        yearEnacted: 2011,
        status: 'Active',
        impact: 'Medium',
        agency: 'Ethiopian Health Insurance Agency',
        description: 'Voluntary health insurance for informal sector workers.',
        sourceUrl: '#'
    },
    // Morocco
    {
        id: 'mar-001',
        title: 'Amine (Generalized Mandatory Health Insurance)',
        country: 'mar',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'governance'
        ],
        yearEnacted: 2022,
        status: 'Active',
        impact: 'High',
        agency: 'National Health Insurance Agency',
        description: 'Extension of mandatory health insurance coverage to all citizens.',
        sourceUrl: '#'
    },
    // Tunisia
    {
        id: 'tun-001',
        title: 'National Health Insurance Fund (CNAM)',
        country: 'tun',
        category: 'Financing',
        buildingBlocks: [
            'financing'
        ],
        yearEnacted: 2004,
        status: 'Active',
        impact: 'High',
        agency: 'CNAM',
        description: 'Unified national health insurance system.',
        sourceUrl: '#'
    },
    // Tanzania
    {
        id: 'tza-001',
        title: 'Primary Health Care Investment Plan',
        country: 'tza',
        category: 'Service',
        buildingBlocks: [
            'service',
            'financing'
        ],
        yearEnacted: 2020,
        status: 'Active',
        impact: 'Medium',
        agency: 'Ministry of Health',
        description: 'Investment plan focusing on strengthening primary healthcare facilities.',
        sourceUrl: '#'
    },
    // Senegal
    {
        id: 'sen-001',
        title: 'Universal Health Coverage Plan (Programme de Couverture Maladie Universelle)',
        country: 'sen',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'service'
        ],
        yearEnacted: 2013,
        status: 'Active',
        impact: 'High',
        agency: 'Agence de la Couverture Maladie Universelle',
        description: 'Community-based health insurance expansion toward UHC.',
        sourceUrl: '#'
    },
    // Botswana
    {
        id: 'bwa-001',
        title: 'Integrated Health Service Plan',
        country: 'bwa',
        category: 'Service',
        buildingBlocks: [
            'service',
            'governance'
        ],
        yearEnacted: 2010,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Comprehensive plan for integrating health services delivery.',
        sourceUrl: '#'
    },
    // Algeria
    {
        id: 'dza-001',
        title: 'National Health Sector Strategy',
        country: 'dza',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'service'
        ],
        yearEnacted: 2015,
        status: 'Active',
        impact: 'Medium',
        agency: 'Ministry of Health, Population and Hospital Reform',
        description: 'Strategic plan for modernizing Algerias health system.',
        sourceUrl: '#'
    },
    // Uganda
    {
        id: 'uga-001',
        title: 'National Health Policy',
        country: 'uga',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'financing',
            'service'
        ],
        yearEnacted: 2010,
        status: 'Active',
        impact: 'Medium',
        agency: 'Ministry of Health',
        description: 'Framework for health sector development and universal access.',
        sourceUrl: '#'
    },
    // Mauritius
    {
        id: 'mus-001',
        title: 'Health Sector Strategy 2020–2024',
        country: 'mus',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'service',
            'workforce'
        ],
        yearEnacted: 2020,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Multi-year strategy for health system strengthening.',
        sourceUrl: '#'
    },
    // Seychelles
    {
        id: 'syc-001',
        title: 'National Health Strategic Plan',
        country: 'syc',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'service'
        ],
        yearEnacted: 2016,
        status: 'Active',
        impact: 'High',
        agency: 'Ministry of Health',
        description: 'Strategic plan for health improvement and service delivery.',
        sourceUrl: '#'
    },
    // Namibia
    {
        id: 'nam-001',
        title: 'National Health Policy Framework',
        country: 'nam',
        category: 'Strategy',
        buildingBlocks: [
            'governance'
        ],
        yearEnacted: 2010,
        status: 'Active',
        impact: 'Medium',
        agency: 'Ministry of Health and Social Services',
        description: 'Policy framework guiding health sector development.',
        sourceUrl: '#'
    },
    // Zambia
    {
        id: 'zmb-001',
        title: 'National Health Insurance Act',
        country: 'zmb',
        category: 'Financing',
        buildingBlocks: [
            'financing',
            'governance'
        ],
        yearEnacted: 2018,
        status: 'Active',
        impact: 'Medium',
        agency: 'National Health Insurance Management Authority',
        description: 'Mandatory health insurance program for formal and informal sectors.',
        sourceUrl: '#'
    },
    // Cameroon
    {
        id: 'cmr-001',
        title: 'Health Sector Strategy 2016–2027',
        country: 'cmr',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'service'
        ],
        yearEnacted: 2016,
        status: 'Active',
        impact: 'Medium',
        agency: 'Ministry of Public Health',
        description: 'Long-term health sector development strategy.',
        sourceUrl: '#'
    },
    // Angola
    {
        id: 'ago-001',
        title: 'National Health Development Plan',
        country: 'ago',
        category: 'Strategy',
        buildingBlocks: [
            'governance',
            'service',
            'financing'
        ],
        yearEnacted: 2012,
        status: 'Active',
        impact: 'Low',
        agency: 'Ministry of Health',
        description: 'Five-year plan for rebuilding and developing health systems.',
        sourceUrl: '#'
    }
];
function getPoliciesByCountry(countryId) {
    return policies.filter((p)=>p.country === countryId);
}
function getPoliciesByBuildingBlock(blockId) {
    return policies.filter((p)=>p.buildingBlocks.includes(blockId));
}
function getPoliciesByStatus(status) {
    return policies.filter((p)=>p.status === status);
}
function searchPolicies(query) {
    const q = query.toLowerCase();
    return policies.filter((p)=>p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountryFlag",
    ()=>CountryFlag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
const sizeMap = {
    sm: 'w-5 h-4',
    md: 'w-8 h-6',
    lg: 'w-12 h-8'
};
function CountryFlag(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "45128a587e2366c5fcf4be115b6f0a8ef13dc74250461907d16b366abd281a95") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "45128a587e2366c5fcf4be115b6f0a8ef13dc74250461907d16b366abd281a95";
    }
    const { code, name, size: t1, className: t2 } = t0;
    const size = t1 === undefined ? "sm" : t1;
    const className = t2 === undefined ? "" : t2;
    let t3;
    if ($[1] !== code) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFlagUrl"])(code);
        $[1] = code;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const t4 = `${name} flag`;
    const t5 = `${sizeMap[size]} object-cover rounded-sm flex-shrink-0 ${className}`;
    const t6 = size === "lg" ? 48 : size === "md" ? 32 : 20;
    const t7 = size === "lg" ? 32 : size === "md" ? 24 : 15;
    let t8;
    if ($[3] !== t3 || $[4] !== t4 || $[5] !== t5 || $[6] !== t6 || $[7] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t3,
            alt: t4,
            className: t5,
            width: t6,
            height: t7
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    return t8;
}
_c = CountryFlag;
var _c;
__turbopack_context__.k.register(_c, "CountryFlag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImpactBadge",
    ()=>ImpactBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ImpactBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "f31a7ec29349d3873ee32352d3398e9a7aef53834dce4c2a32bc8a0003382090") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f31a7ec29349d3873ee32352d3398e9a7aef53834dce4c2a32bc8a0003382090";
    }
    const { impact } = t0;
    let t1;
    if ($[1] !== impact) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-semibold", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImpactColor"])(impact));
        $[1] = impact;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== impact || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: impact
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = impact;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c = ImpactBadge;
var _c;
__turbopack_context__.k.register(_c, "ImpactBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountryInfoPanel",
    ()=>CountryInfoPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/policies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function CountryInfoPanel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "af5edb5e22dd68845c9fce3aa1b483109009e04c5c39487c612f627781a720c0") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af5edb5e22dd68845c9fce3aa1b483109009e04c5c39487c612f627781a720c0";
    }
    const { country } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    if (!country) {
        return null;
    }
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== country.afriHealthRank || $[2] !== country.code || $[3] !== country.id || $[4] !== country.name) {
        const policies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPoliciesByCountry"])(country.id);
        const displayPolicies = policies.slice(0, 5);
        t4 = "w-[320px] h-full bg-white rounded-xl shadow-lg border border-slate-100 flex flex-col overflow-hidden";
        let t7;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2",
                children: "Country"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 38,
                columnNumber: 12
            }, this);
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        let t8;
        if ($[13] !== country.code || $[14] !== country.name) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                code: country.code,
                name: country.name,
                size: "md"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 45,
                columnNumber: 12
            }, this);
            $[13] = country.code;
            $[14] = country.name;
            $[15] = t8;
        } else {
            t8 = $[15];
        }
        let t9;
        if ($[16] !== country.name) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg font-semibold text-slate-900",
                children: country.name
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 54,
                columnNumber: 12
            }, this);
            $[16] = country.name;
            $[17] = t9;
        } else {
            t9 = $[17];
        }
        if ($[18] !== t8 || $[19] !== t9) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-slate-100",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            t8,
                            t9
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 61,
                columnNumber: 12
            }, this);
            $[18] = t8;
            $[19] = t9;
            $[20] = t5;
        } else {
            t5 = $[20];
        }
        let t10;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-1",
                children: "Africa Health Index Ranking"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this);
            $[21] = t10;
        } else {
            t10 = $[21];
        }
        let t11;
        if ($[22] !== country.afriHealthRank) {
            t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRank"])(country.afriHealthRank);
            $[22] = country.afriHealthRank;
            $[23] = t11;
        } else {
            t11 = $[23];
        }
        if ($[24] !== t11) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-slate-100",
                children: [
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-orange-500 font-mono-data",
                        children: t11
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            $[24] = t11;
            $[25] = t6;
        } else {
            t6 = $[25];
        }
        t2 = "p-4 flex-1 overflow-y-auto min-h-0";
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3",
                children: "Health Policies"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 92,
                columnNumber: 12
            }, this);
            $[26] = t3;
        } else {
            t3 = $[26];
        }
        t0 = "space-y-0";
        t1 = displayPolicies.length > 0 ? displayPolicies.map(_CountryInfoPanelDisplayPoliciesMap) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-400 italic",
            children: "No policies recorded"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
            lineNumber: 98,
            columnNumber: 98
        }, this);
        $[1] = country.afriHealthRank;
        $[2] = country.code;
        $[3] = country.id;
        $[4] = country.name;
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t0 = $[5];
        t1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
    }
    let t7;
    if ($[27] !== t0 || $[28] !== t1) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[27] = t0;
        $[28] = t1;
        $[29] = t7;
    } else {
        t7 = $[29];
    }
    let t8;
    if ($[30] !== t2 || $[31] !== t3 || $[32] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[30] = t2;
        $[31] = t3;
        $[32] = t7;
        $[33] = t8;
    } else {
        t8 = $[33];
    }
    let t9;
    if ($[34] !== country.name) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-t border-slate-100 bg-slate-50 mt-auto shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/policies",
                className: "w-full py-2 bg-black hover:bg-slate-800 text-white text-[12px] font-semibold rounded-[10px] transition-colors flex items-center justify-center gap-2",
                children: [
                    "View All ",
                    country.name,
                    "'s Health Policies"
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                lineNumber: 140,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[34] = country.name;
        $[35] = t9;
    } else {
        t9 = $[35];
    }
    let t10;
    if ($[36] !== t4 || $[37] !== t5 || $[38] !== t6 || $[39] !== t8 || $[40] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[36] = t4;
        $[37] = t5;
        $[38] = t6;
        $[39] = t8;
        $[40] = t9;
        $[41] = t10;
    } else {
        t10 = $[41];
    }
    return t10;
}
_s(CountryInfoPanel, "Ggz3X+W2O7IhTtqHh4fBdfDHTDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"]
    ];
});
_c = CountryInfoPanel;
function _CountryInfoPanelDisplayPoliciesMap(policy) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-3 border-b border-slate-100 last:border-b-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "w-4 h-4 text-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                        lineNumber: 161,
                        columnNumber: 233
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                    lineNumber: 161,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-slate-800 truncate",
                            children: policy.title
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                            lineNumber: 161,
                            columnNumber: 317
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-slate-400 uppercase",
                                    children: "Impact:"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                                    lineNumber: 161,
                                    columnNumber: 440
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImpactBadge"], {
                                    impact: policy.impact
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                                    lineNumber: 161,
                                    columnNumber: 509
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                            lineNumber: 161,
                            columnNumber: 394
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
                    lineNumber: 161,
                    columnNumber: 285
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
            lineNumber: 161,
            columnNumber: 90
        }, this)
    }, policy.id, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx",
        lineNumber: 161,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CountryInfoPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreBadge",
    ()=>ScoreBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg'
};
function ScoreBadge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "f92a00255d84a8ece407d5e61a08cf0d75ec20d4127ba5596778c94057a95038") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f92a00255d84a8ece407d5e61a08cf0d75ec20d4127ba5596778c94057a95038";
    }
    const { score, size: t1 } = t0;
    const size = t1 === undefined ? "md" : t1;
    let t2;
    if ($[1] !== score || $[2] !== size) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full text-white font-bold flex items-center justify-center flex-shrink-0", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreBg"])(score), sizeMap[size]);
        $[1] = score;
        $[2] = size;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== score || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: score
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = score;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = ScoreBadge;
var _c;
__turbopack_context__.k.register(_c, "ScoreBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MiniCountryProfile",
    ()=>MiniCountryProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function MiniCountryProfile() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "6842b81f423ff4d8e8b8aa4d61094fb482fabd3762a2fd5e92610ae3d30c6244") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6842b81f423ff4d8e8b8aa4d61094fb482fabd3762a2fd5e92610ae3d30c6244";
    }
    const { hoveredCountry, country } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    const activeCountry = hoveredCountry || country;
    if (!activeCountry) {
        return null;
    }
    let t0;
    if ($[1] !== activeCountry.buildingBlocks) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(activeCountry.buildingBlocks);
        $[1] = activeCountry.buildingBlocks;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const overallScore = t0;
    const t1 = `/country-profiles/${activeCountry.id}`;
    let t2;
    if ($[3] !== activeCountry.code || $[4] !== activeCountry.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
            code: activeCountry.code,
            name: activeCountry.name,
            size: "md"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = activeCountry.code;
        $[4] = activeCountry.name;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== activeCountry.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold font-sans text-slate-900 group-hover:text-[#F29D38] transition-colors",
            children: activeCountry.name
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = activeCountry.name;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== overallScore) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreBadge"], {
            score: overallScore,
            size: "sm"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[11] = overallScore;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-4",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold",
            children: "Population"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== activeCountry.population) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPopulation"])(activeCountry.population);
        $[17] = activeCountry.population;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold text-slate-900 font-mono-data",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
                    lineNumber: 95,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold",
            children: "Health/GDP"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== activeCountry.healthGdpPercent) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(activeCountry.healthGdpPercent);
        $[22] = activeCountry.healthGdpPercent;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold text-slate-900 font-mono-data",
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
                    lineNumber: 118,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold",
            children: "Per Capita"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== activeCountry.healthExpPerCapita) {
        t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(activeCountry.healthExpPerCapita);
        $[27] = activeCountry.healthExpPerCapita;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold text-slate-900 font-mono-data",
                    children: t14
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
                    lineNumber: 141,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wider font-semibold",
            children: "Debt Service"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== activeCountry.debtServiceRatio) {
        t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(activeCountry.debtServiceRatio);
        $[32] = activeCountry.debtServiceRatio;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-semibold text-slate-900 font-mono-data",
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
                    lineNumber: 164,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t12 || $[37] !== t15 || $[38] !== t18 || $[39] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-y-4 gap-x-3 mb-2",
            children: [
                t9,
                t12,
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[36] = t12;
        $[37] = t15;
        $[38] = t18;
        $[39] = t9;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 text-center mt-3 opacity-80 transition-opacity italic",
            children: "Click to see details"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19 || $[43] !== t6) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-lg rounded-xl border border-slate-200 p-4 w-[280px] pointer-events-auto hover:border-[#F29D38] transition-colors cursor-pointer group",
            children: [
                t6,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t6;
        $[44] = t21;
    } else {
        t21 = $[44];
    }
    let t22;
    if ($[45] !== t1 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t1,
            children: t21
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[45] = t1;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    return t22;
}
_s(MiniCountryProfile, "rrNtOOdbQrrE8GwuMlEIRDDHuA8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"]
    ];
});
_c = MiniCountryProfile;
var _c;
__turbopack_context__.k.register(_c, "MiniCountryProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomePrompt",
    ()=>WelcomePrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function WelcomePrompt() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "7988a89e026c7f50fe7cd22a461a77862cfd3410bb68de76b12f35ce0d4354d5") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7988a89e026c7f50fe7cd22a461a77862cfd3410bb68de76b12f35ce0d4354d5";
    }
    const { selectedId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDismissed, setIsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== selectedId) {
        t0 = ({
            "WelcomePrompt[useEffect()]": ()=>{
                const hasSeenPrompt = sessionStorage.getItem("hasSeenWelcomePrompt");
                if (!hasSeenPrompt && !selectedId) {
                    setIsVisible(true);
                }
            }
        })["WelcomePrompt[useEffect()]"];
        t1 = [
            selectedId
        ];
        $[1] = selectedId;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "WelcomePrompt[handleDismiss]": ()=>{
                setIsVisible(false);
                setIsDismissed(true);
                sessionStorage.setItem("hasSeenWelcomePrompt", "true");
            }
        })["WelcomePrompt[handleDismiss]"];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleDismiss = t2;
    let t3;
    let t4;
    if ($[5] !== isVisible || $[6] !== selectedId) {
        t3 = ({
            "WelcomePrompt[useEffect()]": ()=>{
                if (selectedId && isVisible) {
                    handleDismiss();
                }
            }
        })["WelcomePrompt[useEffect()]"];
        t4 = [
            selectedId,
            isVisible
        ];
        $[5] = isVisible;
        $[6] = selectedId;
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    if (!isVisible && isDismissed) {
        return null;
    }
    const t5 = isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";
    let t6;
    if ($[9] !== t5) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm transition-all duration-500", t5);
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const t7 = isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4";
    let t8;
    if ($[11] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 transform transition-all duration-500", t7);
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleDismiss,
            className: "absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors",
            "aria-label": "Close welcome prompt",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                lineNumber: 98,
                columnNumber: 201
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 bg-[#F29D38]/10 rounded-2xl flex items-center justify-center mb-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                className: "w-8 h-8 text-[#F29D38]"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                lineNumber: 106,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold font-sans text-slate-900 mb-2",
                    children: "Explore African Health Financing"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                    lineNumber: 107,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600 font-sans leading-relaxed",
                    children: "Discover data-driven insights into health system performance and financing across the continent."
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                    lineNumber: 107,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
    } else {
        t10 = $[14];
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-bold text-slate-900 uppercase tracking-wider",
            children: "How to begin"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-2 text-slate-400 rounded-lg shadow-sm border border-slate-100 shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                        lineNumber: 123,
                        columnNumber: 150
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                    lineNumber: 123,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold text-slate-900",
                            children: "Select on Map"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                            lineNumber: 123,
                            columnNumber: 188
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500",
                            children: "Click any highlighted country to view its overview and performance scores."
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                            lineNumber: 123,
                            columnNumber: 251
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                    lineNumber: 123,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center text-center space-y-6",
            children: [
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-slate-50 rounded-xl p-5 border border-slate-100 text-left space-y-4",
                    children: [
                        t12,
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-2 text-slate-400 rounded-lg shadow-sm border border-slate-100 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                                        lineNumber: 130,
                                        columnNumber: 331
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                                    lineNumber: 130,
                                    columnNumber: 232
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-slate-900",
                                            children: "Search Sidebar"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                                            lineNumber: 130,
                                            columnNumber: 372
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500",
                                            children: "Use the left sidebar to find specific countries or browse the full list."
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                                            lineNumber: 130,
                                            columnNumber: 436
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                                    lineNumber: 130,
                                    columnNumber: 367
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                            lineNumber: 130,
                            columnNumber: 192
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                    lineNumber: 130,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDismiss,
                    className: "w-full bg-[#F29D38] hover:bg-[#E08D28] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#F29D38]/20 transition-all hover:shadow-[#F29D38]/40 hover:-translate-y-0.5",
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
                    lineNumber: 130,
                    columnNumber: 568
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[19] = t8;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== t15 || $[22] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t15
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[21] = t15;
        $[22] = t6;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    return t16;
}
_s(WelcomePrompt, "awiCxvlV2jHsck0NyVcTcIIHLdY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"]
    ];
});
_c = WelcomePrompt;
var _c;
__turbopack_context__.k.register(_c, "WelcomePrompt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Score thresholds
__turbopack_context__.s([
    "BOTTOM_BAR_INDICATORS",
    ()=>BOTTOM_BAR_INDICATORS,
    "BUILDING_BLOCK_COLORS",
    ()=>BUILDING_BLOCK_COLORS,
    "IMPACT_COLORS",
    ()=>IMPACT_COLORS,
    "INCOME_LEVELS",
    ()=>INCOME_LEVELS,
    "MAP_LEGEND_ITEMS",
    ()=>MAP_LEGEND_ITEMS,
    "RECS",
    ()=>RECS,
    "REGIONS",
    ()=>REGIONS,
    "SCORE_COLORS",
    ()=>SCORE_COLORS,
    "SCORE_HIGH_THRESHOLD",
    ()=>SCORE_HIGH_THRESHOLD,
    "SCORE_MID_THRESHOLD",
    ()=>SCORE_MID_THRESHOLD
]);
const SCORE_HIGH_THRESHOLD = 70;
const SCORE_MID_THRESHOLD = 50;
const SCORE_COLORS = {
    high: '#22C55E',
    mid: '#F97316',
    low: '#EF4444'
};
const IMPACT_COLORS = {
    High: 'text-green-500',
    Medium: 'text-orange-500',
    Low: 'text-red-500'
};
const BUILDING_BLOCK_COLORS = {
    service: '#3B82F6',
    workforce: '#8B5CF6',
    info: '#06B6D4',
    financing: '#F59E0B',
    medicines: '#10B981',
    governance: '#EF4444'
};
const REGIONS = [
    'North Africa',
    'West Africa',
    'Central Africa',
    'East Africa',
    'Southern Africa'
];
const RECS = [
    'ECOWAS',
    'SADC',
    'EAC',
    'ECCAS',
    'COMESA',
    'IGAD',
    'UMA'
];
const INCOME_LEVELS = [
    'Low',
    'Lower-middle',
    'Upper-middle',
    'High'
];
const MAP_LEGEND_ITEMS = [
    {
        color: '#22C55E',
        label: 'Strong (≥70)'
    },
    {
        color: '#84CC16',
        label: 'Good (60–69)'
    },
    {
        color: '#F97316',
        label: 'Moderate (50–59)'
    },
    {
        color: '#EF4444',
        label: 'Weak (40–49)'
    },
    {
        color: '#991B1B',
        label: 'Critical (<40)'
    }
];
const BOTTOM_BAR_INDICATORS = [
    {
        key: 'service',
        label: 'SERVICE DELIVERY'
    },
    {
        key: 'workforce',
        label: 'WORKFORCE'
    },
    {
        key: 'info',
        label: 'HEALTH INFO'
    },
    {
        key: 'financing',
        label: 'FINANCING'
    },
    {
        key: 'medicines',
        label: 'MEDICINES'
    },
    {
        key: 'governance',
        label: 'GOVERNANCE'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomBar",
    ()=>BottomBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function renderIndicator(key, score) {
    if (key === 'service') {
        const text = score >= 70 ? 'Low Risk' : score >= 50 ? 'Moderate' : 'High Risk';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 12,
            columnNumber: 12
        }, this);
    }
    if (key === 'workforce') {
        const text = score >= 70 ? 'Good' : score >= 50 ? 'Medium' : 'Critical';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 17,
            columnNumber: 12
        }, this);
    }
    if (key === 'info') {
        const text = score >= 70 ? '70-100%' : score >= 41 ? '41-69%' : '0-40%';
        const color = score >= 70 ? 'text-green-500' : score >= 41 ? 'text-orange-500' : 'text-red-500';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 22,
            columnNumber: 12
        }, this);
    }
    if (key === 'financing') {
        const text = score >= 70 ? 'Top Percentile' : score >= 50 ? 'Middle Percentile' : 'Lower Percentile';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 27,
            columnNumber: 12
        }, this);
    }
    // Default fallback for medicines / governance
    const text = score >= 70 ? 'Stable' : score >= 50 ? 'At Risk' : 'Critical';
    const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
        children: text
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
function BottomBar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "50f95ac757a2cee292b38cfcf11b3dd4153e05c76c03d4847242464ff05fd856") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "50f95ac757a2cee292b38cfcf11b3dd4153e05c76c03d4847242464ff05fd856";
    }
    const { country } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    if (!country) {
        return null;
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wide font-semibold",
            children: "Country"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const t1 = `https://flagcdn.com/w20/${country.code}.png`;
    const t2 = `${country.name} flag`;
    let t3;
    if ($[2] !== t1 || $[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t1,
            alt: t2,
            className: "w-5 h-4 object-cover rounded-sm",
            width: 20,
            height: 15
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== country.name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-slate-900 border-b-2 border-orange-500 pb-0.5",
            children: country.name
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[5] = country.name;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-shrink-0",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t3,
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                    lineNumber: 77,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-8 bg-slate-200 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wide font-semibold",
            children: "Total Cases"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== country.totalCases) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(country.totalCases);
        $[12] = country.totalCases;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-bold text-orange-500 font-mono-data",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                    lineNumber: 108,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-8 bg-slate-200 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== country.buildingBlocks) {
        t11 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOTTOM_BAR_INDICATORS"].map({
            "BottomBar[BOTTOM_BAR_INDICATORS.map()]": (indicator)=>{
                const block = country.buildingBlocks[indicator.key];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-slate-400 uppercase tracking-wide font-semibold",
                            children: indicator.label
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                            lineNumber: 126,
                            columnNumber: 67
                        }, this),
                        renderIndicator(indicator.key, block.score)
                    ]
                }, indicator.key, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                    lineNumber: 126,
                    columnNumber: 16
                }, this);
            }
        }["BottomBar[BOTTOM_BAR_INDICATORS.map()]"]);
        $[17] = country.buildingBlocks;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto pl-4 border-l border-slate-200 flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/country-profiles",
                className: "text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200",
                children: "All Indicators →"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                lineNumber: 136,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t11 || $[21] !== t5 || $[22] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[60px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex items-center px-4 gap-6 flex-shrink-0 z-10 overflow-x-auto",
            children: [
                t5,
                t6,
                t9,
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t5;
        $[22] = t9;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    return t13;
}
_s(BottomBar, "Ggz3X+W2O7IhTtqHh4fBdfDHTDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"]
    ];
});
_c = BottomBar;
var _c;
__turbopack_context__.k.register(_c, "BottomBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageLayout",
    ()=>PageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$BottomBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function PageLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "aa21cd5eaf8e247089f8df866309e586a7af995b82310a710b7c73008859b365") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa21cd5eaf8e247089f8df866309e586a7af995b82310a710b7c73008859b365";
    }
    const { sidebar, children, isMapView: t1 } = t0;
    const isMapView = t1 === undefined ? false : t1;
    const t2 = isMapView ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden";
    let t3;
    if ($[1] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 relative rounded-[10px]", t2);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== children || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t3,
            children: children
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== isMapView) {
        t5 = isMapView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$BottomBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomBar"], {}, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
            lineNumber: 41,
            columnNumber: 23
        }, this);
        $[6] = isMapView;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col overflow-hidden gap-4",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== sidebar || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 overflow-hidden px-4 pb-4 gap-4",
            children: [
                sidebar,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[11] = sidebar;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_c = PageLayout;
var _c;
__turbopack_context__.k.register(_c, "PageLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/hooks/useCountryFilter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountryFilter",
    ()=>useCountryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useCountryFilter(countries) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "8fff3bdece53cd5115d50e109f79605c2dfc785728033701d3061f1e4cbb208a") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8fff3bdece53cd5115d50e109f79605c2dfc785728033701d3061f1e4cbb208a";
    }
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Regions");
    const [incomeLevel, setIncomeLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All Income Levels");
    let result;
    if ($[1] !== countries || $[2] !== incomeLevel || $[3] !== query || $[4] !== region) {
        result = countries;
        if (region !== "All Regions") {
            let t0;
            if ($[6] !== region) {
                t0 = ({
                    "useCountryFilter[result.filter()]": (c)=>c.region === region
                })["useCountryFilter[result.filter()]"];
                $[6] = region;
                $[7] = t0;
            } else {
                t0 = $[7];
            }
            result = result.filter(t0);
        }
        if (incomeLevel !== "All Income Levels") {
            let t0;
            if ($[8] !== incomeLevel) {
                t0 = ({
                    "useCountryFilter[result.filter()]": (c_0)=>c_0.incomeLevel === incomeLevel
                })["useCountryFilter[result.filter()]"];
                $[8] = incomeLevel;
                $[9] = t0;
            } else {
                t0 = $[9];
            }
            result = result.filter(t0);
        }
        if (query) {
            const q = query.toLowerCase();
            result = result.filter({
                "useCountryFilter[result.filter()]": (c_1)=>c_1.name.toLowerCase().includes(q)
            }["useCountryFilter[result.filter()]"]);
        }
        $[1] = countries;
        $[2] = incomeLevel;
        $[3] = query;
        $[4] = region;
        $[5] = result;
    } else {
        result = $[5];
    }
    const filtered = result;
    let t0;
    if ($[10] !== filtered || $[11] !== incomeLevel || $[12] !== query || $[13] !== region) {
        t0 = {
            query,
            setQuery,
            region,
            setRegion,
            incomeLevel,
            setIncomeLevel,
            filtered
        };
        $[10] = filtered;
        $[11] = incomeLevel;
        $[12] = query;
        $[13] = region;
        $[14] = t0;
    } else {
        t0 = $[14];
    }
    return t0;
}
_s(useCountryFilter, "VdmRrhijSp2W68l1wdlDbD7Vp2g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountrySidebar",
    ()=>CountrySidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useCountryFilter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const allCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
function CountrySidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "ebb0a9bff4eb21fcbfceb09acbfd862675268223b469f7ad0c3b0e98b1672c3a") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebb0a9bff4eb21fcbfceb09acbfd862675268223b469f7ad0c3b0e98b1672c3a";
    }
    let t1;
    if ($[1] !== t0) {
        t1 = t0 === undefined ? {} : t0;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { selectedCountry, onCountrySelect } = t1;
    const { query, setQuery, filtered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountryFilter"])(allCountries);
    const { selectedId: contextSelectedId, setSelectedId: contextSetSelectedId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    const currentSelectedId = selectedCountry !== undefined ? selectedCountry : contextSelectedId;
    const handleSelect = onCountrySelect || contextSetSelectedId;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== setQuery) {
        t3 = ({
            "CountrySidebar[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["CountrySidebar[<input>.onChange]"];
        $[4] = setQuery;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== query || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: query,
            onChange: t3,
            placeholder: "Search by Country",
            className: "w-full border border-slate-200 rounded-lg pl-9 pr-9 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F29D38]/30 focus:border-[#F29D38] transition-all"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[6] = query;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-b border-slate-100 flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t2,
                    t4,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                lineNumber: 80,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== currentSelectedId || $[13] !== filtered || $[14] !== handleSelect) {
        let t8;
        if ($[16] !== currentSelectedId || $[17] !== handleSelect) {
            t8 = ({
                "CountrySidebar[filtered.map()]": (country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "CountrySidebar[filtered.map() > <button>.onClick]": ()=>handleSelect(country.id)
                        }["CountrySidebar[filtered.map() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all", currentSelectedId === country.id ? "bg-[#F29D38]/10 text-[#F29D38]" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://flagcdn.com/w20/${country.code}.png`,
                                alt: `${country.name} flag`,
                                className: "w-6 h-4 object-cover rounded-[2px] shadow-sm flex-shrink-0",
                                width: 24,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                                lineNumber: 93,
                                columnNumber: 309
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: country.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                                lineNumber: 93,
                                columnNumber: 491
                            }, this)
                        ]
                    }, country.id, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                        lineNumber: 91,
                        columnNumber: 54
                    }, this)
            })["CountrySidebar[filtered.map()]"];
            $[16] = currentSelectedId;
            $[17] = handleSelect;
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        t7 = filtered.map(t8);
        $[12] = currentSelectedId;
        $[13] = filtered;
        $[14] = handleSelect;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 space-y-0.5",
                children: t7
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                lineNumber: 111,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 border-t border-slate-100 bg-slate-50/50 flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-slate-400 text-center font-medium uppercase tracking-wider",
                children: "Afri Health V0.0.01"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                lineNumber: 119,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t6 || $[23] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full overflow-hidden",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[22] = t6;
        $[23] = t8;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    return t10;
}
_s(CountrySidebar, "ziQBKDQq3mR9Vb02e8IjVsgy2mM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountryFilter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"]
    ];
});
_c = CountrySidebar;
var _c;
__turbopack_context__.k.register(_c, "CountrySidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapViewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$AfricaMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/charts/AfricaMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$map$2f$CountryInfoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/map/CountryInfoPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$map$2f$MiniCountryProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/map/MiniCountryProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$map$2f$WelcomePrompt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/map/WelcomePrompt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$CountrySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function MapViewPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "2896a13f17767a2cf0640830d2b80997590d2fa238faf10eb682bfb7bc545d7e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2896a13f17767a2cf0640830d2b80997590d2fa238faf10eb682bfb7bc545d7e";
    }
    const { selectedId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$CountrySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountrySidebar"], {}, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$map$2f$WelcomePrompt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomePrompt"], {}, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== selectedId) {
        t2 = selectedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 bottom-4 z-20 animate-in fade-in slide-in-from-left-4 duration-300 flex flex-col max-h-[calc(100%-2rem)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$map$2f$CountryInfoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryInfoPanel"], {}, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
                lineNumber: 38,
                columnNumber: 168
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
            lineNumber: 38,
            columnNumber: 24
        }, this);
        $[3] = selectedId;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full rounded-[10px] overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$AfricaMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AfricaMap"], {}, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 z-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$map$2f$MiniCountryProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiniCountryProfile"], {}, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageLayout"], {
            sidebar: t0,
            isMapView: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full bg-slate-50 overflow-hidden",
                children: [
                    t1,
                    t2,
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/page.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(MapViewPage, "Ou2cRvpgfgypBbwhDE/RAR2dguc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedCountry"]
    ];
});
_c = MapViewPage;
var _c;
__turbopack_context__.k.register(_c, "MapViewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_planetary-constellation_src_44b850a8._.js.map