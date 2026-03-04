(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/planetary-constellation/src/hooks/useComparison.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComparison",
    ()=>useComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useComparison() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "57afa4d2b76531fb5a63cc2511c5cd3c6cf9d2303213203c64bb1806233858a0") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "57afa4d2b76531fb5a63cc2511c5cd3c6cf9d2303213203c64bb1806233858a0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== selectedIds) {
        t1 = selectedIds.map(_useComparisonSelectedIdsMap).filter(_useComparisonAnonymous);
        $[2] = selectedIds;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const selectedCountries = t1;
    let t2;
    if ($[4] !== selectedIds) {
        t2 = ({
            "useComparison[addCountry]": (id_0)=>{
                if (!selectedIds.includes(id_0)) {
                    setSelectedIds({
                        "useComparison[addCountry > setSelectedIds()]": (prev)=>[
                                ...prev,
                                id_0
                            ]
                    }["useComparison[addCountry > setSelectedIds()]"]);
                }
            }
        })["useComparison[addCountry]"];
        $[4] = selectedIds;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const addCountry = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "useComparison[removeCountry]": (id_1)=>{
                setSelectedIds({
                    "useComparison[removeCountry > setSelectedIds()]": (prev_0)=>prev_0.filter({
                            "useComparison[removeCountry > setSelectedIds() > prev_0.filter()]": (i)=>i !== id_1
                        }["useComparison[removeCountry > setSelectedIds() > prev_0.filter()]"])
                }["useComparison[removeCountry > setSelectedIds()]"]);
            }
        })["useComparison[removeCountry]"];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const removeCountry = t3;
    let t4;
    if ($[7] !== addCountry || $[8] !== selectedIds) {
        t4 = ({
            "useComparison[toggleCountry]": (id_2)=>{
                if (selectedIds.includes(id_2)) {
                    removeCountry(id_2);
                } else {
                    addCountry(id_2);
                }
            }
        })["useComparison[toggleCountry]"];
        $[7] = addCountry;
        $[8] = selectedIds;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const toggleCountry = t4;
    let t5;
    if ($[10] !== addCountry || $[11] !== selectedCountries || $[12] !== selectedIds || $[13] !== toggleCountry) {
        t5 = {
            selectedIds,
            selectedCountries,
            addCountry,
            removeCountry,
            toggleCountry,
            setSelectedIds
        };
        $[10] = addCountry;
        $[11] = selectedCountries;
        $[12] = selectedIds;
        $[13] = toggleCountry;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_s(useComparison, "4llLBdYe/L44P/NRnGmhJfyJQLc=");
function _useComparisonAnonymous(c) {
    return c !== undefined;
}
function _useComparisonSelectedIdsMap(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountryById"])(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/data/indicators.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildingBlocks",
    ()=>buildingBlocks,
    "getBuildingBlockById",
    ()=>getBuildingBlockById
]);
const buildingBlocks = [
    {
        id: 'service',
        name: 'Service Delivery',
        color: '#3B82F6',
        icon: 'Heart',
        description: 'Delivery of effective, safe, quality health services to those who need them, when and where needed, with minimum waste of resources.',
        indicators: [
            {
                key: 'coverage',
                label: 'Service Coverage Index',
                unit: '%',
                target: 80
            },
            {
                key: 'immunization',
                label: 'Immunization Coverage',
                unit: '%',
                target: 90
            },
            {
                key: 'skilled_birth',
                label: 'Skilled Birth Attendance',
                unit: '%',
                target: 90
            },
            {
                key: 'bed_density',
                label: 'Hospital Bed Density',
                unit: 'per 10k',
                target: 25
            }
        ]
    },
    {
        id: 'workforce',
        name: 'Health Workforce',
        color: '#8B5CF6',
        icon: 'Users',
        description: 'Health workers who are responsive, fair and efficient to achieve the best health outcomes possible.',
        indicators: [
            {
                key: 'density',
                label: 'Physician Density',
                unit: 'per 1k',
                target: 2.3
            },
            {
                key: 'nurse_density',
                label: 'Nurse/Midwife Density',
                unit: 'per 1k',
                target: 3.0
            },
            {
                key: 'retention',
                label: 'Retention Rate',
                unit: '%',
                target: 80
            },
            {
                key: 'training',
                label: 'Training Capacity',
                unit: 'per yr',
                target: 5000
            }
        ]
    },
    {
        id: 'info',
        name: 'Health Information',
        color: '#06B6D4',
        icon: 'BarChart3',
        description: 'Production, analysis, dissemination and use of reliable and timely health information.',
        indicators: [
            {
                key: 'completeness',
                label: 'Data Completeness',
                unit: '%',
                target: 90
            },
            {
                key: 'birth_registration',
                label: 'Birth Registration',
                unit: '%',
                target: 100
            },
            {
                key: 'death_registration',
                label: 'Death Registration',
                unit: '%',
                target: 80
            },
            {
                key: 'digital_systems',
                label: 'Digital Health Systems',
                unit: 'score',
                target: 4
            }
        ]
    },
    {
        id: 'financing',
        name: 'Health Financing',
        color: '#F59E0B',
        icon: 'DollarSign',
        description: 'Raising adequate funds for health, to ensure people can use needed services and are protected from catastrophic expenditures.',
        indicators: [
            {
                key: 'pooling',
                label: 'Risk Pooling Coverage',
                unit: '%',
                target: 80
            },
            {
                key: 'oop',
                label: 'Out-of-Pocket Expenditure',
                unit: '%',
                target: 20
            },
            {
                key: 'govt_share',
                label: 'Gov. Health Expenditure',
                unit: '%GDP',
                target: 5
            },
            {
                key: 'external_dep',
                label: 'External Dependency',
                unit: '%',
                target: 10
            }
        ]
    },
    {
        id: 'medicines',
        name: 'Medical Products & Technologies',
        color: '#10B981',
        icon: 'Pill',
        description: 'Equitable access to essential medical products, vaccines and technologies of assured quality, safety, efficacy and cost-effectiveness.',
        indicators: [
            {
                key: 'availability',
                label: 'Essential Medicine Availability',
                unit: '%',
                target: 80
            },
            {
                key: 'supply_chain',
                label: 'Supply Chain Reliability',
                unit: '%',
                target: 90
            },
            {
                key: 'quality_assurance',
                label: 'Quality Assurance',
                unit: 'score',
                target: 4
            },
            {
                key: 'local_production',
                label: 'Local Production',
                unit: '%',
                target: 30
            }
        ]
    },
    {
        id: 'governance',
        name: 'Leadership & Governance',
        color: '#EF4444',
        icon: 'Building2',
        description: 'Ensuring strategic policy frameworks exist and are combined with effective oversight, regulation, and accountability.',
        indicators: [
            {
                key: 'accountability',
                label: 'Accountability Index',
                unit: '%',
                target: 80
            },
            {
                key: 'policy_framework',
                label: 'Policy Framework',
                unit: 'score',
                target: 4
            },
            {
                key: 'regulation',
                label: 'Regulatory Capacity',
                unit: 'score',
                target: 4
            },
            {
                key: 'transparency',
                label: 'Transparency Index',
                unit: '%',
                target: 75
            }
        ]
    }
];
function getBuildingBlockById(id) {
    return buildingBlocks.find((b)=>b.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/charts/BarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>BarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
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
            className: "animate-pulse bg-slate-100 rounded-lg h-64"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/BarChart.tsx",
            lineNumber: 6,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ReactECharts;
function BarChart({ categories, data, title, height = 350, horizontal = false }) {
    const defaultColors = [
        '#F97316',
        '#3B82F6',
        '#22C55E',
        '#8B5CF6',
        '#06B6D4',
        '#EF4444'
    ];
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: data.length > 1 ? {
            data: data.map((d)=>d.name),
            bottom: 0,
            textStyle: {
                fontSize: 11,
                color: '#64748B'
            }
        } : undefined,
        grid: {
            left: '3%',
            right: '4%',
            bottom: data.length > 1 ? '15%' : '3%',
            top: title ? '12%' : '3%',
            containLabel: true
        },
        title: title ? {
            text: title,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 600,
                color: '#0F172A'
            }
        } : undefined,
        [horizontal ? 'yAxis' : 'xAxis']: {
            type: 'category',
            data: categories,
            axisLabel: {
                fontSize: 11,
                color: '#64748B',
                rotate: horizontal ? 0 : categories.length > 8 ? 45 : 0
            },
            axisLine: {
                lineStyle: {
                    color: '#E2E8F0'
                }
            }
        },
        [horizontal ? 'xAxis' : 'yAxis']: {
            type: 'value',
            max: 100,
            axisLabel: {
                fontSize: 11,
                color: '#64748B'
            },
            splitLine: {
                lineStyle: {
                    color: '#F1F5F9'
                }
            }
        },
        series: data.map((d_0, i)=>({
                name: d_0.name,
                type: 'bar',
                data: d_0.values,
                barMaxWidth: 40,
                itemStyle: {
                    color: d_0.color || defaultColors[i % defaultColors.length],
                    borderRadius: [
                        4,
                        4,
                        0,
                        0
                    ]
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactECharts, {
        option: option,
        style: {
            height,
            width: '100%'
        },
        opts: {
            renderer: 'svg'
        },
        notMerge: true
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/charts/BarChart.tsx",
        lineNumber: 96,
        columnNumber: 10
    }, this);
}
_c1 = BarChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactECharts");
__turbopack_context__.k.register(_c1, "BarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/charts/RadarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadarChart",
    ()=>RadarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
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
            className: "animate-pulse bg-slate-100 rounded-lg h-64"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/RadarChart.tsx",
            lineNumber: 7,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ReactECharts;
const COLORS = [
    '#F97316',
    '#3B82F6',
    '#10B981',
    '#8B5CF6',
    '#EF4444',
    '#F59E0B'
];
function RadarChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "721c614db12e11dda639380f69dda882170436a422aed2ad031520a29948769e") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "721c614db12e11dda639380f69dda882170436a422aed2ad031520a29948769e";
    }
    const { indicators, countries, height: t1 } = t0;
    const height = t1 === undefined ? 400 : t1;
    let t2;
    if ($[1] !== indicators) {
        t2 = indicators.map(_RadarChartIndicatorsMap);
        $[1] = indicators;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const indicator = t2;
    let t3;
    if ($[3] !== countries) {
        t3 = countries.map(_RadarChartCountriesMap);
        $[3] = countries;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const seriesData = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            trigger: "item",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderWidth: 1,
            borderColor: "#E2E8F0",
            textStyle: {
                color: "#1E293B"
            }
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== countries) {
        t5 = countries.map(_RadarChartCountriesMap2);
        $[6] = countries;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            20,
            0,
            0,
            0
        ];
        t7 = {
            fontSize: 11,
            color: "#64748B"
        };
        $[8] = t6;
        $[9] = t7;
    } else {
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t5) {
        t8 = {
            data: t5,
            bottom: 0,
            padding: t6,
            textStyle: t7,
            itemGap: 15
        };
        $[10] = t5;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            color: "#64748B",
            fontSize: 10,
            formatter: _temp
        };
        t10 = {
            lineStyle: {
                color: "#E2E8F0"
            }
        };
        t11 = {
            areaStyle: {
                color: [
                    "#F8FAFC",
                    "#FFFFFF"
                ]
            }
        };
        t12 = {
            lineStyle: {
                color: "#E2E8F0"
            }
        };
        t13 = [
            "50%",
            "45%"
        ];
        $[12] = t10;
        $[13] = t11;
        $[14] = t12;
        $[15] = t13;
        $[16] = t9;
    } else {
        t10 = $[12];
        t11 = $[13];
        t12 = $[14];
        t13 = $[15];
        t9 = $[16];
    }
    let t14;
    if ($[17] !== indicator) {
        t14 = {
            indicator,
            shape: "polygon",
            splitNumber: 5,
            axisName: t9,
            splitLine: t10,
            splitArea: t11,
            axisLine: t12,
            center: t13,
            radius: "65%"
        };
        $[17] = indicator;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== seriesData) {
        t15 = [
            {
                type: "radar",
                data: seriesData
            }
        ];
        $[19] = seriesData;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== t14 || $[22] !== t15 || $[23] !== t8) {
        t16 = {
            tooltip: t4,
            legend: t8,
            radar: t14,
            series: t15
        };
        $[21] = t14;
        $[22] = t15;
        $[23] = t8;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    const option = t16;
    let t17;
    if ($[25] !== height) {
        t17 = {
            height,
            width: "100%"
        };
        $[25] = height;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            renderer: "svg"
        };
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== option || $[29] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactECharts, {
            option: option,
            style: t17,
            opts: t18,
            notMerge: true
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/RadarChart.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[28] = option;
        $[29] = t17;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    return t19;
}
_c1 = RadarChart;
function _temp(value) {
    const words = value.split(" ");
    if (words.length > 2) {
        return words.slice(0, 2).join(" ") + "\n" + words.slice(2).join(" ");
    }
    return value;
}
function _RadarChartCountriesMap2(c_0) {
    return c_0.name;
}
function _RadarChartCountriesMap(c, index) {
    const color = COLORS[index % COLORS.length];
    return {
        value: c.scores,
        name: c.name,
        areaStyle: {
            opacity: 0.1,
            color
        },
        lineStyle: {
            color,
            width: 2
        },
        itemStyle: {
            color
        }
    };
}
function _RadarChartIndicatorsMap(name) {
    return {
        name,
        max: 100
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactECharts");
__turbopack_context__.k.register(_c1, "RadarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/charts/LineChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChart",
    ()=>LineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
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
            className: "animate-pulse bg-slate-100 rounded-lg h-64"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/LineChart.tsx",
            lineNumber: 7,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ReactECharts;
function LineChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "3d4c81ac21770e0b7637c0f7ccb28fae698d5c76e821e7618b38cdb17c162905") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d4c81ac21770e0b7637c0f7ccb28fae698d5c76e821e7618b38cdb17c162905";
    }
    const { categories, data, title, height: t1 } = t0;
    const height = t1 === undefined ? 350 : t1;
    let t2;
    if ($[1] !== categories || $[2] !== data || $[3] !== title) {
        const defaultColors = [
            "#F97316",
            "#3B82F6",
            "#22C55E",
            "#8B5CF6",
            "#06B6D4",
            "#EF4444"
        ];
        let t3;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = {
                trigger: "axis"
            };
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        let t4;
        if ($[6] !== data) {
            t4 = data.length > 1 ? {
                data: data.map(_LineChartDataMap),
                bottom: 0,
                textStyle: {
                    fontSize: 11,
                    color: "#64748B"
                }
            } : undefined;
            $[6] = data;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        const t5 = data.length > 1 ? "15%" : "3%";
        const t6 = title ? "12%" : "3%";
        let t7;
        if ($[8] !== t5 || $[9] !== t6) {
            t7 = {
                left: "3%",
                right: "4%",
                bottom: t5,
                top: t6,
                containLabel: true
            };
            $[8] = t5;
            $[9] = t6;
            $[10] = t7;
        } else {
            t7 = $[10];
        }
        let t8;
        if ($[11] !== title) {
            t8 = title ? {
                text: title,
                left: "center",
                textStyle: {
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0F172A"
                }
            } : undefined;
            $[11] = title;
            $[12] = t8;
        } else {
            t8 = $[12];
        }
        let t10;
        let t9;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = {
                fontSize: 11,
                color: "#64748B"
            };
            t10 = {
                lineStyle: {
                    color: "#E2E8F0"
                }
            };
            $[13] = t10;
            $[14] = t9;
        } else {
            t10 = $[13];
            t9 = $[14];
        }
        let t11;
        if ($[15] !== categories) {
            t11 = {
                type: "category",
                data: categories,
                axisLabel: t9,
                axisLine: t10
            };
            $[15] = categories;
            $[16] = t11;
        } else {
            t11 = $[16];
        }
        let t12;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = {
                type: "value",
                axisLabel: {
                    fontSize: 11,
                    color: "#64748B"
                },
                splitLine: {
                    lineStyle: {
                        color: "#F1F5F9"
                    }
                }
            };
            $[17] = t12;
        } else {
            t12 = $[17];
        }
        t2 = {
            tooltip: t3,
            legend: t4,
            grid: t7,
            title: t8,
            xAxis: t11,
            yAxis: t12,
            series: data.map({
                "LineChart[data.map()]": (d_0, i)=>({
                        name: d_0.name,
                        type: "line",
                        data: d_0.values,
                        smooth: true,
                        lineStyle: {
                            color: d_0.color || defaultColors[i % defaultColors.length],
                            width: 2
                        },
                        itemStyle: {
                            color: d_0.color || defaultColors[i % defaultColors.length]
                        },
                        areaStyle: {
                            opacity: 0.05,
                            color: d_0.color || defaultColors[i % defaultColors.length]
                        }
                    })
            }["LineChart[data.map()]"])
        };
        $[1] = categories;
        $[2] = data;
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const option = t2;
    let t3;
    if ($[18] !== height) {
        t3 = {
            height,
            width: "100%"
        };
        $[18] = height;
        $[19] = t3;
    } else {
        t3 = $[19];
    }
    let t4;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            renderer: "svg"
        };
        $[20] = t4;
    } else {
        t4 = $[20];
    }
    let t5;
    if ($[21] !== option || $[22] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactECharts, {
            option: option,
            style: t3,
            opts: t4,
            notMerge: true
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/LineChart.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[21] = option;
        $[22] = t3;
        $[23] = t5;
    } else {
        t5 = $[23];
    }
    return t5;
}
_c1 = LineChart;
function _LineChartDataMap(d) {
    return d.name;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactECharts");
__turbopack_context__.k.register(_c1, "LineChart");
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
"[project]/Developer/planetary-constellation/src/app/comparison/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useComparison$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useComparison.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/indicators.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/charts/BarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/charts/RadarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/charts/LineChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
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
;
;
;
;
const allCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
function ComparisonPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(123);
    if ($[0] !== "880a25b7120c93cf0879ef92c760e3745d582ed0d9418d6463caaeec3e32bbe2") {
        for(let $i = 0; $i < 123; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "880a25b7120c93cf0879ef92c760e3745d582ed0d9418d6463caaeec3e32bbe2";
    }
    const { selectedIds, selectedCountries, toggleCountry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useComparison$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComparison"])();
    const [chartType, setChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("radar");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIndicatorDropdownOpen, setIsIndicatorDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIndicator, setSelectedIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all_building_blocks");
    const [appliedCountries, setAppliedCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedCountries);
    const [appliedIndicator, setAppliedIndicator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all_building_blocks");
    let t0;
    bb0: {
        if (!searchQuery) {
            t0 = allCountries;
            break bb0;
        }
        let t1;
        if ($[1] !== searchQuery) {
            t1 = allCountries.filter({
                "ComparisonPage[allCountries.filter()]": (c)=>c.name.toLowerCase().includes(searchQuery.toLowerCase())
            }["ComparisonPage[allCountries.filter()]"]);
            $[1] = searchQuery;
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        t0 = t1;
    }
    const filteredCountries = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map(_ComparisonPageBuildingBlocksMap);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const bbNames = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let barData = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let radarCountries = t3;
    let singleIndicatorName = "";
    if (appliedIndicator === "all_building_blocks" || appliedIndicator === "overall") {
        let t4;
        if ($[6] !== appliedCountries) {
            t4 = appliedCountries.map(_ComparisonPageAppliedCountriesMap);
            $[6] = appliedCountries;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        barData = t4;
        let t5;
        if ($[8] !== appliedCountries) {
            t5 = appliedCountries.map(_ComparisonPageAppliedCountriesMap2);
            $[8] = appliedCountries;
            $[9] = t5;
        } else {
            t5 = $[9];
        }
        radarCountries = t5;
    } else {
        let t4;
        if ($[10] !== appliedIndicator) {
            t4 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].find({
                "ComparisonPage[buildingBlocks.find()]": (b)=>b.id === appliedIndicator
            }["ComparisonPage[buildingBlocks.find()]"]);
            $[10] = appliedIndicator;
            $[11] = t4;
        } else {
            t4 = $[11];
        }
        const bb_2 = t4;
        if (bb_2) {
            singleIndicatorName = bb_2.name;
            let t5;
            if ($[12] !== appliedCountries || $[13] !== bb_2.id) {
                let t6;
                if ($[15] !== bb_2.id) {
                    t6 = ({
                        "ComparisonPage[appliedCountries.map()]": (c_2)=>({
                                name: c_2.name,
                                values: [
                                    c_2.buildingBlocks[bb_2.id].score
                                ]
                            })
                    })["ComparisonPage[appliedCountries.map()]"];
                    $[15] = bb_2.id;
                    $[16] = t6;
                } else {
                    t6 = $[16];
                }
                t5 = appliedCountries.map(t6);
                $[12] = appliedCountries;
                $[13] = bb_2.id;
                $[14] = t5;
            } else {
                t5 = $[14];
            }
            barData = t5;
        }
    }
    let t4;
    bb1: {
        if (appliedCountries.length < 2) {
            let t5;
            if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
                t5 = [];
                $[17] = t5;
            } else {
                t5 = $[17];
            }
            t4 = t5;
            break bb1;
        }
        let results;
        if ($[18] !== appliedCountries || $[19] !== appliedIndicator) {
            results = [];
            if (appliedIndicator === "all_building_blocks" || appliedIndicator === "overall") {
                const best = appliedCountries.reduce(_ComparisonPageAppliedCountriesReduce);
                results.push(`${best.name} demonstrates the most robust health system among the selected group, achieving a leading overall score of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(best.buildingBlocks)}.`);
                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].forEach({
                    "ComparisonPage[buildingBlocks.forEach()]": (bb_3)=>{
                        const scores = appliedCountries.map({
                            "ComparisonPage[buildingBlocks.forEach() > appliedCountries.map()]": (c_3)=>({
                                    name: c_3.name,
                                    score: c_3.buildingBlocks[bb_3.id].score
                                })
                        }["ComparisonPage[buildingBlocks.forEach() > appliedCountries.map()]"]);
                        const max = scores.reduce(_ComparisonPageBuildingBlocksForEachScoresReduce);
                        const min = scores.reduce(_ComparisonPageBuildingBlocksForEachScoresReduce2);
                        if (max.score - min.score > 20) {
                            results.push(`There is a significant disparity of ${max.score - min.score} points in ${bb_3.name}, with ${max.name} outperforming ${min.name} (${max.score} vs ${min.score}).`);
                        }
                    }
                }["ComparisonPage[buildingBlocks.forEach()]"]);
            } else {
                let t5;
                if ($[21] !== appliedIndicator) {
                    t5 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].find({
                        "ComparisonPage[buildingBlocks.find()]": (b_3)=>b_3.id === appliedIndicator
                    }["ComparisonPage[buildingBlocks.find()]"]);
                    $[21] = appliedIndicator;
                    $[22] = t5;
                } else {
                    t5 = $[22];
                }
                const bb_4 = t5;
                if (bb_4) {
                    let t6;
                    if ($[23] !== appliedCountries || $[24] !== bb_4.id) {
                        let t7;
                        if ($[26] !== bb_4.id) {
                            t7 = ({
                                "ComparisonPage[appliedCountries.map()]": (c_4)=>({
                                        name: c_4.name,
                                        score: c_4.buildingBlocks[bb_4.id].score
                                    })
                            })["ComparisonPage[appliedCountries.map()]"];
                            $[26] = bb_4.id;
                            $[27] = t7;
                        } else {
                            t7 = $[27];
                        }
                        t6 = appliedCountries.map(t7).sort(_ComparisonPageAnonymous);
                        $[23] = appliedCountries;
                        $[24] = bb_4.id;
                        $[25] = t6;
                    } else {
                        t6 = $[25];
                    }
                    const scores_0 = t6;
                    results.push(`${scores_0[0].name} leads the peer group in ${bb_4.name} with a score of ${scores_0[0].score}.`);
                    if (scores_0.length > 1) {
                        const diff = scores_0[0].score - scores_0[scores_0.length - 1].score;
                        if (diff > 15) {
                            results.push(`${scores_0[scores_0.length - 1].name} lags behind with a ${bb_4.name} score of ${scores_0[scores_0.length - 1].score}, indicating a potential area for targeted capacity building.`);
                        } else {
                            results.push(`Performance in ${bb_4.name} is relatively consistent across the selected countries, with only a ${diff}-point gap between the highest and lowest performers.`);
                        }
                    }
                }
            }
            $[18] = appliedCountries;
            $[19] = appliedIndicator;
            $[20] = results;
        } else {
            results = $[20];
        }
        t4 = results;
    }
    const insights = t4;
    let t5;
    if ($[28] !== chartType || $[29] !== selectedCountries || $[30] !== selectedIndicator) {
        t5 = ({
            "ComparisonPage[handleGenerate]": ()=>{
                setAppliedCountries(selectedCountries);
                setAppliedIndicator(selectedIndicator);
                if (selectedIndicator !== "all_building_blocks" && selectedIndicator !== "overall" && chartType === "radar") {
                    setChartType("bar");
                }
            }
        })["ComparisonPage[handleGenerate]"];
        $[28] = chartType;
        $[29] = selectedCountries;
        $[30] = selectedIndicator;
        $[31] = t5;
    } else {
        t5 = $[31];
    }
    const handleGenerate = t5;
    let t6;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-slate-600",
            children: "Select Countries"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 251,
            columnNumber: 10
        }, this);
        $[32] = t6;
    } else {
        t6 = $[32];
    }
    let t7;
    if ($[33] !== isCountryDropdownOpen) {
        t7 = ({
            "ComparisonPage[<button>.onClick]": ()=>setIsCountryDropdownOpen(!isCountryDropdownOpen)
        })["ComparisonPage[<button>.onClick]"];
        $[33] = isCountryDropdownOpen;
        $[34] = t7;
    } else {
        t7 = $[34];
    }
    let t8;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    className: "w-4 h-4 text-slate-400"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 268,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Choose by Country"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 268,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 268,
            columnNumber: 10
        }, this);
        $[35] = t8;
    } else {
        t8 = $[35];
    }
    const t9 = isCountryDropdownOpen && "rotate-180";
    let t10;
    if ($[36] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 text-slate-400 transition-transform", t9);
        $[36] = t9;
        $[37] = t10;
    } else {
        t10 = $[37];
    }
    let t11;
    if ($[38] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t10
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[38] = t10;
        $[39] = t11;
    } else {
        t11 = $[39];
    }
    let t12;
    if ($[40] !== t11 || $[41] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t7,
            className: "w-full flex items-center justify-between border border-slate-200 bg-slate-50/50 rounded-lg px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/30",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t7;
        $[42] = t12;
    } else {
        t12 = $[42];
    }
    let t13;
    if ($[43] !== filteredCountries || $[44] !== isCountryDropdownOpen || $[45] !== searchQuery || $[46] !== selectedIds || $[47] !== toggleCountry) {
        t13 = isCountryDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-12 left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden flex flex-col max-h-[250px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search countries...",
                    value: searchQuery,
                    onChange: {
                        "ComparisonPage[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
                    }["ComparisonPage[<input>.onChange]"],
                    className: "w-full border-b border-slate-100 px-3 py-2 text-sm focus:outline-none bg-slate-50"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 301,
                    columnNumber: 181
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: filteredCountries.map({
                        "ComparisonPage[filteredCountries.map()]": (c_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ComparisonPage[filteredCountries.map() > <button>.onClick]": ()=>{
                                        toggleCountry(c_5.id);
                                        setIsCountryDropdownOpen(false);
                                    }
                                }["ComparisonPage[filteredCountries.map() > <button>.onClick]"],
                                className: "w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors", selectedIds.includes(c_5.id) ? "bg-orange-500 border-orange-500" : "border-slate-300 bg-white"),
                                        children: selectedIds.includes(c_5.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 423
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 183
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                        code: c_5.code,
                                        name: c_5.name
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 470
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("truncate", selectedIds.includes(c_5.id) ? "text-slate-900 font-medium" : "text-slate-600"),
                                        children: c_5.name
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 517
                                    }, this)
                                ]
                            }, c_5.id, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 304,
                                columnNumber: 61
                            }, this)
                    }["ComparisonPage[filteredCountries.map()]"])
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 303,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 301,
            columnNumber: 36
        }, this);
        $[43] = filteredCountries;
        $[44] = isCountryDropdownOpen;
        $[45] = searchQuery;
        $[46] = selectedIds;
        $[47] = toggleCountry;
        $[48] = t13;
    } else {
        t13 = $[48];
    }
    let t14;
    if ($[49] !== t12 || $[50] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[49] = t12;
        $[50] = t13;
        $[51] = t14;
    } else {
        t14 = $[51];
    }
    let t15;
    if ($[52] !== isCountryDropdownOpen || $[53] !== selectedCountries || $[54] !== toggleCountry) {
        t15 = selectedCountries.length > 0 && !isCountryDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-1 mt-1",
            children: selectedCountries.map({
                "ComparisonPage[selectedCountries.map()]": (c_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs",
                        children: [
                            c_6.name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ComparisonPage[selectedCountries.map() > <button>.onClick]": ()=>toggleCountry(c_6.id)
                                }["ComparisonPage[selectedCountries.map() > <button>.onClick]"],
                                className: "hover:text-red-500 focus:outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 126
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 332,
                                columnNumber: 187
                            }, this)
                        ]
                    }, c_6.id, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 332,
                        columnNumber: 59
                    }, this)
            }["ComparisonPage[selectedCountries.map()]"])
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 331,
            columnNumber: 69
        }, this);
        $[52] = isCountryDropdownOpen;
        $[53] = selectedCountries;
        $[54] = toggleCountry;
        $[55] = t15;
    } else {
        t15 = $[55];
    }
    let t16;
    if ($[56] !== t14 || $[57] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 relative z-20",
            children: [
                t6,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[56] = t14;
        $[57] = t15;
        $[58] = t16;
    } else {
        t16 = $[58];
    }
    let t17;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-slate-600",
            children: "Select Indicator"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[59] = t17;
    } else {
        t17 = $[59];
    }
    let t18;
    if ($[60] !== isIndicatorDropdownOpen) {
        t18 = ({
            "ComparisonPage[<button>.onClick]": ()=>setIsIndicatorDropdownOpen(!isIndicatorDropdownOpen)
        })["ComparisonPage[<button>.onClick]"];
        $[60] = isIndicatorDropdownOpen;
        $[61] = t18;
    } else {
        t18 = $[61];
    }
    let t19;
    if ($[62] !== selectedIndicator) {
        t19 = selectedIndicator === "all_building_blocks" ? "All Building Blocks" : selectedIndicator === "overall" ? "Overall Health Score" : __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].find({
            "ComparisonPage[buildingBlocks.find()]": (b_5)=>b_5.id === selectedIndicator
        }["ComparisonPage[buildingBlocks.find()]"])?.name || "Choose indicator";
        $[62] = selectedIndicator;
        $[63] = t19;
    } else {
        t19 = $[63];
    }
    let t20;
    if ($[64] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "truncate",
            children: t19
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[64] = t19;
        $[65] = t20;
    } else {
        t20 = $[65];
    }
    const t21 = isIndicatorDropdownOpen && "rotate-180";
    let t22;
    if ($[66] !== t21) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 text-slate-400 transition-transform", t21);
        $[66] = t21;
        $[67] = t22;
    } else {
        t22 = $[67];
    }
    let t23;
    if ($[68] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t22
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[68] = t22;
        $[69] = t23;
    } else {
        t23 = $[69];
    }
    let t24;
    if ($[70] !== t18 || $[71] !== t20 || $[72] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t18,
            className: "w-full flex items-center justify-between border border-slate-200 bg-slate-50/50 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/30",
            children: [
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[70] = t18;
        $[71] = t20;
        $[72] = t23;
        $[73] = t24;
    } else {
        t24 = $[73];
    }
    let t25;
    if ($[74] !== isIndicatorDropdownOpen || $[75] !== selectedIndicator) {
        t25 = isIndicatorDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-12 left-0 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-y-auto max-h-[250px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ComparisonPage[<button>.onClick]": ()=>{
                            setSelectedIndicator("all_building_blocks");
                            setIsIndicatorDropdownOpen(false);
                        }
                    }["ComparisonPage[<button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2.5 text-sm transition-colors", selectedIndicator === "all_building_blocks" ? "bg-orange-50 text-orange-700 font-medium" : "text-slate-700 hover:bg-slate-50"),
                    children: "All Building Blocks"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 416,
                    columnNumber: 169
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ComparisonPage[<button>.onClick]": ()=>{
                            setSelectedIndicator("overall");
                            setIsIndicatorDropdownOpen(false);
                        }
                    }["ComparisonPage[<button>.onClick]"],
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2.5 text-sm transition-colors", selectedIndicator === "overall" ? "bg-orange-50 text-orange-700 font-medium" : "text-slate-700 hover:bg-slate-50"),
                    children: "Overall Health Score"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 421,
                    columnNumber: 274
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 border-y border-slate-100",
                    children: "Specific Building Blocks"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 426,
                    columnNumber: 263
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
                    "ComparisonPage[buildingBlocks.map()]": (bb_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ComparisonPage[buildingBlocks.map() > <button>.onClick]": ()=>{
                                    setSelectedIndicator(bb_5.id);
                                    setIsIndicatorDropdownOpen(false);
                                }
                            }["ComparisonPage[buildingBlocks.map() > <button>.onClick]"],
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2.5 text-sm transition-colors", selectedIndicator === bb_5.id ? "bg-orange-50 text-orange-700 font-medium" : "text-slate-700 hover:bg-slate-50"),
                            children: bb_5.name
                        }, bb_5.id, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                            lineNumber: 427,
                            columnNumber: 57
                        }, this)
                }["ComparisonPage[buildingBlocks.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 416,
            columnNumber: 38
        }, this);
        $[74] = isIndicatorDropdownOpen;
        $[75] = selectedIndicator;
        $[76] = t25;
    } else {
        t25 = $[76];
    }
    let t26;
    if ($[77] !== t24 || $[78] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 relative z-10",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t24,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 442,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[77] = t24;
        $[78] = t25;
        $[79] = t26;
    } else {
        t26 = $[79];
    }
    const t27 = selectedCountries.length === 0;
    let t28;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[80] = t28;
    } else {
        t28 = $[80];
    }
    let t29;
    if ($[81] !== handleGenerate || $[82] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-auto pt-4 relative z-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleGenerate,
                disabled: t27,
                className: "w-full bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-slate-200 disabled:text-slate-400 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 focus:ring-offset-2",
                children: [
                    t28,
                    "Generate Comparison"
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 459,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 459,
            columnNumber: 11
        }, this);
        $[81] = handleGenerate;
        $[82] = t27;
        $[83] = t29;
    } else {
        t29 = $[83];
    }
    let t30;
    if ($[84] !== t16 || $[85] !== t26 || $[86] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full p-4 gap-6 overflow-y-auto",
            children: [
                t16,
                t26,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[84] = t16;
        $[85] = t26;
        $[86] = t29;
        $[87] = t30;
    } else {
        t30 = $[87];
    }
    const sidebar = t30;
    let t31;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-slate-900",
                    children: "Comparison Matrix"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 479,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500 mt-1",
                    children: "Compare health system performance across multiple countries"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 479,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[88] = t31;
    } else {
        t31 = $[88];
    }
    let t32;
    if ($[89] !== appliedIndicator || $[90] !== chartType) {
        t32 = (appliedIndicator === "all_building_blocks" || appliedIndicator === "overall") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-slate-100 p-1 rounded-lg self-start flex-shrink-0",
            children: [
                "radar",
                "bar",
                "line"
            ].map({
                "ComparisonPage[(anonymous)()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ComparisonPage[(anonymous)() > <button>.onClick]": ()=>setChartType(t)
                        }["ComparisonPage[(anonymous)() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-1.5 rounded-md text-sm font-medium transition-colors capitalize", chartType === t ? "bg-white text-orange-600 shadow-sm" : "text-slate-600 hover:text-slate-900"),
                        children: t
                    }, t, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 487,
                        columnNumber: 47
                    }, this)
            }["ComparisonPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 486,
            columnNumber: 93
        }, this);
        $[89] = appliedIndicator;
        $[90] = chartType;
        $[91] = t32;
    } else {
        t32 = $[91];
    }
    let t33;
    if ($[92] !== appliedIndicator || $[93] !== chartType) {
        t33 = appliedIndicator !== "all_building_blocks" && appliedIndicator !== "overall" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-slate-100 p-1 rounded-lg self-start flex-shrink-0",
            children: [
                "bar",
                "line"
            ].map({
                "ComparisonPage[(anonymous)()]": (t_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ComparisonPage[(anonymous)() > <button>.onClick]": ()=>setChartType(t_0)
                        }["ComparisonPage[(anonymous)() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-1.5 rounded-md text-sm font-medium transition-colors capitalize", chartType === t_0 ? "bg-white text-orange-600 shadow-sm" : "text-slate-600 hover:text-slate-900"),
                        children: t_0
                    }, t_0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 500,
                        columnNumber: 49
                    }, this)
            }["ComparisonPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 499,
            columnNumber: 91
        }, this);
        $[92] = appliedIndicator;
        $[93] = chartType;
        $[94] = t33;
    } else {
        t33 = $[94];
    }
    let t34;
    if ($[95] !== t32 || $[96] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
            children: [
                t31,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[95] = t32;
        $[96] = t33;
        $[97] = t34;
    } else {
        t34 = $[97];
    }
    let t35;
    if ($[98] !== appliedCountries || $[99] !== toggleCountry) {
        t35 = appliedCountries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: appliedCountries.map({
                "ComparisonPage[appliedCountries.map()]": (c_7)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                code: c_7.code,
                                name: c_7.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 522,
                                columnNumber: 185
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-slate-800",
                                children: c_7.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 522,
                                columnNumber: 232
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ComparisonPage[appliedCountries.map() > <button>.onClick]": ()=>{
                                        toggleCountry(c_7.id);
                                        setAppliedCountries({
                                            "ComparisonPage[appliedCountries.map() > <button>.onClick > setAppliedCountries()]": (prev)=>prev.filter({
                                                    "ComparisonPage[appliedCountries.map() > <button>.onClick > setAppliedCountries() > prev.filter()]": (ac)=>ac.id !== c_7.id
                                                }["ComparisonPage[appliedCountries.map() > <button>.onClick > setAppliedCountries() > prev.filter()]"])
                                        }["ComparisonPage[appliedCountries.map() > <button>.onClick > setAppliedCountries()]"]);
                                    }
                                }["ComparisonPage[appliedCountries.map() > <button>.onClick]"],
                                className: "ml-1 text-slate-400 hover:text-orange-600 transition-colors p-0.5 rounded-full hover:bg-orange-100 focus:outline-none",
                                "aria-label": `Remove ${c_7.name}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 239
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 522,
                                columnNumber: 294
                            }, this)
                        ]
                    }, c_7.id, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 522,
                        columnNumber: 58
                    }, this)
            }["ComparisonPage[appliedCountries.map()]"])
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 521,
            columnNumber: 42
        }, this);
        $[98] = appliedCountries;
        $[99] = toggleCountry;
        $[100] = t35;
    } else {
        t35 = $[100];
    }
    let t36;
    if ($[101] !== appliedCountries.length || $[102] !== appliedIndicator || $[103] !== barData || $[104] !== chartType || $[105] !== radarCountries || $[106] !== singleIndicatorName) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4",
            children: appliedCountries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[400px] flex flex-col items-center justify-center text-center p-6 bg-slate-50/50 rounded-xl border border-dashed border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-full shadow-sm mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                            className: "w-8 h-8 text-orange-400"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                            lineNumber: 541,
                            columnNumber: 326
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 541,
                        columnNumber: 268
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-800 mb-2",
                        children: "No Countries Generated"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 541,
                        columnNumber: 381
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 max-w-sm",
                        children: "Select countries and an indicator from the sidebar, then click Generate Comparison."
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 541,
                        columnNumber: 466
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 541,
                columnNumber: 119
            }, this) : chartType === "bar" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                categories: appliedIndicator === "all_building_blocks" || appliedIndicator === "overall" ? bbNames : [
                    singleIndicatorName
                ],
                data: barData,
                height: 400
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 541,
                columnNumber: 631
            }, this) : chartType === "radar" && radarCountries.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadarChart"], {
                indicators: bbNames,
                countries: radarCountries,
                height: 400
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 541,
                columnNumber: 851
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                categories: appliedIndicator === "all_building_blocks" || appliedIndicator === "overall" ? bbNames : [
                    singleIndicatorName
                ],
                data: barData,
                height: 400
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 541,
                columnNumber: 929
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[101] = appliedCountries.length;
        $[102] = appliedIndicator;
        $[103] = barData;
        $[104] = chartType;
        $[105] = radarCountries;
        $[106] = singleIndicatorName;
        $[107] = t36;
    } else {
        t36 = $[107];
    }
    let t37;
    if ($[108] !== appliedCountries) {
        t37 = appliedCountries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-slate-800 mb-4 px-1",
                    children: "Detailed Breakdown"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 554,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-50/50 border-b border-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-5 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400",
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 351
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400",
                                                children: "Overall"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 466
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap",
                                                children: "Pop. (M)"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 583
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap",
                                                children: "Exp./Capita"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 719
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap",
                                                children: "Health/GDP %"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 858
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap",
                                                children: "Debt Service %"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 998
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map(_ComparisonPageBuildingBlocksMap2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 347
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 287
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100",
                                    children: appliedCountries.map(_ComparisonPageAppliedCountriesMap3)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 1208
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                            lineNumber: 554,
                            columnNumber: 253
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 554,
                        columnNumber: 220
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 554,
                    columnNumber: 133
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 554,
            columnNumber: 42
        }, this);
        $[108] = appliedCountries;
        $[109] = t37;
    } else {
        t37 = $[109];
    }
    let t38;
    if ($[110] !== insights) {
        t38 = insights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3",
                    children: "Auto-Generated Insights"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 562,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: insights.map(_ComparisonPageInsightsMap)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 562,
                    columnNumber: 223
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 562,
            columnNumber: 34
        }, this);
        $[110] = insights;
        $[111] = t38;
    } else {
        t38 = $[111];
    }
    let t39;
    if ($[112] !== t36 || $[113] !== t37 || $[114] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t36,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[112] = t36;
        $[113] = t37;
        $[114] = t38;
        $[115] = t39;
    } else {
        t39 = $[115];
    }
    let t40;
    if ($[116] !== t34 || $[117] !== t35 || $[118] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t34,
                t35,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[116] = t34;
        $[117] = t35;
        $[118] = t39;
        $[119] = t40;
    } else {
        t40 = $[119];
    }
    let t41;
    if ($[120] !== sidebar || $[121] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageLayout"], {
            sidebar: sidebar,
            children: t40
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 590,
            columnNumber: 11
        }, this);
        $[120] = sidebar;
        $[121] = t40;
        $[122] = t41;
    } else {
        t41 = $[122];
    }
    return t41;
}
_s(ComparisonPage, "obW11shNJ3MQY7cr6xEx9ohV32g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useComparison$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComparison"]
    ];
});
_c = ComparisonPage;
function _ComparisonPageInsightsMap(insight, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-sm text-slate-600 flex items-start gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 600,
                columnNumber: 80
            }, this),
            insight
        ]
    }, i, true, {
        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
        lineNumber: 600,
        columnNumber: 10
    }, this);
}
function _ComparisonPageAppliedCountriesMap3(c_8) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "hover:bg-slate-50 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-5 py-3.5 flex items-center gap-2 min-w-[140px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                        code: c_8.code,
                        name: c_8.name
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 603,
                        columnNumber: 141
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-slate-800 text-sm whitespace-nowrap",
                        children: c_8.name
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 603,
                        columnNumber: 188
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 603,
                columnNumber: 75
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3.5 text-center",
                children: (()=>{
                    const overallScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(c_8.buildingBlocks);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-1 rounded text-xs font-semibold font-mono-data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreColor"])(overallScore)),
                        children: overallScore
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 605,
                        columnNumber: 16
                    }, this);
                })()
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 603,
                columnNumber: 281
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3.5 text-center text-slate-600 font-mono-data",
                children: c_8.population.toFixed(1)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 606,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3.5 text-center text-slate-600 font-mono-data",
                children: [
                    "$",
                    c_8.healthExpPerCapita
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 606,
                columnNumber: 119
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3.5 text-center text-slate-600 font-mono-data",
                children: [
                    c_8.healthGdpPercent.toFixed(1),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 606,
                columnNumber: 219
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3.5 text-center text-slate-600 font-mono-data",
                children: [
                    c_8.debtServiceRatio.toFixed(1),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 606,
                columnNumber: 328
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
                "ComparisonPage[appliedCountries.map() > buildingBlocks.map()]": (bb_7)=>{
                    const score = c_8.buildingBlocks[bb_7.id].score;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-3.5 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2.5 py-1 rounded text-xs font-semibold font-mono-data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreColor"])(score)),
                            children: score
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                            lineNumber: 609,
                            columnNumber: 85
                        }, this)
                    }, `${bb_7.id}-${c_8.id}`, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 609,
                        columnNumber: 16
                    }, this);
                }
            }["ComparisonPage[appliedCountries.map() > buildingBlocks.map()]"])
        ]
    }, c_8.id, true, {
        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
        lineNumber: 603,
        columnNumber: 10
    }, this);
}
function _ComparisonPageBuildingBlocksMap2(bb_6) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: "text-center px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400 whitespace-nowrap",
        children: bb_6.name
    }, bb_6.id, false, {
        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
        lineNumber: 614,
        columnNumber: 10
    }, this);
}
function _ComparisonPageAnonymous(a_2, b_4) {
    return b_4.score - a_2.score;
}
function _ComparisonPageBuildingBlocksForEachScoresReduce2(a_1, b_2) {
    return a_1.score < b_2.score ? a_1 : b_2;
}
function _ComparisonPageBuildingBlocksForEachScoresReduce(a_0, b_1) {
    return a_0.score > b_1.score ? a_0 : b_1;
}
function _ComparisonPageAppliedCountriesReduce(a, b_0) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(a.buildingBlocks) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(b_0.buildingBlocks) ? a : b_0;
}
function _ComparisonPageAppliedCountriesMap2(c_1) {
    return {
        name: c_1.name,
        scores: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
            "ComparisonPage[appliedCountries.map() > buildingBlocks.map()]": (bb_1)=>c_1.buildingBlocks[bb_1.id].score
        }["ComparisonPage[appliedCountries.map() > buildingBlocks.map()]"])
    };
}
function _ComparisonPageAppliedCountriesMap(c_0) {
    return {
        name: c_0.name,
        values: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
            "ComparisonPage[appliedCountries.map() > buildingBlocks.map()]": (bb_0)=>c_0.buildingBlocks[bb_0.id].score
        }["ComparisonPage[appliedCountries.map() > buildingBlocks.map()]"])
    };
}
function _ComparisonPageBuildingBlocksMap(bb) {
    return bb.name;
}
var _c;
__turbopack_context__.k.register(_c, "ComparisonPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_planetary-constellation_src_a0f2dace._.js.map