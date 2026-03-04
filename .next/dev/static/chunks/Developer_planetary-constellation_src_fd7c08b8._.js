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
function RadarChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "027d76f5f90a3915b0457a967067e430e106682cb790e9227cdac11619923328") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "027d76f5f90a3915b0457a967067e430e106682cb790e9227cdac11619923328";
    }
    const { data, compareData, title, height: t1 } = t0;
    const height = t1 === undefined ? 350 : t1;
    let t2;
    if ($[1] !== data) {
        t2 = data.map(_RadarChartDataMap);
        $[1] = data;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const indicator = t2;
    let series;
    if ($[3] !== compareData || $[4] !== data || $[5] !== title) {
        series = [
            {
                type: "radar",
                data: [
                    {
                        value: data.map(_RadarChartDataMap2),
                        name: title || "Score",
                        areaStyle: {
                            opacity: 0.2,
                            color: "#F97316"
                        },
                        lineStyle: {
                            color: "#F97316",
                            width: 2
                        },
                        itemStyle: {
                            color: "#F97316"
                        }
                    }
                ]
            }
        ];
        if (compareData) {
            series[0].data.push({
                value: compareData.map(_RadarChartCompareDataMap),
                name: "Peer Average",
                areaStyle: {
                    opacity: 0.1,
                    color: "#3B82F6"
                },
                lineStyle: {
                    color: "#3B82F6",
                    width: 2
                },
                itemStyle: {
                    color: "#3B82F6"
                }
            });
        }
        $[3] = compareData;
        $[4] = data;
        $[5] = title;
        $[6] = series;
    } else {
        series = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            trigger: "item"
        };
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== compareData || $[9] !== title) {
        t4 = compareData ? {
            data: [
                title || "Score",
                "Peer Average"
            ],
            bottom: 0,
            textStyle: {
                fontSize: 11,
                color: "#64748B"
            }
        } : undefined;
        $[8] = compareData;
        $[9] = title;
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
            color: "#64748B",
            fontSize: 11
        };
        t6 = {
            lineStyle: {
                color: "#E2E8F0"
            }
        };
        t7 = {
            areaStyle: {
                color: [
                    "#F8FAFC",
                    "#FFFFFF"
                ]
            }
        };
        t8 = {
            lineStyle: {
                color: "#E2E8F0"
            }
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
    if ($[15] !== indicator) {
        t9 = {
            indicator,
            shape: "polygon",
            splitNumber: 5,
            axisName: t5,
            splitLine: t6,
            splitArea: t7,
            axisLine: t8
        };
        $[15] = indicator;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== series || $[18] !== t4 || $[19] !== t9) {
        t10 = {
            tooltip: t3,
            legend: t4,
            radar: t9,
            series
        };
        $[17] = series;
        $[18] = t4;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const option = t10;
    let t11;
    if ($[21] !== height) {
        t11 = {
            height,
            width: "100%"
        };
        $[21] = height;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            renderer: "svg"
        };
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== option || $[25] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactECharts, {
            option: option,
            style: t11,
            opts: t12,
            notMerge: true
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/charts/RadarChart.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[24] = option;
        $[25] = t11;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    return t13;
}
_c1 = RadarChart;
function _RadarChartCompareDataMap(d_1) {
    return d_1.value;
}
function _RadarChartDataMap2(d_0) {
    return d_0.value;
}
function _RadarChartDataMap(d) {
    return {
        name: d.name,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
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
;
const allCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
function ComparisonPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "d3f5f7a26717563cf2d742a6a3dd48b8cac1604d918d40e416744e997be3c353") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d3f5f7a26717563cf2d742a6a3dd48b8cac1604d918d40e416744e997be3c353";
    }
    const { selectedIds, selectedCountries, toggleCountry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useComparison$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComparison"])();
    const [chartType, setChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("bar");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    if ($[4] !== selectedCountries) {
        t2 = selectedCountries.map(_ComparisonPageSelectedCountriesMap);
        $[4] = selectedCountries;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const barData = t2;
    let t3;
    if ($[6] !== selectedCountries[0] || $[7] !== selectedCountries.length) {
        t3 = selectedCountries.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
            "ComparisonPage[buildingBlocks.map()]": (bb_1)=>({
                    name: bb_1.name,
                    value: selectedCountries[0].buildingBlocks[bb_1.id].score
                })
        }["ComparisonPage[buildingBlocks.map()]"]) : [];
        $[6] = selectedCountries[0];
        $[7] = selectedCountries.length;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const radarData = t3;
    let t4;
    if ($[9] !== selectedCountries) {
        t4 = selectedCountries.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
            "ComparisonPage[buildingBlocks.map()]": (bb_2)=>({
                    name: bb_2.name,
                    value: Math.round(selectedCountries.slice(1).reduce({
                        "ComparisonPage[buildingBlocks.map() > (anonymous)()]": (sum, c_1)=>sum + c_1.buildingBlocks[bb_2.id].score
                    }["ComparisonPage[buildingBlocks.map() > (anonymous)()]"], 0) / (selectedCountries.length - 1))
                })
        }["ComparisonPage[buildingBlocks.map()]"]) : undefined;
        $[9] = selectedCountries;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const radarCompare = t4;
    let t5;
    bb1: {
        if (selectedCountries.length < 2) {
            let t6;
            if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
                t6 = [];
                $[11] = t6;
            } else {
                t6 = $[11];
            }
            t5 = t6;
            break bb1;
        }
        let results;
        if ($[12] !== selectedCountries) {
            results = [];
            const best = selectedCountries.reduce(_ComparisonPageSelectedCountriesReduce);
            results.push(`${best.name} leads with an overall score of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(best.buildingBlocks)}.`);
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].forEach({
                "ComparisonPage[buildingBlocks.forEach()]": (bb_3)=>{
                    const scores = selectedCountries.map({
                        "ComparisonPage[buildingBlocks.forEach() > selectedCountries.map()]": (c_2)=>({
                                name: c_2.name,
                                score: c_2.buildingBlocks[bb_3.id].score
                            })
                    }["ComparisonPage[buildingBlocks.forEach() > selectedCountries.map()]"]);
                    const max = scores.reduce(_ComparisonPageBuildingBlocksForEachScoresReduce);
                    const min = scores.reduce(_ComparisonPageBuildingBlocksForEachScoresReduce2);
                    if (max.score - min.score > 20) {
                        results.push(`Largest gap in ${bb_3.name}: ${max.name} (${max.score}) vs ${min.name} (${min.score}).`);
                    }
                }
            }["ComparisonPage[buildingBlocks.forEach()]"]);
            $[12] = selectedCountries;
            $[13] = results;
        } else {
            results = $[13];
        }
        t5 = results;
    }
    const insights = t5;
    let t6;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 block",
            children: "Select Countries"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ComparisonPage[<input>.onChange]": (e)=>setSearchQuery(e.target.value)
        })["ComparisonPage[<input>.onChange]"];
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== searchQuery) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search...",
            value: searchQuery,
            onChange: t7,
            className: "w-full border border-slate-200 rounded-md px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[16] = searchQuery;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== filteredCountries || $[19] !== selectedIds || $[20] !== toggleCountry) {
        let t10;
        if ($[22] !== selectedIds || $[23] !== toggleCountry) {
            t10 = ({
                "ComparisonPage[filteredCountries.map()]": (c_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ComparisonPage[filteredCountries.map() > <button>.onClick]": ()=>toggleCountry(c_3.id)
                        }["ComparisonPage[filteredCountries.map() > <button>.onClick]"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-2 transition-colors", selectedIds.includes(c_3.id) ? "bg-orange-50 text-orange-700" : "text-slate-600 hover:bg-slate-50"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                code: c_3.code,
                                name: c_3.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 172,
                                columnNumber: 280
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: c_3.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 172,
                                columnNumber: 327
                            }, this),
                            selectedIds.includes(c_3.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "w-4 h-4 text-orange-500 ml-auto flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 172,
                                columnNumber: 404
                            }, this)
                        ]
                    }, c_3.id, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 170,
                        columnNumber: 59
                    }, this)
            })["ComparisonPage[filteredCountries.map()]"];
            $[22] = selectedIds;
            $[23] = toggleCountry;
            $[24] = t10;
        } else {
            t10 = $[24];
        }
        t9 = filteredCountries.map(t10);
        $[18] = filteredCountries;
        $[19] = selectedIds;
        $[20] = toggleCountry;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto space-y-1 pr-1",
            children: t9
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] !== t10 || $[28] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full overflow-hidden p-4",
            children: [
                t6,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t8;
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    const sidebar = t11;
    let t12;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-slate-900",
                    children: "Comparison Matrix"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 208,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500 mt-1",
                    children: "Compare health system performance across multiple countries"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 208,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = [
            "bar",
            "radar",
            "line"
        ];
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== chartType) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex bg-slate-100 p-1 rounded-lg self-start flex-shrink-0",
                    children: t13.map({
                        "ComparisonPage[(anonymous)()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ComparisonPage[(anonymous)() > <button>.onClick]": ()=>setChartType(t)
                                }["ComparisonPage[(anonymous)() > <button>.onClick]"],
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-1.5 rounded-md text-sm font-medium transition-colors capitalize", chartType === t ? "bg-white text-orange-600 shadow-sm" : "text-slate-600 hover:text-slate-900"),
                                children: t
                            }, t, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 223,
                                columnNumber: 49
                            }, this)
                    }["ComparisonPage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 222,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[32] = chartType;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== selectedCountries || $[35] !== toggleCountry) {
        t15 = selectedCountries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: selectedCountries.map({
                "ComparisonPage[selectedCountries.map()]": (c_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                code: c_4.code,
                                name: c_4.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 235,
                                columnNumber: 186
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-slate-800",
                                children: c_4.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 235,
                                columnNumber: 233
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "ComparisonPage[selectedCountries.map() > <button>.onClick]": ()=>toggleCountry(c_4.id)
                                }["ComparisonPage[selectedCountries.map() > <button>.onClick]"],
                                className: "ml-1 text-slate-400 hover:text-orange-600 transition-colors p-0.5 rounded-full hover:bg-orange-100 focus:outline-none",
                                "aria-label": `Remove ${c_4.name}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 240
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 235,
                                columnNumber: 295
                            }, this)
                        ]
                    }, c_4.id, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 235,
                        columnNumber: 59
                    }, this)
            }["ComparisonPage[selectedCountries.map()]"])
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 234,
            columnNumber: 43
        }, this);
        $[34] = selectedCountries;
        $[35] = toggleCountry;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== barData || $[38] !== chartType || $[39] !== radarCompare || $[40] !== radarData || $[41] !== selectedCountries[0]?.name || $[42] !== selectedCountries.length) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4",
            children: selectedCountries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[400px] flex flex-col items-center justify-center text-center p-6 bg-slate-50/50 rounded-xl border border-dashed border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-full shadow-sm mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                            className: "w-8 h-8 text-orange-400"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                            lineNumber: 247,
                            columnNumber: 327
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 247,
                        columnNumber: 269
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-800 mb-2",
                        children: "No Countries Selected"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 247,
                        columnNumber: 382
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 max-w-sm",
                        children: "Select countries from the sidebar to compare their health system performance and generate insights."
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 247,
                        columnNumber: 466
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 247,
                columnNumber: 120
            }, this) : chartType === "bar" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                categories: bbNames,
                data: barData,
                height: 400
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 247,
                columnNumber: 647
            }, this) : chartType === "radar" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadarChart"], {
                data: radarData,
                compareData: radarCompare,
                title: selectedCountries[0]?.name,
                height: 400
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 247,
                columnNumber: 735
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$LineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                categories: bbNames,
                data: barData,
                height: 400
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 247,
                columnNumber: 844
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[37] = barData;
        $[38] = chartType;
        $[39] = radarCompare;
        $[40] = radarData;
        $[41] = selectedCountries[0]?.name;
        $[42] = selectedCountries.length;
        $[43] = t16;
    } else {
        t16 = $[43];
    }
    let t17;
    if ($[44] !== selectedCountries) {
        t17 = selectedCountries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 246
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400",
                                        children: "Overall"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 361
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map(_ComparisonPageBuildingBlocksMap2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                                lineNumber: 260,
                                columnNumber: 204
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                            lineNumber: 260,
                            columnNumber: 197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: selectedCountries.map(_ComparisonPageSelectedCountriesMap2)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                            lineNumber: 260,
                            columnNumber: 546
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 260,
                    columnNumber: 163
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 260,
                columnNumber: 130
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 260,
            columnNumber: 43
        }, this);
        $[44] = selectedCountries;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    let t18;
    if ($[46] !== insights) {
        t18 = insights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3",
                    children: "Auto-Generated Insights"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 268,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: insights.map(_ComparisonPageInsightsMap)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 268,
                    columnNumber: 223
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 268,
            columnNumber: 34
        }, this);
        $[46] = insights;
        $[47] = t18;
    } else {
        t18 = $[47];
    }
    let t19;
    if ($[48] !== t16 || $[49] !== t17 || $[50] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[48] = t16;
        $[49] = t17;
        $[50] = t18;
        $[51] = t19;
    } else {
        t19 = $[51];
    }
    let t20;
    if ($[52] !== t14 || $[53] !== t15 || $[54] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t14,
                t15,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[52] = t14;
        $[53] = t15;
        $[54] = t19;
        $[55] = t20;
    } else {
        t20 = $[55];
    }
    let t21;
    if ($[56] !== sidebar || $[57] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageLayout"], {
            sidebar: sidebar,
            children: t20
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[56] = sidebar;
        $[57] = t20;
        $[58] = t21;
    } else {
        t21 = $[58];
    }
    return t21;
}
_s(ComparisonPage, "FD74H83Dhm6yIB4VhZkKer/RTcM=", false, function() {
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
                lineNumber: 306,
                columnNumber: 80
            }, this),
            insight
        ]
    }, i, true, {
        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
        lineNumber: 306,
        columnNumber: 10
    }, this);
}
function _ComparisonPageSelectedCountriesMap2(c_5) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-slate-50 hover:bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-4 py-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                        code: c_5.code,
                        name: c_5.name
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 309,
                        columnNumber: 132
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-slate-800",
                        children: c_5.name
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 309,
                        columnNumber: 179
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 309,
                columnNumber: 82
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "text-center px-3 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreBadge"], {
                    score: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(c_5.buildingBlocks),
                    size: "sm"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                    lineNumber: 309,
                    columnNumber: 284
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                lineNumber: 309,
                columnNumber: 246
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
                "ComparisonPage[selectedCountries.map() > buildingBlocks.map()]": (bb_5)=>{
                    const score = c_5.buildingBlocks[bb_5.id].score;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center px-3 py-3 font-semibold font-mono-data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreColor"])(score)),
                        children: score
                    }, bb_5.id, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
                        lineNumber: 312,
                        columnNumber: 16
                    }, this);
                }
            }["ComparisonPage[selectedCountries.map() > buildingBlocks.map()]"])
        ]
    }, c_5.id, true, {
        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
        lineNumber: 309,
        columnNumber: 10
    }, this);
}
function _ComparisonPageBuildingBlocksMap2(bb_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: "text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400",
        children: bb_4.name.split(" ")[0]
    }, bb_4.id, false, {
        fileName: "[project]/Developer/planetary-constellation/src/app/comparison/page.tsx",
        lineNumber: 317,
        columnNumber: 10
    }, this);
}
function _ComparisonPageBuildingBlocksForEachScoresReduce2(a_1, b_1) {
    return a_1.score < b_1.score ? a_1 : b_1;
}
function _ComparisonPageBuildingBlocksForEachScoresReduce(a_0, b_0) {
    return a_0.score > b_0.score ? a_0 : b_0;
}
function _ComparisonPageSelectedCountriesReduce(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(a.buildingBlocks) > (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(b.buildingBlocks) ? a : b;
}
function _ComparisonPageSelectedCountriesMap(c_0) {
    return {
        name: c_0.name,
        values: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
            "ComparisonPage[selectedCountries.map() > buildingBlocks.map()]": (bb_0)=>c_0.buildingBlocks[bb_0.id].score
        }["ComparisonPage[selectedCountries.map() > buildingBlocks.map()]"])
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

//# sourceMappingURL=Developer_planetary-constellation_src_fd7c08b8._.js.map