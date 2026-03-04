(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BenchmarkingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/indicators.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/charts/RadarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/charts/BarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-client] (ecmascript)");
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
const allCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
function BenchmarkingPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(121);
    if ($[0] !== "b25b2ed52773c1210636aacd1a82fbae776150fd29278178eea0f7f5135e2777") {
        for(let $i = 0; $i < 121; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b25b2ed52773c1210636aacd1a82fbae776150fd29278178eea0f7f5135e2777";
    }
    const [selectedCountryId, setSelectedCountryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("nga");
    const [peerGroup, setPeerGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("region");
    let t0;
    if ($[1] !== selectedCountryId) {
        t0 = allCountries.find({
            "BenchmarkingPage[allCountries.find()]": (c)=>c.id === selectedCountryId
        }["BenchmarkingPage[allCountries.find()]"]);
        $[1] = selectedCountryId;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const selectedCountry = t0;
    let t1;
    bb0: {
        if (!selectedCountry) {
            let t2;
            if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = [];
                $[3] = t2;
            } else {
                t2 = $[3];
            }
            t1 = t2;
            break bb0;
        }
        if (peerGroup === "region") {
            let t2;
            if ($[4] !== selectedCountry.region || $[5] !== selectedCountryId) {
                let t3;
                if ($[7] !== selectedCountryId) {
                    t3 = ({
                        "BenchmarkingPage[(anonymous)()]": (c_0)=>c_0.id !== selectedCountryId
                    })["BenchmarkingPage[(anonymous)()]"];
                    $[7] = selectedCountryId;
                    $[8] = t3;
                } else {
                    t3 = $[8];
                }
                t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountriesByRegion"])(selectedCountry.region).filter(t3);
                $[4] = selectedCountry.region;
                $[5] = selectedCountryId;
                $[6] = t2;
            } else {
                t2 = $[6];
            }
            t1 = t2;
            break bb0;
        }
        if (peerGroup === "income") {
            let t2;
            if ($[9] !== selectedCountry || $[10] !== selectedCountryId) {
                t2 = allCountries.filter({
                    "BenchmarkingPage[allCountries.filter()]": (c_1)=>c_1.incomeLevel === selectedCountry.incomeLevel && c_1.id !== selectedCountryId
                }["BenchmarkingPage[allCountries.filter()]"]);
                $[9] = selectedCountry;
                $[10] = selectedCountryId;
                $[11] = t2;
            } else {
                t2 = $[11];
            }
            t1 = t2;
            break bb0;
        }
        let t2;
        if ($[12] !== selectedCountry || $[13] !== selectedCountryId) {
            t2 = allCountries.filter({
                "BenchmarkingPage[allCountries.filter()]": (c_2)=>c_2.rec === selectedCountry.rec && c_2.id !== selectedCountryId
            }["BenchmarkingPage[allCountries.filter()]"]);
            $[12] = selectedCountry;
            $[13] = selectedCountryId;
            $[14] = t2;
        } else {
            t2 = $[14];
        }
        t1 = t2;
    }
    const peerCountries = t1;
    let t2;
    bb1: {
        if (!selectedCountry) {
            let t3;
            if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = [];
                $[15] = t3;
            } else {
                t3 = $[15];
            }
            t2 = t3;
            break bb1;
        }
        const t3 = selectedCountry.name;
        let t4;
        if ($[16] !== selectedCountry.buildingBlocks) {
            t4 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
                "BenchmarkingPage[buildingBlocks.map()]": (bb)=>selectedCountry.buildingBlocks[bb.id].score
            }["BenchmarkingPage[buildingBlocks.map()]"]);
            $[16] = selectedCountry.buildingBlocks;
            $[17] = t4;
        } else {
            t4 = $[17];
        }
        let t5;
        if ($[18] !== selectedCountry.name || $[19] !== t4) {
            t5 = {
                name: t3,
                scores: t4
            };
            $[18] = selectedCountry.name;
            $[19] = t4;
            $[20] = t5;
        } else {
            t5 = $[20];
        }
        let result;
        if ($[21] !== peerCountries || $[22] !== t5) {
            result = [
                t5
            ];
            if (peerCountries.length > 0) {
                let t6;
                if ($[24] !== peerCountries) {
                    t6 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
                        "BenchmarkingPage[buildingBlocks.map()]": (bb_0)=>Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["average"])(peerCountries.map({
                                "BenchmarkingPage[buildingBlocks.map() > peerCountries.map()]": (c_3)=>c_3.buildingBlocks[bb_0.id].score
                            }["BenchmarkingPage[buildingBlocks.map() > peerCountries.map()]"])))
                    }["BenchmarkingPage[buildingBlocks.map()]"]);
                    $[24] = peerCountries;
                    $[25] = t6;
                } else {
                    t6 = $[25];
                }
                let t7;
                if ($[26] !== t6) {
                    t7 = {
                        name: "Peer Average",
                        scores: t6
                    };
                    $[26] = t6;
                    $[27] = t7;
                } else {
                    t7 = $[27];
                }
                result.push(t7);
            }
            $[21] = peerCountries;
            $[22] = t5;
            $[23] = result;
        } else {
            result = $[23];
        }
        t2 = result;
    }
    const radarCountries = t2;
    let t3;
    if ($[28] !== peerCountries || $[29] !== selectedCountry) {
        const group = selectedCountry ? [
            selectedCountry,
            ...peerCountries
        ] : peerCountries;
        t3 = group.map(_BenchmarkingPageGroupMap).sort(_BenchmarkingPageAnonymous);
        $[28] = peerCountries;
        $[29] = selectedCountry;
        $[30] = t3;
    } else {
        t3 = $[30];
    }
    const rankingData = t3;
    let t4;
    bb2: {
        if (!selectedCountry || radarCountries.length < 2) {
            let t5;
            if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
                t5 = [];
                $[31] = t5;
            } else {
                t5 = $[31];
            }
            t4 = t5;
            break bb2;
        }
        const peerScores = radarCountries[1].scores;
        let t5;
        if ($[32] !== peerScores || $[33] !== selectedCountry) {
            t5 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map({
                "BenchmarkingPage[buildingBlocks.map()]": (bb_1, i)=>{
                    const myScore = selectedCountry.buildingBlocks[bb_1.id].score;
                    const peerAvg = peerScores[i];
                    return {
                        block: bb_1.name,
                        myScore,
                        peerAvg,
                        gap: myScore - peerAvg
                    };
                }
            }["BenchmarkingPage[buildingBlocks.map()]"]);
            $[32] = peerScores;
            $[33] = selectedCountry;
            $[34] = t5;
        } else {
            t5 = $[34];
        }
        t4 = t5;
    }
    const gapAnalysis = t4;
    let t5;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REGIONS"].map(_BenchmarkingPageREGIONSMap);
        $[35] = t5;
    } else {
        t5 = $[35];
    }
    const regionalAverages = t5;
    if (!selectedCountry) {
        return null;
    }
    let t6;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-sm font-bold text-slate-900 mb-4",
            children: "Configuration"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 237,
            columnNumber: 10
        }, this);
        $[36] = t6;
    } else {
        t6 = $[36];
    }
    let t7;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block",
            children: "Focus Country"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 244,
            columnNumber: 10
        }, this);
        $[37] = t7;
    } else {
        t7 = $[37];
    }
    let t8;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "BenchmarkingPage[<select>.onChange]": (e)=>setSelectedCountryId(e.target.value)
        })["BenchmarkingPage[<select>.onChange]"];
        $[38] = t8;
    } else {
        t8 = $[38];
    }
    let t9;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = allCountries.map(_BenchmarkingPageAllCountriesMap);
        $[39] = t9;
    } else {
        t9 = $[39];
    }
    let t10;
    if ($[40] !== selectedCountryId) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedCountryId,
                    onChange: t8,
                    className: "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 267,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[40] = selectedCountryId;
        $[41] = t10;
    } else {
        t10 = $[41];
    }
    let t11;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block",
            children: "Peer Group By"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[42] = t11;
    } else {
        t11 = $[42];
    }
    let t12;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = [
            [
                "region",
                "Region"
            ],
            [
                "income",
                "Income Level"
            ],
            [
                "rec",
                "REC"
            ]
        ];
        $[43] = t12;
    } else {
        t12 = $[43];
    }
    let t13;
    if ($[44] !== peerGroup) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: t12.map({
                        "BenchmarkingPage[(anonymous)()]": (t14)=>{
                            const [key, label] = t14;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "BenchmarkingPage[(anonymous)() > <button>.onClick]": ()=>setPeerGroup(key)
                                }["BenchmarkingPage[(anonymous)() > <button>.onClick]"],
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left", peerGroup === key ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"),
                                children: label
                            }, key, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                                lineNumber: 292,
                                columnNumber: 20
                            }, this);
                        }
                    }["BenchmarkingPage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 289,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[44] = peerGroup;
        $[45] = t13;
    } else {
        t13 = $[45];
    }
    let t14;
    if ($[46] !== t10 || $[47] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full p-4 overflow-y-auto",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t10,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 304,
                    columnNumber: 157
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[46] = t10;
        $[47] = t13;
        $[48] = t14;
    } else {
        t14 = $[48];
    }
    const sidebar = t14;
    let t15;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-slate-900",
                    children: "Benchmarking & Analytics"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 314,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500 mt-1",
                    children: "Compare a country against its peers and regional averages"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 314,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[49] = t15;
    } else {
        t15 = $[49];
    }
    let t16;
    if ($[50] !== selectedCountry.code || $[51] !== selectedCountry.name) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
            code: selectedCountry.code,
            name: selectedCountry.name,
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[50] = selectedCountry.code;
        $[51] = selectedCountry.name;
        $[52] = t16;
    } else {
        t16 = $[52];
    }
    let t17;
    if ($[53] !== selectedCountry.name) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-bold text-slate-900",
            children: selectedCountry.name
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[53] = selectedCountry.name;
        $[54] = t17;
    } else {
        t17 = $[54];
    }
    let t18;
    if ($[55] !== selectedCountry.incomeLevel || $[56] !== selectedCountry.region) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500",
            children: [
                selectedCountry.region,
                " • ",
                selectedCountry.incomeLevel
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[55] = selectedCountry.incomeLevel;
        $[56] = selectedCountry.region;
        $[57] = t18;
    } else {
        t18 = $[57];
    }
    let t19;
    if ($[58] !== t17 || $[59] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[58] = t17;
        $[59] = t18;
        $[60] = t19;
    } else {
        t19 = $[60];
    }
    let t20;
    if ($[61] !== selectedCountry.buildingBlocks) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(selectedCountry.buildingBlocks);
        $[61] = selectedCountry.buildingBlocks;
        $[62] = t20;
    } else {
        t20 = $[62];
    }
    let t21;
    if ($[63] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreBadge"], {
            score: t20,
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[63] = t20;
        $[64] = t21;
    } else {
        t21 = $[64];
    }
    let t22;
    if ($[65] !== t16 || $[66] !== t19 || $[67] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-4",
            children: [
                t16,
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[65] = t16;
        $[66] = t19;
        $[67] = t21;
        $[68] = t22;
    } else {
        t22 = $[68];
    }
    let t23;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wide",
            children: "Africa Rank"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[69] = t23;
    } else {
        t23 = $[69];
    }
    let t24;
    if ($[70] !== selectedCountry.afriHealthRank) {
        t24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRank"])(selectedCountry.afriHealthRank);
        $[70] = selectedCountry.afriHealthRank;
        $[71] = t24;
    } else {
        t24 = $[71];
    }
    let t25;
    if ($[72] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-3 bg-slate-50 rounded-lg",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-orange-500 font-mono-data",
                    children: t24
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 397,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[72] = t24;
        $[73] = t25;
    } else {
        t25 = $[73];
    }
    let t26;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] text-slate-400 uppercase tracking-wide",
            children: "Peer Rank"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[74] = t26;
    } else {
        t26 = $[74];
    }
    let t27;
    if ($[75] !== selectedCountryId) {
        t27 = ({
            "BenchmarkingPage[rankingData.findIndex()]": (r)=>r.country.id === selectedCountryId
        })["BenchmarkingPage[rankingData.findIndex()]"];
        $[75] = selectedCountryId;
        $[76] = t27;
    } else {
        t27 = $[76];
    }
    const t28 = rankingData.findIndex(t27) + 1;
    let t29;
    if ($[77] !== t28) {
        t29 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRank"])(t28);
        $[77] = t28;
        $[78] = t29;
    } else {
        t29 = $[78];
    }
    let t30;
    if ($[79] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-3 bg-slate-50 rounded-lg",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-orange-500 font-mono-data",
                    children: t29
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 431,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[79] = t29;
        $[80] = t30;
    } else {
        t30 = $[80];
    }
    let t31;
    if ($[81] !== t25 || $[82] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 mt-4",
            children: [
                t25,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[81] = t25;
        $[82] = t30;
        $[83] = t31;
    } else {
        t31 = $[83];
    }
    let t32;
    if ($[84] !== t22 || $[85] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-6",
            children: [
                t22,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        $[84] = t22;
        $[85] = t31;
        $[86] = t32;
    } else {
        t32 = $[86];
    }
    let t33;
    if ($[87] !== selectedCountry.name) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2",
            children: [
                selectedCountry.name,
                " vs Peer Average"
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[87] = selectedCountry.name;
        $[88] = t33;
    } else {
        t33 = $[88];
    }
    let t34;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildingBlocks"].map(_BenchmarkingPageBuildingBlocksMap);
        $[89] = t34;
    } else {
        t34 = $[89];
    }
    let t35;
    if ($[90] !== radarCountries) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$RadarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadarChart"], {
            indicators: t34,
            countries: radarCountries
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[90] = radarCountries;
        $[91] = t35;
    } else {
        t35 = $[91];
    }
    let t36;
    if ($[92] !== t33 || $[93] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4",
            children: [
                t33,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[92] = t33;
        $[93] = t35;
        $[94] = t36;
    } else {
        t36 = $[94];
    }
    let t37;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border-b border-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400",
                children: "Peer Rankings"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                lineNumber: 489,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[95] = t37;
    } else {
        t37 = $[95];
    }
    let t38;
    if ($[96] !== rankingData || $[97] !== selectedCountryId) {
        let t39;
        if ($[99] !== selectedCountryId) {
            t39 = ({
                "BenchmarkingPage[rankingData.map()]": (r_0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b border-slate-50", r_0.country.id === selectedCountryId ? "bg-orange-50" : "hover:bg-slate-50"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2.5 font-mono-data text-slate-400 w-8",
                                children: i_0 + 1
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                                lineNumber: 499,
                                columnNumber: 207
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-2 py-2.5 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                        code: r_0.country.code,
                                        name: r_0.country.name
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 335
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", r_0.country.id === selectedCountryId ? "text-orange-700" : "text-slate-700"),
                                        children: r_0.country.name
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 398
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                                lineNumber: 499,
                                columnNumber: 283
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2.5 text-right font-semibold font-mono-data", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreColor"])(r_0.score)),
                                children: r_0.score
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                                lineNumber: 499,
                                columnNumber: 541
                            }, this)
                        ]
                    }, r_0.country.id, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                        lineNumber: 499,
                        columnNumber: 62
                    }, this)
            })["BenchmarkingPage[rankingData.map()]"];
            $[99] = selectedCountryId;
            $[100] = t39;
        } else {
            t39 = $[100];
        }
        t38 = rankingData.map(t39);
        $[96] = rankingData;
        $[97] = selectedCountryId;
        $[98] = t38;
    } else {
        t38 = $[98];
    }
    let t39;
    if ($[101] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-80 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: t38
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                            lineNumber: 515,
                            columnNumber: 179
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                        lineNumber: 515,
                        columnNumber: 145
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 515,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[101] = t38;
        $[102] = t39;
    } else {
        t39 = $[102];
    }
    let t40;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3",
            children: "Gap Analysis"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[103] = t40;
    } else {
        t40 = $[103];
    }
    let t41;
    if ($[104] !== gapAnalysis) {
        t41 = gapAnalysis.map(_BenchmarkingPageGapAnalysisMap);
        $[104] = gapAnalysis;
        $[105] = t41;
    } else {
        t41 = $[105];
    }
    let t42;
    if ($[106] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4",
            children: [
                t40,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: t41
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 538,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 538,
            columnNumber: 11
        }, this);
        $[106] = t41;
        $[107] = t42;
    } else {
        t42 = $[107];
    }
    let t43;
    if ($[108] !== t32 || $[109] !== t36 || $[110] !== t39 || $[111] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [
                t32,
                t36,
                t39,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[108] = t32;
        $[109] = t36;
        $[110] = t39;
        $[111] = t42;
        $[112] = t43;
    } else {
        t43 = $[112];
    }
    let t44;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3",
            children: "Regional Averages"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[113] = t44;
    } else {
        t44 = $[113];
    }
    let t45;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = regionalAverages.map(_BenchmarkingPageRegionalAveragesMap);
        $[114] = t45;
    } else {
        t45 = $[114];
    }
    let t46;
    if ($[115] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4",
            children: [
                t44,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    categories: t45,
                    data: [
                        {
                            name: "Average Score",
                            values: regionalAverages.map(_BenchmarkingPageRegionalAveragesMap2)
                        }
                    ],
                    horizontal: true,
                    height: 250
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 571,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 571,
            columnNumber: 11
        }, this);
        $[115] = t46;
    } else {
        t46 = $[115];
    }
    let t47;
    if ($[116] !== t43) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t15,
                t43,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 581,
            columnNumber: 11
        }, this);
        $[116] = t43;
        $[117] = t47;
    } else {
        t47 = $[117];
    }
    let t48;
    if ($[118] !== sidebar || $[119] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageLayout"], {
            sidebar: sidebar,
            children: t47
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[118] = sidebar;
        $[119] = t47;
        $[120] = t48;
    } else {
        t48 = $[120];
    }
    return t48;
}
_s(BenchmarkingPage, "RDNBAE+YUpgewZztgnfPiP6qfK0=");
_c = BenchmarkingPage;
function _BenchmarkingPageRegionalAveragesMap2(r_2) {
    return r_2.avgScore;
}
function _BenchmarkingPageRegionalAveragesMap(r_1) {
    return r_1.region;
}
function _BenchmarkingPageGapAnalysisMap(g) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-slate-600 w-28 truncate",
                children: g.block
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                lineNumber: 605,
                columnNumber: 65
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 h-2 bg-slate-100 rounded-full relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-2 rounded-full", g.gap >= 0 ? "bg-green-400" : "bg-red-400"),
                    style: {
                        width: `${Math.min(Math.abs(g.gap) + 50, 100)}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                    lineNumber: 605,
                    columnNumber: 199
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                lineNumber: 605,
                columnNumber: 136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-semibold font-mono-data w-12 text-right", g.gap >= 0 ? "text-green-500" : "text-red-500"),
                children: [
                    g.gap > 0 ? "+" : "",
                    g.gap
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
                lineNumber: 607,
                columnNumber: 18
            }, this)
        ]
    }, g.block, true, {
        fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
        lineNumber: 605,
        columnNumber: 10
    }, this);
}
function _BenchmarkingPageBuildingBlocksMap(bb_2) {
    return bb_2.name;
}
function _BenchmarkingPageAllCountriesMap(c_6) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: c_6.id,
        children: c_6.name
    }, c_6.id, false, {
        fileName: "[project]/Developer/planetary-constellation/src/app/benchmarking/page.tsx",
        lineNumber: 613,
        columnNumber: 10
    }, this);
}
function _BenchmarkingPageREGIONSMap(region) {
    const regionCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountriesByRegion"])(region);
    const avgScore = Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["average"])(regionCountries.map(_BenchmarkingPageREGIONSMapRegionCountriesMap)));
    return {
        region,
        avgScore,
        count: regionCountries.length
    };
}
function _BenchmarkingPageREGIONSMapRegionCountriesMap(c_5) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(c_5.buildingBlocks);
}
function _BenchmarkingPageAnonymous(a, b) {
    return b.score - a.score;
}
function _BenchmarkingPageGroupMap(c_4) {
    return {
        country: c_4,
        score: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(c_4.buildingBlocks)
    };
}
var _c;
__turbopack_context__.k.register(_c, "BenchmarkingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = (0, _deploymentid.getDeploymentIdQueryOrEmptyString)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Developer/planetary-constellation/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
]);

//# sourceMappingURL=Developer_planetary-constellation_4120c131._.js.map