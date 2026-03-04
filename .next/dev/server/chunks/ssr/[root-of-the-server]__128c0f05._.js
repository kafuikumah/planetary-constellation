module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "average",
    ()=>average,
    "calculateOverallScore",
    ()=>calculateOverallScore,
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "formatCurrency",
    ()=>formatCurrency,
    "formatNumber",
    ()=>formatNumber,
    "formatPercent",
    ()=>formatPercent,
    "formatPopulation",
    ()=>formatPopulation,
    "formatRank",
    ()=>formatRank,
    "getFlagUrl",
    ()=>getFlagUrl,
    "getImpactColor",
    ()=>getImpactColor,
    "getScoreBg",
    ()=>getScoreBg,
    "getScoreColor",
    ()=>getScoreColor,
    "getScoreHex",
    ()=>getScoreHex,
    "getScoreLabel",
    ()=>getScoreLabel,
    "groupBy",
    ()=>groupBy,
    "sortBy",
    ()=>sortBy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function getScoreColor(score) {
    if (score >= 70) return 'text-green-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
}
function getScoreBg(score) {
    if (score >= 70) return 'bg-green-500';
    if (score >= 50) return 'bg-orange-500';
    return 'bg-red-500';
}
function getScoreHex(score) {
    if (score >= 70) return '#22C55E';
    if (score >= 60) return '#84CC16';
    if (score >= 50) return '#F97316';
    if (score >= 40) return '#EF4444';
    return '#991B1B';
}
function getImpactColor(impact) {
    const map = {
        Low: 'text-red-500',
        Medium: 'text-orange-500',
        High: 'text-green-500'
    };
    return map[impact];
}
function formatNumber(n, decimals = 0) {
    return n.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}
function formatPercent(n) {
    return `${n.toFixed(1)}%`;
}
function formatCurrency(n) {
    return `$${n.toLocaleString('en-US')}`;
}
function formatRank(n) {
    const s = [
        'th',
        'st',
        'nd',
        'rd'
    ];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
function formatPopulation(millions) {
    if (millions >= 1) return `${millions.toFixed(1)}M`;
    return `${(millions * 1000).toFixed(0)}K`;
}
function getFlagUrl(code) {
    return `https://flagcdn.com/w160/${code.toLowerCase()}.png`;
}
function calculateOverallScore(buildingBlocks) {
    const scores = Object.values(buildingBlocks).map((b)=>b.score);
    return Math.round(scores.reduce((a, b)=>a + b, 0) / scores.length);
}
function average(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b)=>a + b, 0) / arr.length;
}
function groupBy(array, key) {
    return array.reduce((result, item)=>{
        const groupKey = String(item[key]);
        if (!result[groupKey]) result[groupKey] = [];
        result[groupKey].push(item);
        return result;
    }, {});
}
function sortBy(array, key, order = 'asc') {
    return [
        ...array
    ].sort((a, b)=>{
        const aVal = a[key];
        const bVal = b[key];
        if (aVal < bVal) return order === 'asc' ? -1 : 1;
        if (aVal > bVal) return order === 'asc' ? 1 : -1;
        return 0;
    });
}
function debounce(fn, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>fn(...args), wait);
    };
}
function getScoreLabel(score) {
    if (score >= 70) return 'Strong';
    if (score >= 60) return 'Good';
    if (score >= 50) return 'Moderate';
    if (score >= 40) return 'Weak';
    return 'Critical';
}
}),
"[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppHeader",
    ()=>AppHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const tabs = [
    {
        label: 'Map View',
        href: '/'
    },
    {
        label: 'Comparison Matrix',
        href: '/comparison'
    },
    {
        label: 'Policies',
        href: '/policies'
    },
    {
        label: 'Benchmarking',
        href: '/benchmarking'
    },
    {
        label: 'Country Profiles',
        href: '/country-profiles'
    },
    {
        label: 'Methodology',
        href: '/methodology'
    },
    {
        label: 'About',
        href: '/about'
    }
];
function AppHeader() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-[60px] mx-4 mt-4 mb-2 flex items-center gap-4 flex-shrink-0 z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[280px] h-full bg-white border border-slate-200 rounded-lg shadow-sm flex items-center px-4 gap-3 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[15px] font-bold font-sans text-slate-900 tracking-tight",
                        children: "Afri Health"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 h-full bg-white border border-slate-200 rounded-lg shadow-sm flex items-center px-10 gap-10 overflow-x-auto",
                children: tabs.map((tab)=>{
                    const isActive = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: tab.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-full flex items-center text-sm font-medium transition-all whitespace-nowrap border-b-[3px]', isActive ? 'text-[#606060] border-[#606060]' : 'text-[#A2A2A2] border-transparent hover:text-slate-600'),
                        children: tab.label
                    }, tab.href, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx",
                        lineNumber: 36,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/data/countries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countries",
    ()=>countries,
    "getAllCountriesAlphabetical",
    ()=>getAllCountriesAlphabetical,
    "getCountriesByRec",
    ()=>getCountriesByRec,
    "getCountriesByRegion",
    ()=>getCountriesByRegion,
    "getCountryById",
    ()=>getCountryById,
    "searchCountries",
    ()=>searchCountries
]);
function bb(score, trend, extra = {}) {
    return {
        score,
        trend,
        indicators: extra
    };
}
const countries = [
    {
        id: 'dza',
        name: 'Algeria',
        code: 'dz',
        region: 'North Africa',
        rec: 'UMA',
        incomeLevel: 'Upper-middle',
        population: 45.6,
        healthBudgetPercent: 7.2,
        healthGdpPercent: 6.3,
        debtServiceRatio: 2.1,
        healthExpPerCapita: 274,
        afriHealthRank: 10,
        totalCases: 312000,
        buildingBlocks: {
            service: bb(72, 'up', {
                coverage: 74
            }),
            workforce: bb(68, 'stable', {
                density: 1.8
            }),
            info: bb(65, 'up', {
                completeness: 70
            }),
            financing: bb(70, 'stable', {
                pooling: 68
            }),
            medicines: bb(66, 'stable', {
                availability: 62
            }),
            governance: bb(71, 'up', {
                accountability: 72
            })
        }
    },
    {
        id: 'ago',
        name: 'Angola',
        code: 'ao',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Lower-middle',
        population: 35.6,
        healthBudgetPercent: 3.8,
        healthGdpPercent: 2.9,
        debtServiceRatio: 22.5,
        healthExpPerCapita: 68,
        afriHealthRank: 42,
        totalCases: 156000,
        buildingBlocks: {
            service: bb(38, 'down', {
                coverage: 34
            }),
            workforce: bb(30, 'down', {
                density: 0.4
            }),
            info: bb(35, 'stable', {
                completeness: 32
            }),
            financing: bb(32, 'down', {
                pooling: 28
            }),
            medicines: bb(36, 'stable', {
                availability: 30
            }),
            governance: bb(40, 'stable', {
                accountability: 38
            })
        }
    },
    {
        id: 'ben',
        name: 'Benin',
        code: 'bj',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Lower-middle',
        population: 13.4,
        healthBudgetPercent: 4.5,
        healthGdpPercent: 3.8,
        debtServiceRatio: 6.2,
        healthExpPerCapita: 42,
        afriHealthRank: 35,
        totalCases: 89000,
        buildingBlocks: {
            service: bb(48, 'up', {
                coverage: 45
            }),
            workforce: bb(42, 'stable', {
                density: 0.6
            }),
            info: bb(44, 'up', {
                completeness: 42
            }),
            financing: bb(46, 'up', {
                pooling: 40
            }),
            medicines: bb(40, 'stable', {
                availability: 38
            }),
            governance: bb(50, 'up', {
                accountability: 48
            })
        }
    },
    {
        id: 'bwa',
        name: 'Botswana',
        code: 'bw',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Upper-middle',
        population: 2.6,
        healthBudgetPercent: 9.2,
        healthGdpPercent: 6.1,
        debtServiceRatio: 3.1,
        healthExpPerCapita: 442,
        afriHealthRank: 6,
        totalCases: 45000,
        buildingBlocks: {
            service: bb(76, 'up', {
                coverage: 78
            }),
            workforce: bb(72, 'up', {
                density: 2.8
            }),
            info: bb(70, 'up', {
                completeness: 74
            }),
            financing: bb(78, 'stable', {
                pooling: 76
            }),
            medicines: bb(74, 'up', {
                availability: 72
            }),
            governance: bb(80, 'up', {
                accountability: 82
            })
        }
    },
    {
        id: 'bfa',
        name: 'Burkina Faso',
        code: 'bf',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 22.7,
        healthBudgetPercent: 5.1,
        healthGdpPercent: 5.4,
        debtServiceRatio: 4.8,
        healthExpPerCapita: 44,
        afriHealthRank: 38,
        totalCases: 112000,
        buildingBlocks: {
            service: bb(42, 'stable', {
                coverage: 40
            }),
            workforce: bb(35, 'down', {
                density: 0.5
            }),
            info: bb(40, 'up', {
                completeness: 38
            }),
            financing: bb(44, 'stable', {
                pooling: 42
            }),
            medicines: bb(38, 'stable', {
                availability: 36
            }),
            governance: bb(46, 'up', {
                accountability: 44
            })
        }
    },
    {
        id: 'bdi',
        name: 'Burundi',
        code: 'bi',
        region: 'East Africa',
        rec: 'EAC',
        incomeLevel: 'Low',
        population: 13.2,
        healthBudgetPercent: 6.8,
        healthGdpPercent: 7.5,
        debtServiceRatio: 3.9,
        healthExpPerCapita: 22,
        afriHealthRank: 44,
        totalCases: 78000,
        buildingBlocks: {
            service: bb(36, 'stable', {
                coverage: 35
            }),
            workforce: bb(28, 'down', {
                density: 0.3
            }),
            info: bb(32, 'stable', {
                completeness: 30
            }),
            financing: bb(40, 'up', {
                pooling: 38
            }),
            medicines: bb(30, 'down', {
                availability: 28
            }),
            governance: bb(38, 'stable', {
                accountability: 36
            })
        }
    },
    {
        id: 'cmr',
        name: 'Cameroon',
        code: 'cm',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Lower-middle',
        population: 28.6,
        healthBudgetPercent: 4.2,
        healthGdpPercent: 3.5,
        debtServiceRatio: 9.8,
        healthExpPerCapita: 58,
        afriHealthRank: 32,
        totalCases: 165000,
        buildingBlocks: {
            service: bb(50, 'stable', {
                coverage: 48
            }),
            workforce: bb(44, 'stable', {
                density: 0.8
            }),
            info: bb(46, 'up', {
                completeness: 44
            }),
            financing: bb(42, 'down', {
                pooling: 40
            }),
            medicines: bb(48, 'stable', {
                availability: 46
            }),
            governance: bb(52, 'up', {
                accountability: 50
            })
        }
    },
    {
        id: 'cpv',
        name: 'Cabo Verde',
        code: 'cv',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Lower-middle',
        population: 0.6,
        healthBudgetPercent: 8.4,
        healthGdpPercent: 5.6,
        debtServiceRatio: 7.2,
        healthExpPerCapita: 196,
        afriHealthRank: 8,
        totalCases: 12000,
        buildingBlocks: {
            service: bb(74, 'up', {
                coverage: 76
            }),
            workforce: bb(70, 'up', {
                density: 2.6
            }),
            info: bb(68, 'up', {
                completeness: 72
            }),
            financing: bb(72, 'stable', {
                pooling: 70
            }),
            medicines: bb(70, 'up', {
                availability: 68
            }),
            governance: bb(76, 'up', {
                accountability: 78
            })
        }
    },
    {
        id: 'caf',
        name: 'Central African Republic',
        code: 'cf',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Low',
        population: 5.5,
        healthBudgetPercent: 4.0,
        healthGdpPercent: 9.2,
        debtServiceRatio: 2.5,
        healthExpPerCapita: 18,
        afriHealthRank: 53,
        totalCases: 52000,
        buildingBlocks: {
            service: bb(22, 'down', {
                coverage: 20
            }),
            workforce: bb(18, 'down', {
                density: 0.1
            }),
            info: bb(20, 'down', {
                completeness: 18
            }),
            financing: bb(24, 'stable', {
                pooling: 22
            }),
            medicines: bb(20, 'down', {
                availability: 18
            }),
            governance: bb(26, 'stable', {
                accountability: 24
            })
        }
    },
    {
        id: 'tcd',
        name: 'Chad',
        code: 'td',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Low',
        population: 17.7,
        healthBudgetPercent: 4.6,
        healthGdpPercent: 4.2,
        debtServiceRatio: 5.8,
        healthExpPerCapita: 24,
        afriHealthRank: 51,
        totalCases: 67000,
        buildingBlocks: {
            service: bb(26, 'down', {
                coverage: 24
            }),
            workforce: bb(20, 'down', {
                density: 0.2
            }),
            info: bb(24, 'stable', {
                completeness: 22
            }),
            financing: bb(28, 'stable', {
                pooling: 26
            }),
            medicines: bb(22, 'down', {
                availability: 20
            }),
            governance: bb(30, 'stable', {
                accountability: 28
            })
        }
    },
    {
        id: 'com',
        name: 'Comoros',
        code: 'km',
        region: 'East Africa',
        rec: 'COMESA',
        incomeLevel: 'Lower-middle',
        population: 0.9,
        healthBudgetPercent: 5.6,
        healthGdpPercent: 5.8,
        debtServiceRatio: 3.4,
        healthExpPerCapita: 56,
        afriHealthRank: 40,
        totalCases: 8000,
        buildingBlocks: {
            service: bb(40, 'stable', {
                coverage: 38
            }),
            workforce: bb(36, 'stable', {
                density: 0.5
            }),
            info: bb(38, 'up', {
                completeness: 36
            }),
            financing: bb(42, 'up', {
                pooling: 40
            }),
            medicines: bb(34, 'stable', {
                availability: 32
            }),
            governance: bb(44, 'up', {
                accountability: 42
            })
        }
    },
    {
        id: 'cod',
        name: 'DR Congo',
        code: 'cd',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Low',
        population: 102.3,
        healthBudgetPercent: 3.6,
        healthGdpPercent: 3.9,
        debtServiceRatio: 4.2,
        healthExpPerCapita: 20,
        afriHealthRank: 48,
        totalCases: 424000,
        buildingBlocks: {
            service: bb(30, 'down', {
                coverage: 28
            }),
            workforce: bb(24, 'down', {
                density: 0.3
            }),
            info: bb(28, 'stable', {
                completeness: 26
            }),
            financing: bb(26, 'down', {
                pooling: 24
            }),
            medicines: bb(28, 'stable', {
                availability: 26
            }),
            governance: bb(32, 'stable', {
                accountability: 30
            })
        }
    },
    {
        id: 'cog',
        name: 'Republic of Congo',
        code: 'cg',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Lower-middle',
        population: 6.0,
        healthBudgetPercent: 4.4,
        healthGdpPercent: 3.6,
        debtServiceRatio: 12.4,
        healthExpPerCapita: 52,
        afriHealthRank: 39,
        totalCases: 34000,
        buildingBlocks: {
            service: bb(42, 'stable', {
                coverage: 40
            }),
            workforce: bb(34, 'down', {
                density: 0.5
            }),
            info: bb(36, 'stable', {
                completeness: 34
            }),
            financing: bb(38, 'down', {
                pooling: 36
            }),
            medicines: bb(40, 'stable', {
                availability: 38
            }),
            governance: bb(44, 'stable', {
                accountability: 42
            })
        }
    },
    {
        id: 'civ',
        name: "Côte d'Ivoire",
        code: 'ci',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Lower-middle',
        population: 28.2,
        healthBudgetPercent: 5.0,
        healthGdpPercent: 3.6,
        debtServiceRatio: 8.4,
        healthExpPerCapita: 72,
        afriHealthRank: 28,
        totalCases: 198000,
        buildingBlocks: {
            service: bb(54, 'up', {
                coverage: 52
            }),
            workforce: bb(46, 'stable', {
                density: 0.7
            }),
            info: bb(50, 'up', {
                completeness: 48
            }),
            financing: bb(48, 'stable', {
                pooling: 46
            }),
            medicines: bb(52, 'up', {
                availability: 50
            }),
            governance: bb(56, 'up', {
                accountability: 54
            })
        }
    },
    {
        id: 'dji',
        name: 'Djibouti',
        code: 'dj',
        region: 'East Africa',
        rec: 'IGAD',
        incomeLevel: 'Lower-middle',
        population: 1.1,
        healthBudgetPercent: 5.8,
        healthGdpPercent: 4.2,
        debtServiceRatio: 6.6,
        healthExpPerCapita: 68,
        afriHealthRank: 33,
        totalCases: 15000,
        buildingBlocks: {
            service: bb(50, 'up', {
                coverage: 48
            }),
            workforce: bb(42, 'stable', {
                density: 0.6
            }),
            info: bb(44, 'up', {
                completeness: 42
            }),
            financing: bb(48, 'stable', {
                pooling: 46
            }),
            medicines: bb(46, 'stable', {
                availability: 44
            }),
            governance: bb(52, 'up', {
                accountability: 50
            })
        }
    },
    {
        id: 'egy',
        name: 'Egypt',
        code: 'eg',
        region: 'North Africa',
        rec: 'COMESA',
        incomeLevel: 'Lower-middle',
        population: 109.3,
        healthBudgetPercent: 4.8,
        healthGdpPercent: 4.6,
        debtServiceRatio: 32.6,
        healthExpPerCapita: 156,
        afriHealthRank: 14,
        totalCases: 567000,
        buildingBlocks: {
            service: bb(66, 'up', {
                coverage: 68
            }),
            workforce: bb(62, 'stable', {
                density: 1.6
            }),
            info: bb(60, 'up', {
                completeness: 64
            }),
            financing: bb(58, 'down', {
                pooling: 56
            }),
            medicines: bb(64, 'stable', {
                availability: 62
            }),
            governance: bb(62, 'stable', {
                accountability: 60
            })
        }
    },
    {
        id: 'gnq',
        name: 'Equatorial Guinea',
        code: 'gq',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Upper-middle',
        population: 1.7,
        healthBudgetPercent: 3.2,
        healthGdpPercent: 2.8,
        debtServiceRatio: 8.6,
        healthExpPerCapita: 182,
        afriHealthRank: 36,
        totalCases: 18000,
        buildingBlocks: {
            service: bb(44, 'stable', {
                coverage: 42
            }),
            workforce: bb(38, 'stable', {
                density: 0.5
            }),
            info: bb(40, 'stable', {
                completeness: 38
            }),
            financing: bb(46, 'up', {
                pooling: 44
            }),
            medicines: bb(42, 'stable', {
                availability: 40
            }),
            governance: bb(42, 'down', {
                accountability: 40
            })
        }
    },
    {
        id: 'eri',
        name: 'Eritrea',
        code: 'er',
        region: 'East Africa',
        rec: 'IGAD',
        incomeLevel: 'Low',
        population: 3.7,
        healthBudgetPercent: 3.4,
        healthGdpPercent: 4.6,
        debtServiceRatio: 0.0,
        healthExpPerCapita: 16,
        afriHealthRank: 46,
        totalCases: 22000,
        buildingBlocks: {
            service: bb(34, 'stable', {
                coverage: 32
            }),
            workforce: bb(26, 'down', {
                density: 0.2
            }),
            info: bb(30, 'down', {
                completeness: 28
            }),
            financing: bb(36, 'stable', {
                pooling: 34
            }),
            medicines: bb(28, 'down', {
                availability: 26
            }),
            governance: bb(32, 'down', {
                accountability: 30
            })
        }
    },
    {
        id: 'swz',
        name: 'Eswatini',
        code: 'sz',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Lower-middle',
        population: 1.2,
        healthBudgetPercent: 7.8,
        healthGdpPercent: 7.2,
        debtServiceRatio: 4.8,
        healthExpPerCapita: 236,
        afriHealthRank: 16,
        totalCases: 14000,
        buildingBlocks: {
            service: bb(62, 'up', {
                coverage: 64
            }),
            workforce: bb(58, 'stable', {
                density: 1.4
            }),
            info: bb(60, 'up', {
                completeness: 62
            }),
            financing: bb(64, 'up', {
                pooling: 62
            }),
            medicines: bb(56, 'stable', {
                availability: 54
            }),
            governance: bb(66, 'up', {
                accountability: 64
            })
        }
    },
    {
        id: 'eth',
        name: 'Ethiopia',
        code: 'et',
        region: 'East Africa',
        rec: 'IGAD',
        incomeLevel: 'Low',
        population: 126.5,
        healthBudgetPercent: 7.4,
        healthGdpPercent: 3.5,
        debtServiceRatio: 12.8,
        healthExpPerCapita: 26,
        afriHealthRank: 30,
        totalCases: 534000,
        buildingBlocks: {
            service: bb(52, 'up', {
                coverage: 50
            }),
            workforce: bb(44, 'up', {
                density: 0.6
            }),
            info: bb(48, 'up', {
                completeness: 46
            }),
            financing: bb(46, 'stable', {
                pooling: 44
            }),
            medicines: bb(44, 'up', {
                availability: 42
            }),
            governance: bb(56, 'up', {
                accountability: 54
            })
        }
    },
    {
        id: 'gab',
        name: 'Gabon',
        code: 'ga',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Upper-middle',
        population: 2.4,
        healthBudgetPercent: 5.8,
        healthGdpPercent: 3.2,
        debtServiceRatio: 14.6,
        healthExpPerCapita: 214,
        afriHealthRank: 22,
        totalCases: 28000,
        buildingBlocks: {
            service: bb(58, 'stable', {
                coverage: 56
            }),
            workforce: bb(52, 'stable', {
                density: 1.2
            }),
            info: bb(54, 'up', {
                completeness: 52
            }),
            financing: bb(50, 'down', {
                pooling: 48
            }),
            medicines: bb(56, 'stable', {
                availability: 54
            }),
            governance: bb(54, 'stable', {
                accountability: 52
            })
        }
    },
    {
        id: 'gmb',
        name: 'Gambia',
        code: 'gm',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 2.7,
        healthBudgetPercent: 6.2,
        healthGdpPercent: 4.8,
        debtServiceRatio: 8.2,
        healthExpPerCapita: 24,
        afriHealthRank: 37,
        totalCases: 18000,
        buildingBlocks: {
            service: bb(46, 'up', {
                coverage: 44
            }),
            workforce: bb(38, 'stable', {
                density: 0.4
            }),
            info: bb(42, 'up', {
                completeness: 40
            }),
            financing: bb(40, 'stable', {
                pooling: 38
            }),
            medicines: bb(44, 'up', {
                availability: 42
            }),
            governance: bb(48, 'up', {
                accountability: 46
            })
        }
    },
    {
        id: 'gha',
        name: 'Ghana',
        code: 'gh',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Lower-middle',
        population: 33.5,
        healthBudgetPercent: 6.4,
        healthGdpPercent: 3.4,
        debtServiceRatio: 18.4,
        healthExpPerCapita: 82,
        afriHealthRank: 15,
        totalCases: 234000,
        buildingBlocks: {
            service: bb(64, 'up', {
                coverage: 66
            }),
            workforce: bb(60, 'up', {
                density: 1.4
            }),
            info: bb(62, 'up', {
                completeness: 64
            }),
            financing: bb(58, 'stable', {
                pooling: 56
            }),
            medicines: bb(62, 'up', {
                availability: 60
            }),
            governance: bb(68, 'up', {
                accountability: 66
            })
        }
    },
    {
        id: 'gin',
        name: 'Guinea',
        code: 'gn',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 14.2,
        healthBudgetPercent: 4.2,
        healthGdpPercent: 4.0,
        debtServiceRatio: 7.6,
        healthExpPerCapita: 34,
        afriHealthRank: 43,
        totalCases: 92000,
        buildingBlocks: {
            service: bb(36, 'stable', {
                coverage: 34
            }),
            workforce: bb(30, 'down', {
                density: 0.3
            }),
            info: bb(34, 'stable', {
                completeness: 32
            }),
            financing: bb(38, 'stable', {
                pooling: 36
            }),
            medicines: bb(32, 'down', {
                availability: 30
            }),
            governance: bb(40, 'stable', {
                accountability: 38
            })
        }
    },
    {
        id: 'gnb',
        name: 'Guinea-Bissau',
        code: 'gw',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 2.1,
        healthBudgetPercent: 5.4,
        healthGdpPercent: 6.8,
        debtServiceRatio: 3.4,
        healthExpPerCapita: 38,
        afriHealthRank: 47,
        totalCases: 14000,
        buildingBlocks: {
            service: bb(32, 'down', {
                coverage: 30
            }),
            workforce: bb(24, 'down', {
                density: 0.2
            }),
            info: bb(28, 'stable', {
                completeness: 26
            }),
            financing: bb(34, 'stable', {
                pooling: 32
            }),
            medicines: bb(26, 'down', {
                availability: 24
            }),
            governance: bb(36, 'stable', {
                accountability: 34
            })
        }
    },
    {
        id: 'ken',
        name: 'Kenya',
        code: 'ke',
        region: 'East Africa',
        rec: 'EAC',
        incomeLevel: 'Lower-middle',
        population: 54.0,
        healthBudgetPercent: 6.8,
        healthGdpPercent: 4.6,
        debtServiceRatio: 22.8,
        healthExpPerCapita: 88,
        afriHealthRank: 13,
        totalCases: 345000,
        buildingBlocks: {
            service: bb(66, 'up', {
                coverage: 68
            }),
            workforce: bb(60, 'up', {
                density: 1.6
            }),
            info: bb(64, 'up', {
                completeness: 66
            }),
            financing: bb(58, 'stable', {
                pooling: 56
            }),
            medicines: bb(62, 'up', {
                availability: 60
            }),
            governance: bb(68, 'up', {
                accountability: 66
            })
        }
    },
    {
        id: 'lso',
        name: 'Lesotho',
        code: 'ls',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Lower-middle',
        population: 2.3,
        healthBudgetPercent: 8.6,
        healthGdpPercent: 8.8,
        debtServiceRatio: 5.6,
        healthExpPerCapita: 92,
        afriHealthRank: 29,
        totalCases: 16000,
        buildingBlocks: {
            service: bb(52, 'stable', {
                coverage: 50
            }),
            workforce: bb(46, 'stable', {
                density: 0.8
            }),
            info: bb(48, 'up', {
                completeness: 46
            }),
            financing: bb(54, 'up', {
                pooling: 52
            }),
            medicines: bb(44, 'stable', {
                availability: 42
            }),
            governance: bb(50, 'stable', {
                accountability: 48
            })
        }
    },
    {
        id: 'lbr',
        name: 'Liberia',
        code: 'lr',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 5.4,
        healthBudgetPercent: 5.8,
        healthGdpPercent: 8.6,
        debtServiceRatio: 3.2,
        healthExpPerCapita: 46,
        afriHealthRank: 45,
        totalCases: 34000,
        buildingBlocks: {
            service: bb(34, 'up', {
                coverage: 32
            }),
            workforce: bb(28, 'stable', {
                density: 0.3
            }),
            info: bb(30, 'up', {
                completeness: 28
            }),
            financing: bb(36, 'up', {
                pooling: 34
            }),
            medicines: bb(30, 'stable', {
                availability: 28
            }),
            governance: bb(38, 'up', {
                accountability: 36
            })
        }
    },
    {
        id: 'lby',
        name: 'Libya',
        code: 'ly',
        region: 'North Africa',
        rec: 'UMA',
        incomeLevel: 'Upper-middle',
        population: 7.0,
        healthBudgetPercent: 5.6,
        healthGdpPercent: 5.2,
        debtServiceRatio: 0.0,
        healthExpPerCapita: 186,
        afriHealthRank: 24,
        totalCases: 56000,
        buildingBlocks: {
            service: bb(56, 'down', {
                coverage: 54
            }),
            workforce: bb(50, 'down', {
                density: 1.1
            }),
            info: bb(48, 'down', {
                completeness: 46
            }),
            financing: bb(54, 'stable', {
                pooling: 52
            }),
            medicines: bb(52, 'down', {
                availability: 50
            }),
            governance: bb(44, 'down', {
                accountability: 42
            })
        }
    },
    {
        id: 'mdg',
        name: 'Madagascar',
        code: 'mg',
        region: 'East Africa',
        rec: 'COMESA',
        incomeLevel: 'Low',
        population: 30.3,
        healthBudgetPercent: 5.2,
        healthGdpPercent: 4.6,
        debtServiceRatio: 4.8,
        healthExpPerCapita: 22,
        afriHealthRank: 41,
        totalCases: 178000,
        buildingBlocks: {
            service: bb(38, 'stable', {
                coverage: 36
            }),
            workforce: bb(32, 'down', {
                density: 0.4
            }),
            info: bb(36, 'up', {
                completeness: 34
            }),
            financing: bb(40, 'stable', {
                pooling: 38
            }),
            medicines: bb(34, 'stable', {
                availability: 32
            }),
            governance: bb(42, 'up', {
                accountability: 40
            })
        }
    },
    {
        id: 'mwi',
        name: 'Malawi',
        code: 'mw',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Low',
        population: 20.4,
        healthBudgetPercent: 7.6,
        healthGdpPercent: 7.8,
        debtServiceRatio: 5.6,
        healthExpPerCapita: 28,
        afriHealthRank: 31,
        totalCases: 134000,
        buildingBlocks: {
            service: bb(52, 'up', {
                coverage: 50
            }),
            workforce: bb(44, 'stable', {
                density: 0.5
            }),
            info: bb(48, 'up', {
                completeness: 46
            }),
            financing: bb(50, 'up', {
                pooling: 48
            }),
            medicines: bb(42, 'stable', {
                availability: 40
            }),
            governance: bb(54, 'up', {
                accountability: 52
            })
        }
    },
    {
        id: 'mli',
        name: 'Mali',
        code: 'ml',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 22.4,
        healthBudgetPercent: 4.8,
        healthGdpPercent: 3.8,
        debtServiceRatio: 6.4,
        healthExpPerCapita: 32,
        afriHealthRank: 43,
        totalCases: 124000,
        buildingBlocks: {
            service: bb(36, 'stable', {
                coverage: 34
            }),
            workforce: bb(30, 'down', {
                density: 0.3
            }),
            info: bb(34, 'stable', {
                completeness: 32
            }),
            financing: bb(38, 'stable', {
                pooling: 36
            }),
            medicines: bb(32, 'down', {
                availability: 30
            }),
            governance: bb(40, 'stable', {
                accountability: 38
            })
        }
    },
    {
        id: 'mrt',
        name: 'Mauritania',
        code: 'mr',
        region: 'West Africa',
        rec: 'UMA',
        incomeLevel: 'Lower-middle',
        population: 4.9,
        healthBudgetPercent: 4.6,
        healthGdpPercent: 4.2,
        debtServiceRatio: 10.2,
        healthExpPerCapita: 52,
        afriHealthRank: 34,
        totalCases: 32000,
        buildingBlocks: {
            service: bb(48, 'stable', {
                coverage: 46
            }),
            workforce: bb(40, 'stable', {
                density: 0.5
            }),
            info: bb(42, 'up', {
                completeness: 40
            }),
            financing: bb(44, 'stable', {
                pooling: 42
            }),
            medicines: bb(42, 'stable', {
                availability: 40
            }),
            governance: bb(46, 'stable', {
                accountability: 44
            })
        }
    },
    {
        id: 'mus',
        name: 'Mauritius',
        code: 'mu',
        region: 'East Africa',
        rec: 'SADC',
        incomeLevel: 'Upper-middle',
        population: 1.3,
        healthBudgetPercent: 9.8,
        healthGdpPercent: 6.4,
        debtServiceRatio: 6.2,
        healthExpPerCapita: 586,
        afriHealthRank: 2,
        totalCases: 18000,
        buildingBlocks: {
            service: bb(84, 'up', {
                coverage: 86
            }),
            workforce: bb(80, 'up', {
                density: 3.6
            }),
            info: bb(78, 'up', {
                completeness: 82
            }),
            financing: bb(82, 'stable', {
                pooling: 80
            }),
            medicines: bb(80, 'up', {
                availability: 78
            }),
            governance: bb(86, 'up', {
                accountability: 88
            })
        }
    },
    {
        id: 'mar',
        name: 'Morocco',
        code: 'ma',
        region: 'North Africa',
        rec: 'UMA',
        incomeLevel: 'Lower-middle',
        population: 37.5,
        healthBudgetPercent: 6.2,
        healthGdpPercent: 5.8,
        debtServiceRatio: 12.6,
        healthExpPerCapita: 178,
        afriHealthRank: 11,
        totalCases: 267000,
        buildingBlocks: {
            service: bb(70, 'up', {
                coverage: 72
            }),
            workforce: bb(66, 'up', {
                density: 1.7
            }),
            info: bb(64, 'up', {
                completeness: 68
            }),
            financing: bb(68, 'stable', {
                pooling: 66
            }),
            medicines: bb(66, 'up', {
                availability: 64
            }),
            governance: bb(72, 'up', {
                accountability: 70
            })
        }
    },
    {
        id: 'moz',
        name: 'Mozambique',
        code: 'mz',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Low',
        population: 33.9,
        healthBudgetPercent: 5.4,
        healthGdpPercent: 5.2,
        debtServiceRatio: 14.2,
        healthExpPerCapita: 22,
        afriHealthRank: 46,
        totalCases: 198000,
        buildingBlocks: {
            service: bb(34, 'stable', {
                coverage: 32
            }),
            workforce: bb(28, 'down', {
                density: 0.3
            }),
            info: bb(32, 'up', {
                completeness: 30
            }),
            financing: bb(36, 'stable', {
                pooling: 34
            }),
            medicines: bb(30, 'down', {
                availability: 28
            }),
            governance: bb(38, 'stable', {
                accountability: 36
            })
        }
    },
    {
        id: 'nam',
        name: 'Namibia',
        code: 'na',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Upper-middle',
        population: 2.6,
        healthBudgetPercent: 8.8,
        healthGdpPercent: 8.2,
        debtServiceRatio: 4.4,
        healthExpPerCapita: 396,
        afriHealthRank: 9,
        totalCases: 22000,
        buildingBlocks: {
            service: bb(72, 'up', {
                coverage: 74
            }),
            workforce: bb(68, 'up', {
                density: 2.4
            }),
            info: bb(66, 'up', {
                completeness: 70
            }),
            financing: bb(74, 'up', {
                pooling: 72
            }),
            medicines: bb(70, 'up', {
                availability: 68
            }),
            governance: bb(76, 'up', {
                accountability: 74
            })
        }
    },
    {
        id: 'ner',
        name: 'Niger',
        code: 'ne',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 26.2,
        healthBudgetPercent: 5.8,
        healthGdpPercent: 6.2,
        debtServiceRatio: 3.8,
        healthExpPerCapita: 20,
        afriHealthRank: 50,
        totalCases: 156000,
        buildingBlocks: {
            service: bb(28, 'stable', {
                coverage: 26
            }),
            workforce: bb(22, 'down', {
                density: 0.2
            }),
            info: bb(26, 'stable', {
                completeness: 24
            }),
            financing: bb(30, 'stable', {
                pooling: 28
            }),
            medicines: bb(24, 'down', {
                availability: 22
            }),
            governance: bb(32, 'stable', {
                accountability: 30
            })
        }
    },
    {
        id: 'nga',
        name: 'Nigeria',
        code: 'ng',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Lower-middle',
        population: 224.0,
        healthBudgetPercent: 4.2,
        healthGdpPercent: 3.4,
        debtServiceRatio: 28.6,
        healthExpPerCapita: 54,
        afriHealthRank: 20,
        totalCases: 895000,
        buildingBlocks: {
            service: bb(56, 'up', {
                coverage: 54
            }),
            workforce: bb(50, 'stable', {
                density: 0.8
            }),
            info: bb(52, 'up', {
                completeness: 50
            }),
            financing: bb(44, 'down', {
                pooling: 42
            }),
            medicines: bb(54, 'stable', {
                availability: 52
            }),
            governance: bb(58, 'up', {
                accountability: 56
            })
        }
    },
    {
        id: 'rwa',
        name: 'Rwanda',
        code: 'rw',
        region: 'East Africa',
        rec: 'EAC',
        incomeLevel: 'Low',
        population: 13.8,
        healthBudgetPercent: 9.6,
        healthGdpPercent: 7.4,
        debtServiceRatio: 8.2,
        healthExpPerCapita: 62,
        afriHealthRank: 7,
        totalCases: 78000,
        buildingBlocks: {
            service: bb(76, 'up', {
                coverage: 78
            }),
            workforce: bb(70, 'up', {
                density: 1.2
            }),
            info: bb(74, 'up', {
                completeness: 76
            }),
            financing: bb(72, 'up', {
                pooling: 70
            }),
            medicines: bb(68, 'up', {
                availability: 66
            }),
            governance: bb(82, 'up', {
                accountability: 84
            })
        }
    },
    {
        id: 'stp',
        name: 'São Tomé and Príncipe',
        code: 'st',
        region: 'Central Africa',
        rec: 'ECCAS',
        incomeLevel: 'Lower-middle',
        population: 0.2,
        healthBudgetPercent: 7.2,
        healthGdpPercent: 6.4,
        debtServiceRatio: 5.4,
        healthExpPerCapita: 108,
        afriHealthRank: 26,
        totalCases: 4000,
        buildingBlocks: {
            service: bb(56, 'up', {
                coverage: 54
            }),
            workforce: bb(48, 'stable', {
                density: 0.8
            }),
            info: bb(50, 'up', {
                completeness: 48
            }),
            financing: bb(54, 'up', {
                pooling: 52
            }),
            medicines: bb(52, 'stable', {
                availability: 50
            }),
            governance: bb(58, 'up', {
                accountability: 56
            })
        }
    },
    {
        id: 'sen',
        name: 'Senegal',
        code: 'sn',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Lower-middle',
        population: 17.7,
        healthBudgetPercent: 5.6,
        healthGdpPercent: 4.2,
        debtServiceRatio: 14.8,
        healthExpPerCapita: 52,
        afriHealthRank: 21,
        totalCases: 112000,
        buildingBlocks: {
            service: bb(58, 'up', {
                coverage: 56
            }),
            workforce: bb(52, 'up', {
                density: 0.9
            }),
            info: bb(54, 'up', {
                completeness: 52
            }),
            financing: bb(50, 'stable', {
                pooling: 48
            }),
            medicines: bb(56, 'up', {
                availability: 54
            }),
            governance: bb(62, 'up', {
                accountability: 60
            })
        }
    },
    {
        id: 'syc',
        name: 'Seychelles',
        code: 'sc',
        region: 'East Africa',
        rec: 'SADC',
        incomeLevel: 'High',
        population: 0.1,
        healthBudgetPercent: 10.4,
        healthGdpPercent: 5.2,
        debtServiceRatio: 8.6,
        healthExpPerCapita: 924,
        afriHealthRank: 1,
        totalCases: 6000,
        buildingBlocks: {
            service: bb(88, 'up', {
                coverage: 90
            }),
            workforce: bb(84, 'up', {
                density: 4.2
            }),
            info: bb(82, 'up', {
                completeness: 86
            }),
            financing: bb(86, 'stable', {
                pooling: 84
            }),
            medicines: bb(84, 'up', {
                availability: 82
            }),
            governance: bb(90, 'up', {
                accountability: 92
            })
        }
    },
    {
        id: 'sle',
        name: 'Sierra Leone',
        code: 'sl',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 8.6,
        healthBudgetPercent: 7.4,
        healthGdpPercent: 8.8,
        debtServiceRatio: 6.2,
        healthExpPerCapita: 42,
        afriHealthRank: 49,
        totalCases: 56000,
        buildingBlocks: {
            service: bb(28, 'up', {
                coverage: 26
            }),
            workforce: bb(22, 'stable', {
                density: 0.2
            }),
            info: bb(26, 'up', {
                completeness: 24
            }),
            financing: bb(30, 'up', {
                pooling: 28
            }),
            medicines: bb(24, 'stable', {
                availability: 22
            }),
            governance: bb(34, 'up', {
                accountability: 32
            })
        }
    },
    {
        id: 'som',
        name: 'Somalia',
        code: 'so',
        region: 'East Africa',
        rec: 'IGAD',
        incomeLevel: 'Low',
        population: 18.1,
        healthBudgetPercent: 2.0,
        healthGdpPercent: 1.4,
        debtServiceRatio: 0.0,
        healthExpPerCapita: 8,
        afriHealthRank: 54,
        totalCases: 82000,
        buildingBlocks: {
            service: bb(18, 'down', {
                coverage: 16
            }),
            workforce: bb(14, 'down', {
                density: 0.1
            }),
            info: bb(16, 'down', {
                completeness: 14
            }),
            financing: bb(20, 'stable', {
                pooling: 18
            }),
            medicines: bb(16, 'down', {
                availability: 14
            }),
            governance: bb(22, 'down', {
                accountability: 20
            })
        }
    },
    {
        id: 'zaf',
        name: 'South Africa',
        code: 'za',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Upper-middle',
        population: 60.4,
        healthBudgetPercent: 8.6,
        healthGdpPercent: 8.4,
        debtServiceRatio: 18.6,
        healthExpPerCapita: 468,
        afriHealthRank: 4,
        totalCases: 567000,
        buildingBlocks: {
            service: bb(78, 'up', {
                coverage: 80
            }),
            workforce: bb(74, 'up', {
                density: 3.2
            }),
            info: bb(72, 'up', {
                completeness: 76
            }),
            financing: bb(70, 'stable', {
                pooling: 68
            }),
            medicines: bb(76, 'up', {
                availability: 74
            }),
            governance: bb(74, 'up', {
                accountability: 76
            })
        }
    },
    {
        id: 'ssd',
        name: 'South Sudan',
        code: 'ss',
        region: 'East Africa',
        rec: 'IGAD',
        incomeLevel: 'Low',
        population: 11.4,
        healthBudgetPercent: 2.4,
        healthGdpPercent: 2.6,
        debtServiceRatio: 0.0,
        healthExpPerCapita: 10,
        afriHealthRank: 52,
        totalCases: 46000,
        buildingBlocks: {
            service: bb(24, 'down', {
                coverage: 22
            }),
            workforce: bb(16, 'down', {
                density: 0.1
            }),
            info: bb(20, 'down', {
                completeness: 18
            }),
            financing: bb(22, 'down', {
                pooling: 20
            }),
            medicines: bb(18, 'down', {
                availability: 16
            }),
            governance: bb(26, 'down', {
                accountability: 24
            })
        }
    },
    {
        id: 'sdn',
        name: 'Sudan',
        code: 'sd',
        region: 'North Africa',
        rec: 'IGAD',
        incomeLevel: 'Low',
        population: 46.9,
        healthBudgetPercent: 4.6,
        healthGdpPercent: 4.8,
        debtServiceRatio: 0.0,
        healthExpPerCapita: 34,
        afriHealthRank: 43,
        totalCases: 256000,
        buildingBlocks: {
            service: bb(38, 'down', {
                coverage: 36
            }),
            workforce: bb(32, 'down', {
                density: 0.4
            }),
            info: bb(34, 'down', {
                completeness: 32
            }),
            financing: bb(36, 'stable', {
                pooling: 34
            }),
            medicines: bb(34, 'down', {
                availability: 32
            }),
            governance: bb(36, 'down', {
                accountability: 34
            })
        }
    },
    {
        id: 'tza',
        name: 'Tanzania',
        code: 'tz',
        region: 'East Africa',
        rec: 'EAC',
        incomeLevel: 'Lower-middle',
        population: 65.5,
        healthBudgetPercent: 7.2,
        healthGdpPercent: 3.8,
        debtServiceRatio: 8.4,
        healthExpPerCapita: 38,
        afriHealthRank: 19,
        totalCases: 312000,
        buildingBlocks: {
            service: bb(60, 'up', {
                coverage: 58
            }),
            workforce: bb(52, 'up', {
                density: 0.7
            }),
            info: bb(56, 'up', {
                completeness: 54
            }),
            financing: bb(54, 'stable', {
                pooling: 52
            }),
            medicines: bb(50, 'up', {
                availability: 48
            }),
            governance: bb(62, 'up', {
                accountability: 60
            })
        }
    },
    {
        id: 'tgo',
        name: 'Togo',
        code: 'tg',
        region: 'West Africa',
        rec: 'ECOWAS',
        incomeLevel: 'Low',
        population: 8.8,
        healthBudgetPercent: 5.6,
        healthGdpPercent: 5.4,
        debtServiceRatio: 4.2,
        healthExpPerCapita: 38,
        afriHealthRank: 34,
        totalCases: 56000,
        buildingBlocks: {
            service: bb(48, 'up', {
                coverage: 46
            }),
            workforce: bb(40, 'stable', {
                density: 0.5
            }),
            info: bb(44, 'up', {
                completeness: 42
            }),
            financing: bb(46, 'up', {
                pooling: 44
            }),
            medicines: bb(42, 'stable', {
                availability: 40
            }),
            governance: bb(50, 'up', {
                accountability: 48
            })
        }
    },
    {
        id: 'tun',
        name: 'Tunisia',
        code: 'tn',
        region: 'North Africa',
        rec: 'UMA',
        incomeLevel: 'Lower-middle',
        population: 12.5,
        healthBudgetPercent: 7.8,
        healthGdpPercent: 7.2,
        debtServiceRatio: 10.8,
        healthExpPerCapita: 264,
        afriHealthRank: 5,
        totalCases: 89000,
        buildingBlocks: {
            service: bb(78, 'up', {
                coverage: 80
            }),
            workforce: bb(74, 'up', {
                density: 2.8
            }),
            info: bb(72, 'up', {
                completeness: 76
            }),
            financing: bb(76, 'stable', {
                pooling: 74
            }),
            medicines: bb(74, 'up', {
                availability: 72
            }),
            governance: bb(78, 'up', {
                accountability: 80
            })
        }
    },
    {
        id: 'uga',
        name: 'Uganda',
        code: 'ug',
        region: 'East Africa',
        rec: 'EAC',
        incomeLevel: 'Low',
        population: 48.6,
        healthBudgetPercent: 6.8,
        healthGdpPercent: 3.6,
        debtServiceRatio: 12.4,
        healthExpPerCapita: 28,
        afriHealthRank: 25,
        totalCases: 278000,
        buildingBlocks: {
            service: bb(56, 'up', {
                coverage: 54
            }),
            workforce: bb(48, 'up', {
                density: 0.6
            }),
            info: bb(52, 'up', {
                completeness: 50
            }),
            financing: bb(50, 'stable', {
                pooling: 48
            }),
            medicines: bb(46, 'up', {
                availability: 44
            }),
            governance: bb(58, 'up', {
                accountability: 56
            })
        }
    },
    {
        id: 'zmb',
        name: 'Zambia',
        code: 'zm',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Lower-middle',
        population: 20.6,
        healthBudgetPercent: 7.4,
        healthGdpPercent: 5.2,
        debtServiceRatio: 24.6,
        healthExpPerCapita: 52,
        afriHealthRank: 23,
        totalCases: 145000,
        buildingBlocks: {
            service: bb(58, 'up', {
                coverage: 56
            }),
            workforce: bb(50, 'up', {
                density: 0.8
            }),
            info: bb(54, 'up', {
                completeness: 52
            }),
            financing: bb(52, 'stable', {
                pooling: 50
            }),
            medicines: bb(56, 'up', {
                availability: 54
            }),
            governance: bb(60, 'up', {
                accountability: 58
            })
        }
    },
    {
        id: 'zwe',
        name: 'Zimbabwe',
        code: 'zw',
        region: 'Southern Africa',
        rec: 'SADC',
        incomeLevel: 'Lower-middle',
        population: 16.7,
        healthBudgetPercent: 6.8,
        healthGdpPercent: 6.4,
        debtServiceRatio: 0.0,
        healthExpPerCapita: 56,
        afriHealthRank: 27,
        totalCases: 112000,
        buildingBlocks: {
            service: bb(56, 'up', {
                coverage: 54
            }),
            workforce: bb(48, 'stable', {
                density: 0.7
            }),
            info: bb(50, 'up', {
                completeness: 48
            }),
            financing: bb(52, 'stable', {
                pooling: 50
            }),
            medicines: bb(54, 'up', {
                availability: 52
            }),
            governance: bb(58, 'up', {
                accountability: 56
            })
        }
    }
];
function getCountryById(id) {
    return countries.find((c)=>c.id === id);
}
function getCountriesByRegion(region) {
    return countries.filter((c)=>c.region === region);
}
function getCountriesByRec(rec) {
    return countries.filter((c)=>c.rec === rec);
}
function searchCountries(query) {
    const q = query.toLowerCase();
    return countries.filter((c)=>c.name.toLowerCase().includes(q));
}
function getAllCountriesAlphabetical() {
    return [
        ...countries
    ].sort((a, b)=>a.name.localeCompare(b.name));
}
}),
"[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectedCountryProvider",
    ()=>SelectedCountryProvider,
    "useSelectedCountry",
    ()=>useSelectedCountry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const SelectedCountryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SelectedCountryProvider({ children }) {
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const country = selectedId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryById"])(selectedId) : undefined;
    const hoveredCountry = hoveredId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryById"])(hoveredId) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectedCountryContext.Provider, {
        value: {
            country,
            hoveredCountry,
            selectedId,
            setSelectedId,
            hoveredId,
            setHoveredId
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
function useSelectedCountry() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SelectedCountryContext);
    if (!context) {
        throw new Error('useSelectedCountry must be used within SelectedCountryProvider');
    }
    return context;
}
}),
"[project]/Developer/planetary-constellation/src/components/layout/AppShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$AppHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/AppHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function AppShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectedCountryProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen flex flex-col overflow-hidden bg-[#F1F5F9] font-sans text-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$AppHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppHeader"], {}, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppShell.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppShell.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/layout/AppShell.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__128c0f05._.js.map