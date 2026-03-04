(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Developer/planetary-constellation/src/hooks/useCountryProfile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountryProfile",
    ()=>useCountryProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/policies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useCountryProfile(id) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "0c921e2a303d17427e5d9129c7c72e25c0dcc86d12a7be572b8adda96aecde56") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c921e2a303d17427e5d9129c7c72e25c0dcc86d12a7be572b8adda96aecde56";
    }
    let country;
    let policies;
    let t0;
    if ($[1] !== id) {
        country = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountryById"])(id);
        policies = country ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPoliciesByCountry"])(country.id) : [];
        t0 = country ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateOverallScore"])(country.buildingBlocks) : 0;
        $[1] = id;
        $[2] = country;
        $[3] = policies;
        $[4] = t0;
    } else {
        country = $[2];
        policies = $[3];
        t0 = $[4];
    }
    const overallScore = t0;
    const rank = country ? country.afriHealthRank : 0;
    const hasFiscalAlert = country ? country.debtServiceRatio > country.healthBudgetPercent : false;
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[5] !== country || $[6] !== hasFiscalAlert || $[7] !== openModal || $[8] !== overallScore || $[9] !== policies || $[10] !== rank) {
        t1 = {
            country,
            policies,
            overallScore,
            rank,
            hasFiscalAlert,
            openModal,
            setOpenModal
        };
        $[5] = country;
        $[6] = hasFiscalAlert;
        $[7] = openModal;
        $[8] = overallScore;
        $[9] = policies;
        $[10] = rank;
        $[11] = t1;
    } else {
        t1 = $[11];
    }
    return t1;
}
_s(useCountryProfile, "efzcaoEgo3tvVoHyfcfxYtpiQFA=");
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
"[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountryProfileHeader",
    ()=>CountryProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-client] (ecmascript)");
;
;
;
;
function CountryProfileHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(64);
    if ($[0] !== "650c5ce077ba6e497012c4e4f0dd85d5e954f9e76424082341ad576becade1e1") {
        for(let $i = 0; $i < 64; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "650c5ce077ba6e497012c4e4f0dd85d5e954f9e76424082341ad576becade1e1";
    }
    const { country, overallScore, rank, onScoreClick } = t0;
    let t1;
    if ($[1] !== country.code || $[2] !== country.name) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryFlag"], {
            code: country.code,
            name: country.name,
            size: "lg",
            className: "w-16 h-12 rounded object-cover shadow-sm border border-slate-100"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = country.code;
        $[2] = country.name;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== country.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold font-heading text-slate-900 leading-tight",
            children: country.name
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = country.name;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== country.region) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600",
            children: country.region
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[6] = country.region;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== country.rec) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600",
            children: country.rec
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[8] = country.rec;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mt-1",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t2 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t1 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 min-w-[300px]",
            children: [
                t1,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[16] = t1;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
            children: "Population"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== country.population) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPopulation"])(country.population);
        $[20] = country.population;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold font-mono-data text-slate-900",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                    lineNumber: 102,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
            children: "Health Budget"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== country.healthBudgetPercent) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(country.healthBudgetPercent);
        $[25] = country.healthBudgetPercent;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold font-mono-data text-slate-900",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                    lineNumber: 125,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
            children: "Per Capita"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== country.healthExpPerCapita) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(country.healthExpPerCapita);
        $[30] = country.healthExpPerCapita;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold font-mono-data text-slate-900",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
            children: "Debt Service Ratio"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== country.debtServiceRatio) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(country.debtServiceRatio);
        $[35] = country.debtServiceRatio;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold font-mono-data text-slate-900",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                    lineNumber: 171,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t10 || $[40] !== t13 || $[41] !== t16 || $[42] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 flex-1 w-full border-y lg:border-y-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-8",
            children: [
                t10,
                t13,
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t13;
        $[41] = t16;
        $[42] = t19;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== overallScore) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore);
        $[44] = overallScore;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== overallScore) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore);
        $[46] = overallScore;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    const t23 = `w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-sm hover:ring-4 hover:ring-opacity-50 hover:ring-offset-2 hover:scale-105 transition-all ${t21} hover:${t22}`;
    let t24;
    if ($[48] !== onScoreClick || $[49] !== overallScore || $[50] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onScoreClick,
            className: t23,
            children: overallScore
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[48] = onScoreClick;
        $[49] = overallScore;
        $[50] = t23;
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold text-slate-400 text-center mt-2 uppercase tracking-wide",
            children: "Overall Score"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] !== rank) {
        t26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRank"])(rank);
        $[53] = rank;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] font-semibold text-slate-500 mt-1 bg-slate-100 px-2 py-0.5 rounded-sm",
            children: [
                "#",
                t26,
                " in Africa"
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[55] = t26;
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== t24 || $[58] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center min-w-[160px]",
            children: [
                t24,
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[57] = t24;
        $[58] = t27;
        $[59] = t28;
    } else {
        t28 = $[59];
    }
    let t29;
    if ($[60] !== t20 || $[61] !== t28 || $[62] !== t7) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-b border-slate-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-6",
                children: [
                    t7,
                    t20,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                lineNumber: 249,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[60] = t20;
        $[61] = t28;
        $[62] = t7;
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    return t29;
}
_c = CountryProfileHeader;
var _c;
__turbopack_context__.k.register(_c, "CountryProfileHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FiscalAlert",
    ()=>FiscalAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
;
;
function FiscalAlert(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "4218c735ddc83b8b3b75259ddf382e346b2f843304aca3876fc83dc871b3acfb") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4218c735ddc83b8b3b75259ddf382e346b2f843304aca3876fc83dc871b3acfb";
    }
    const { debtServiceRatio, healthBudgetPercent } = t0;
    if (debtServiceRatio <= healthBudgetPercent) {
        return null;
    }
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-amber-800",
            children: "Fiscal Stress Detected"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== debtServiceRatio || $[4] !== healthBudgetPercent) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-amber-700 mt-0.5 leading-relaxed",
                            children: [
                                "Debt service ratio (",
                                debtServiceRatio,
                                "%) exceeds health budget allocation (",
                                healthBudgetPercent,
                                "%), indicating potential constraints on health financing."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
                            lineNumber: 35,
                            columnNumber: 114
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
                    lineNumber: 35,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = debtServiceRatio;
        $[4] = healthBudgetPercent;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = FiscalAlert;
var _c;
__turbopack_context__.k.register(_c, "FiscalAlert");
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
"[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndicatorProgressBar",
    ()=>IndicatorProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function IndicatorProgressBar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "279d426e5229751c1212e585b92842fa664cbe7028d7148ea36409b07f1333b4") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "279d426e5229751c1212e585b92842fa664cbe7028d7148ea36409b07f1333b4";
    }
    const { label, value, percent, colorClass } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-500 font-medium truncate pr-2",
            children: label
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono-data font-semibold text-slate-700 whitespace-nowrap",
            children: value
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-xs mb-1.5",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = `h-full rounded-full transition-all duration-1000 ${colorClass}`;
    const t5 = `${percent}%`;
    let t6;
    if ($[8] !== t5) {
        t6 = {
            width: t5
        };
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-1.5 bg-slate-100 rounded-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t4,
                style: t6
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
                lineNumber: 61,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t3 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_c = IndicatorProgressBar;
var _c;
__turbopack_context__.k.register(_c, "IndicatorProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildingBlockCard",
    ()=>BuildingBlockCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$IndicatorProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/pill.js [app-client] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
;
;
;
;
;
const ICONS = {
    service: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 14,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    workforce: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 15,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    financing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 17,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    medicines: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 18,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    governance: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 19,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0))
};
function BuildingBlockCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "c1cf4fec499dca108d8f11a46aac5b24e42c35ae9d6446ec0b5c0ae6c70d8dce") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1cf4fec499dca108d8f11a46aac5b24e42c35ae9d6446ec0b5c0ae6c70d8dce";
    }
    const { blockKey, name, data, colorClass, onClick } = t0;
    let t1;
    if ($[1] !== blockKey) {
        t1 = ICONS[blockKey] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
            lineNumber: 38,
            columnNumber: 29
        }, this);
        $[1] = blockKey;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const icon = t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[3] !== colorClass || $[4] !== data.indicators || $[5] !== data.score || $[6] !== icon || $[7] !== name || $[8] !== onClick) {
        const indicatorEntries = Object.entries(data.indicators).slice(0, 3);
        t4 = onClick;
        let t7;
        if ($[14] !== colorClass) {
            t7 = colorClass.replace("bg-", "");
            $[14] = colorClass;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        t5 = `rounded-xl border border-slate-100 shadow-sm p-5 cursor-pointer hover:shadow-md transition-all bg-white group hover:border-${t7}/30`;
        let t8;
        if ($[16] !== colorClass) {
            t8 = colorClass.replace("bg-", "bg-opacity-10 text-");
            $[16] = colorClass;
            $[17] = t8;
        } else {
            t8 = $[17];
        }
        let t9;
        if ($[18] !== colorClass) {
            t9 = colorClass.replace("bg-", "text-");
            $[18] = colorClass;
            $[19] = t9;
        } else {
            t9 = $[19];
        }
        const t10 = `w-10 h-10 rounded-full flex items-center justify-center ${t8} ${t9} bg-opacity-20`;
        let t11;
        if ($[20] !== icon || $[21] !== t10) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t10,
                children: icon
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this);
            $[20] = icon;
            $[21] = t10;
            $[22] = t11;
        } else {
            t11 = $[22];
        }
        let t12;
        if ($[23] !== name) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-slate-800 group-hover:text-slate-900 transition-colors w-24 leading-tight",
                children: name
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this);
            $[23] = name;
            $[24] = t12;
        } else {
            t12 = $[24];
        }
        let t13;
        if ($[25] !== t11 || $[26] !== t12) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this);
            $[25] = t11;
            $[26] = t12;
            $[27] = t13;
        } else {
            t13 = $[27];
        }
        let t14;
        if ($[28] !== data.score) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreBadge"], {
                score: data.score,
                size: "md"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this);
            $[28] = data.score;
            $[29] = t14;
        } else {
            t14 = $[29];
        }
        if ($[30] !== t13 || $[31] !== t14) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-5",
                children: [
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                lineNumber: 114,
                columnNumber: 12
            }, this);
            $[30] = t13;
            $[31] = t14;
            $[32] = t6;
        } else {
            t6 = $[32];
        }
        t2 = "space-y-3";
        t3 = indicatorEntries.map({
            "BuildingBlockCard[indicatorEntries.map()]": (t15)=>{
                const [key, value] = t15;
                const label = key.replace(/([A-Z])/g, " $1").replace(/^./, _BuildingBlockCardIndicatorEntriesMapAnonymous);
                const targets = {
                    hospitalBeds: 5,
                    facilities: 1,
                    specialists: 1,
                    doctors: 1,
                    nurses: 3,
                    healthWorkers: 4.45,
                    dataCompleteness: 100,
                    digitalReadiness: 100,
                    totalExpenditure: 15,
                    outOfPocket: 15,
                    uhcIndex: 100,
                    essentialMeds: 100,
                    vaccineRate: 95,
                    compliance: 100,
                    policyScore: 100,
                    regulatory: 100,
                    institutional: 100
                };
                const target = targets[key] || 100;
                let numValue = typeof value === "string" ? parseFloat(value) : value;
                if (isNaN(numValue)) {
                    numValue = 0;
                }
                let percent = Math.min(numValue / target * 100, 100);
                if (key === "outOfPocket") {
                    percent = Math.max(100 - numValue, 0);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$IndicatorProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IndicatorProgressBar"], {
                    label: label,
                    value: value,
                    percent: percent,
                    colorClass: colorClass
                }, key, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                    lineNumber: 154,
                    columnNumber: 16
                }, this);
            }
        }["BuildingBlockCard[indicatorEntries.map()]"]);
        $[3] = colorClass;
        $[4] = data.indicators;
        $[5] = data.score;
        $[6] = icon;
        $[7] = name;
        $[8] = onClick;
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t2 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
    }
    let t7;
    if ($[33] !== t2 || $[34] !== t3) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
            lineNumber: 177,
            columnNumber: 10
        }, this);
        $[33] = t2;
        $[34] = t3;
        $[35] = t7;
    } else {
        t7 = $[35];
    }
    let t8;
    if ($[36] !== t4 || $[37] !== t5 || $[38] !== t6 || $[39] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t4,
            className: t5,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
            lineNumber: 186,
            columnNumber: 10
        }, this);
        $[36] = t4;
        $[37] = t5;
        $[38] = t6;
        $[39] = t7;
        $[40] = t8;
    } else {
        t8 = $[40];
    }
    return t8;
}
_c = BuildingBlockCard;
function _BuildingBlockCardIndicatorEntriesMapAnonymous(str) {
    return str.toUpperCase();
}
var _c;
__turbopack_context__.k.register(_c, "BuildingBlockCard");
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
"[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolicyAccordion",
    ()=>PolicyAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PolicyAccordion(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "16ee41f43354041d7ef7c992334da21b5d662649e5b8be52ce6d0e5019cf55ea") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16ee41f43354041d7ef7c992334da21b5d662649e5b8be52ce6d0e5019cf55ea";
    }
    const { policies } = t0;
    if (!policies || policies.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-[10px] shadow-sm border border-slate-200 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-slate-900 mb-2",
                        children: "Health Policies"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 25,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 text-center text-sm text-slate-400 italic bg-slate-50 rounded-lg border border-slate-100",
                        children: "No policies on record for this country."
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 25,
                        columnNumber: 171
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                lineNumber: 25,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-base font-semibold text-slate-900 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "w-5 h-5 text-[#F29D38]"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                    lineNumber: 34,
                    columnNumber: 89
                }, this),
                "Health Policies"
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = policies.length === 1 ? "Policy" : "Policies";
    let t3;
    if ($[3] !== policies.length || $[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-[#F29D38]/10 text-[#F29D38] text-xs font-bold px-2.5 py-1 rounded-full",
                    children: [
                        policies.length,
                        " ",
                        t2
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                    lineNumber: 42,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[3] = policies.length;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== policies) {
        t4 = policies.map(_PolicyAccordionPoliciesMap);
        $[6] = policies;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divide-y divide-slate-100",
            children: t4
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t3 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[10px] shadow-sm border border-slate-200 overflow-hidden",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c = PolicyAccordion;
function _PolicyAccordionPoliciesMap(policy) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
        policy: policy
    }, policy.id, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
function AccordionItem(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "16ee41f43354041d7ef7c992334da21b5d662649e5b8be52ce6d0e5019cf55ea") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16ee41f43354041d7ef7c992334da21b5d662649e5b8be52ce6d0e5019cf55ea";
    }
    const { policy } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== isOpen) {
        t1 = ({
            "AccordionItem[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["AccordionItem[<button>.onClick]"];
        $[1] = isOpen;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== policy.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-semibold text-slate-900 group-hover:text-[#F29D38] transition-colors pr-4",
            children: policy.title
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[3] = policy.title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== policy.status) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-medium",
            children: policy.status
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[5] = policy.status;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== policy.yearEnacted) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-mono-data text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md",
            children: policy.yearEnacted
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[7] = policy.yearEnacted;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 shrink-0",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t2 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1",
                children: [
                    t2,
                    t5
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                lineNumber: 136,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const t7 = `w-5 h-5 text-slate-400 transition-transform duration-200 mt-0.5 shrink-0 group-hover:text-[#F29D38] ${isOpen ? "rotate-180" : ""}`;
    let t8;
    if ($[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t7
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t1 || $[18] !== t6 || $[19] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: "w-full text-left p-5 hover:bg-slate-50 transition-colors flex items-start gap-4 focus:outline-none",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 154,
            columnNumber: 10
        }, this);
        $[17] = t1;
        $[18] = t6;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] !== isOpen || $[22] !== policy.agency || $[23] !== policy.category || $[24] !== policy.description || $[25] !== policy.impact || $[26] !== policy.sourceUrl) {
        t10 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 pb-6 pt-1 animate-in slide-in-from-top-2 fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50 border border-slate-100 rounded-lg p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-700 leading-relaxed max-w-3xl mb-4",
                        children: policy.description
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 164,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-x-6 gap-y-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-slate-400 uppercase tracking-widest text-[10px]",
                                        children: "Category:"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                        lineNumber: 164,
                                        columnNumber: 376
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-700",
                                        children: policy.category
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                        lineNumber: 164,
                                        columnNumber: 477
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                lineNumber: 164,
                                columnNumber: 335
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-slate-400 uppercase tracking-widest text-[10px]",
                                        children: "Agency:"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                        lineNumber: 164,
                                        columnNumber: 593
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-700",
                                        children: policy.agency
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                        lineNumber: 164,
                                        columnNumber: 692
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                lineNumber: 164,
                                columnNumber: 552
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-slate-400 uppercase tracking-widest text-[10px]",
                                        children: "Impact:"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                        lineNumber: 164,
                                        columnNumber: 806
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImpactBadge"], {
                                        impact: policy.impact
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                        lineNumber: 164,
                                        columnNumber: 905
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                lineNumber: 164,
                                columnNumber: 765
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: policy.sourceUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-1.5 text-[#F29D38] hover:text-orange-500 font-medium ml-auto transition-colors",
                                children: [
                                    "View Source ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                        lineNumber: 164,
                                        columnNumber: 1143
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                lineNumber: 164,
                                columnNumber: 949
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 164,
                        columnNumber: 266
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                lineNumber: 164,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 164,
            columnNumber: 21
        }, this);
        $[21] = isOpen;
        $[22] = policy.agency;
        $[23] = policy.category;
        $[24] = policy.description;
        $[25] = policy.impact;
        $[26] = policy.sourceUrl;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] !== t10 || $[29] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t9;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    return t11;
}
_s(AccordionItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c1 = AccordionItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "PolicyAccordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildingBlockModal",
    ()=>BuildingBlockModal,
    "ScoreBreakdownModal",
    ()=>ScoreBreakdownModal,
    "generateBlockAnalysis",
    ()=>generateBlockAnalysis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
;
;
;
function ScoreBreakdownModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "e4895894fed419ad5feb1be2c87f381c8a8379f5547a547b0943ab4036f0e9f0") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4895894fed419ad5feb1be2c87f381c8a8379f5547a547b0943ab4036f0e9f0";
    }
    const { country, overallScore, onClose } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== country.buildingBlocks || $[2] !== onClose || $[3] !== overallScore) {
        const blocksList = Object.entries(country.buildingBlocks).map(_ScoreBreakdownModalAnonymous);
        const getBlockName = _ScoreBreakdownModalGetBlockName;
        const getBlockColor = _ScoreBreakdownModalGetBlockColor;
        t8 = "fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200";
        t9 = onClose;
        t5 = "bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200";
        t6 = _ScoreBreakdownModalDivOnClick;
        let t10;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold font-heading text-slate-900",
                children: "Score Breakdown"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this);
            $[13] = t10;
        } else {
            t10 = $[13];
        }
        let t11;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this);
            $[14] = t11;
        } else {
            t11 = $[14];
        }
        if ($[15] !== onClose) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-5 border-b border-slate-100",
                children: [
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors",
                        children: t11
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                        lineNumber: 56,
                        columnNumber: 98
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 56,
                columnNumber: 12
            }, this);
            $[15] = onClose;
            $[16] = t7;
        } else {
            t7 = $[16];
        }
        t3 = "p-6";
        let t12;
        if ($[17] !== overallScore) {
            t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore).replace("bg-", "border-").replace("500", "400");
            $[17] = overallScore;
            $[18] = t12;
        } else {
            t12 = $[18];
        }
        let t13;
        if ($[19] !== overallScore) {
            t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore).replace("bg-", "text-");
            $[19] = overallScore;
            $[20] = t13;
        } else {
            t13 = $[20];
        }
        const t14 = `w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl font-bold bg-white z-10 ${t12} ${t13}`;
        let t15;
        if ($[21] !== overallScore || $[22] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t14,
                children: overallScore
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this);
            $[21] = overallScore;
            $[22] = t14;
            $[23] = t15;
        } else {
            t15 = $[23];
        }
        let t16;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-slate-500 mt-3 uppercase tracking-widest",
                children: "Overall Score"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this);
            $[24] = t16;
        } else {
            t16 = $[24];
        }
        if ($[25] !== t15) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center mb-8",
                children: [
                    t15,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 97,
                columnNumber: 12
            }, this);
            $[25] = t15;
            $[26] = t4;
        } else {
            t4 = $[26];
        }
        t1 = "space-y-4";
        t2 = blocksList.map({
            "ScoreBreakdownModal[blocksList.map()]": (block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-600 font-medium w-36 truncate",
                            children: getBlockName(block.key)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 105,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 h-2 bg-slate-100 rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-full rounded-full ${getBlockColor(block.key)}`,
                                style: {
                                    width: `${block.score / 5 * 100}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                lineNumber: 105,
                                columnNumber: 283
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 105,
                            columnNumber: 213
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono-data font-semibold text-slate-800 w-8 text-right",
                            children: block.score.toFixed(1)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 107,
                            columnNumber: 22
                        }, this)
                    ]
                }, block.key, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                    lineNumber: 105,
                    columnNumber: 57
                }, this)
        }["ScoreBreakdownModal[blocksList.map()]"]);
        $[1] = country.buildingBlocks;
        $[2] = onClose;
        $[3] = overallScore;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[27] !== t1 || $[28] !== t2) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[27] = t1;
        $[28] = t2;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t10 || $[31] !== t3 || $[32] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t3;
        $[32] = t4;
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    let t12;
    if ($[34] !== t11 || $[35] !== t5 || $[36] !== t6 || $[37] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            onClick: t6,
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[34] = t11;
        $[35] = t5;
        $[36] = t6;
        $[37] = t7;
        $[38] = t12;
    } else {
        t12 = $[38];
    }
    let t13;
    if ($[39] !== t12 || $[40] !== t8 || $[41] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            onClick: t9,
            children: t12
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[39] = t12;
        $[40] = t8;
        $[41] = t9;
        $[42] = t13;
    } else {
        t13 = $[42];
    }
    return t13;
}
_c = ScoreBreakdownModal;
function _ScoreBreakdownModalDivOnClick(e) {
    return e.stopPropagation();
}
function _ScoreBreakdownModalGetBlockColor(key_1) {
    const colors = {
        service: "bg-blue-500",
        workforce: "bg-violet-500",
        info: "bg-cyan-500",
        financing: "bg-emerald-500",
        medicines: "bg-amber-500",
        governance: "bg-red-500"
    };
    return colors[key_1] || "bg-slate-500";
}
function _ScoreBreakdownModalGetBlockName(key_0) {
    const names = {
        service: "Service Delivery",
        workforce: "Health Workforce",
        info: "Health Information",
        financing: "Health Financing",
        medicines: "Medicines & Tech",
        governance: "Leadership & Gov."
    };
    return names[key_0] || key_0;
}
function _ScoreBreakdownModalAnonymous(t0) {
    const [key, data] = t0;
    return {
        key,
        ...data
    };
}
function generateBlockAnalysis(blockKey, country, allCountries) {
    const score = country.buildingBlocks[blockKey]?.score || 0;
    const regionPeers = allCountries.filter((c)=>c.region === country.region);
    // Calculate average
    const sum = regionPeers.reduce((acc, c)=>acc + (c.buildingBlocks[blockKey]?.score || 0), 0);
    const regionAvg = regionPeers.length ? sum / regionPeers.length : score;
    const diff = Math.abs(score - regionAvg / 5 * 100).toFixed(1);
    // Note: scores are out of 100 in the display logic? Actually they are out of 100 on the card, wait.
    // Let's ensure the math is right: average of scores (0-100), diff, direction.
    // The previous implementation mapped from 5 points to 100 % in block card.
    // Let's just use the score directly.
    const direction = score >= regionAvg ? 'above' : 'below';
    const blockNames = {
        service: 'Service Delivery',
        workforce: 'Health Workforce',
        info: 'Health Information',
        financing: 'Health Financing',
        medicines: 'Medicines & Tech',
        governance: 'Leadership & Gov.'
    };
    const finalDiff = Math.abs(score - regionAvg).toFixed(1);
    return `${country.name}'s ${blockNames[blockKey] || blockKey} score of ${score.toFixed(1)} is ${finalDiff} points ${direction} the ${country.region} regional average of ${regionAvg.toFixed(1)}. ${score < 50 ? 'Significant investment is needed to meet baseline targets.' : score >= 70 ? 'Performance is strong relative to continental benchmarks.' : 'Moderate improvements could elevate this country into the high-performing tier.'}`;
}
function BuildingBlockModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "e4895894fed419ad5feb1be2c87f381c8a8379f5547a547b0943ab4036f0e9f0") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4895894fed419ad5feb1be2c87f381c8a8379f5547a547b0943ab4036f0e9f0";
    }
    const { blockKey, country, allCountries, onClose } = t0;
    const data = country.buildingBlocks[blockKey];
    if (!data) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            service: "Service Delivery",
            workforce: "Health Workforce",
            info: "Health Information",
            financing: "Health Financing",
            medicines: "Medicines & Tech",
            governance: "Leadership & Gov."
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const blockNames = t1;
    const getBlockColor = _BuildingBlockModalGetBlockColor;
    let t10;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[2] !== blockKey || $[3] !== data.indicators || $[4] !== onClose) {
        const colorClass = getBlockColor(blockKey);
        const textColor = colorClass.replace("bg-", "text-");
        const indicatorMeta = {
            hospitalBeds: {
                target: 5,
                unit: "per 1,000"
            },
            facilities: {
                target: 1,
                unit: "per 1,000"
            },
            specialists: {
                target: 1,
                unit: "per 1,000"
            },
            doctors: {
                target: 1,
                unit: "per 1,000"
            },
            nurses: {
                target: 3,
                unit: "per 1,000"
            },
            healthWorkers: {
                target: 4.45,
                unit: "per 1,000 (WHO SDG)"
            },
            dataCompleteness: {
                target: 100,
                unit: "%"
            },
            digitalReadiness: {
                target: 100,
                unit: "%"
            },
            totalExpenditure: {
                target: 15,
                unit: "% (Abuja)"
            },
            outOfPocket: {
                target: 15,
                unit: "% (invert)",
                invert: true
            },
            uhcIndex: {
                target: 100,
                unit: "index"
            },
            essentialMeds: {
                target: 100,
                unit: "%"
            },
            vaccineRate: {
                target: 95,
                unit: "%"
            },
            compliance: {
                target: 100,
                unit: "%"
            },
            policyScore: {
                target: 100,
                unit: "index"
            },
            regulatory: {
                target: 100,
                unit: "index"
            },
            institutional: {
                target: 100,
                unit: "index"
            }
        };
        t9 = "fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200";
        t10 = onClose;
        t6 = "bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]";
        t7 = _BuildingBlockModalDivOnClick;
        const t11 = `p-6 border-b border-slate-100 flex items-start justify-between ${colorClass.replace("bg-", "bg-opacity-10 bg-")}`;
        const t12 = `text-xl font-bold font-heading mb-1 ${textColor}`;
        const t13 = blockNames[blockKey] || blockKey;
        let t14;
        if ($[14] !== t12 || $[15] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: t12,
                children: t13
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 363,
                columnNumber: 13
            }, this);
            $[14] = t12;
            $[15] = t13;
            $[16] = t14;
        } else {
            t14 = $[16];
        }
        let t15;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-600 font-medium",
                children: "Detailed indicators and regional benchmarks"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 372,
                columnNumber: 13
            }, this);
            $[17] = t15;
        } else {
            t15 = $[17];
        }
        let t16;
        if ($[18] !== t14) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 379,
                columnNumber: 13
            }, this);
            $[18] = t14;
            $[19] = t16;
        } else {
            t16 = $[19];
        }
        let t17;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 387,
                columnNumber: 13
            }, this);
            $[20] = t17;
        } else {
            t17 = $[20];
        }
        let t18;
        if ($[21] !== onClose) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "p-1.5 bg-white/50 hover:bg-white text-slate-500 rounded-lg transition-colors border border-black/5",
                children: t17
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 394,
                columnNumber: 13
            }, this);
            $[21] = onClose;
            $[22] = t18;
        } else {
            t18 = $[22];
        }
        if ($[23] !== t11 || $[24] !== t16 || $[25] !== t18) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t11,
                children: [
                    t16,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 401,
                columnNumber: 12
            }, this);
            $[23] = t11;
            $[24] = t16;
            $[25] = t18;
            $[26] = t8;
        } else {
            t8 = $[26];
        }
        t5 = "overflow-y-auto p-6 space-y-8 bg-slate-50/30";
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-bold uppercase tracking-widest text-slate-400 mb-4",
                children: "Indicators"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                lineNumber: 411,
                columnNumber: 12
            }, this);
            $[27] = t4;
        } else {
            t4 = $[27];
        }
        t2 = "space-y-6";
        t3 = Object.entries(data.indicators).map({
            "BuildingBlockModal[(anonymous)()]": (t19)=>{
                const [key_0, value] = t19;
                const label = key_0.replace(/([A-Z])/g, " $1").replace(/^./, _BuildingBlockModalAnonymousAnonymous);
                const meta = indicatorMeta[key_0] || {
                    target: 100,
                    unit: ""
                };
                let numValue = typeof value === "string" ? parseFloat(value) : value;
                if (isNaN(numValue)) {
                    numValue = 0;
                }
                let percent = Math.min(numValue / meta.target * 100, 100);
                if (meta.invert) {
                    percent = Math.max(100 - numValue, 0);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-xl border border-slate-100 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-slate-800",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 433,
                                    columnNumber: 189
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500 flex flex-col sm:items-end gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Current: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-slate-900 font-mono-data",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 340
                                                }, this),
                                                " ",
                                                meta.unit.replace("(invert)", "")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                            lineNumber: 433,
                                            columnNumber: 325
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Target: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-slate-400 font-mono-data",
                                                    children: meta.target
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 463
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                            lineNumber: 433,
                                            columnNumber: 449
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 433,
                                    columnNumber: 250
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 433,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-2 bg-slate-100 rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-full rounded-full transition-all duration-1000 ${colorClass}`,
                                        style: {
                                            width: `${percent}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                        lineNumber: 433,
                                        columnNumber: 665
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 433,
                                    columnNumber: 595
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold font-mono-data w-8 text-right text-slate-400",
                                    children: [
                                        Math.round(percent),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 435,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 433,
                            columnNumber: 554
                        }, this)
                    ]
                }, key_0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                    lineNumber: 433,
                    columnNumber: 16
                }, this);
            }
        }["BuildingBlockModal[(anonymous)()]"]);
        $[2] = blockKey;
        $[3] = data.indicators;
        $[4] = onClose;
        $[5] = t10;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
    } else {
        t10 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
        t8 = $[12];
        t9 = $[13];
    }
    let t11;
    if ($[28] !== t2 || $[29] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[28] = t2;
        $[29] = t3;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    let t12;
    if ($[31] !== t11 || $[32] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[31] = t11;
        $[32] = t4;
        $[33] = t12;
    } else {
        t12 = $[33];
    }
    let t13;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xs font-bold uppercase tracking-widest text-slate-400 mb-4",
            children: "Analysis"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[34] = t13;
    } else {
        t13 = $[34];
    }
    let t14;
    if ($[35] !== allCountries || $[36] !== blockKey || $[37] !== country) {
        t14 = generateBlockAnalysis(blockKey, country, allCountries);
        $[35] = allCountries;
        $[36] = blockKey;
        $[37] = country;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-5 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-[#F29D38]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-700 leading-relaxed font-medium",
                        children: t14
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                        lineNumber: 498,
                        columnNumber: 126
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                    lineNumber: 498,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[39] = t14;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== t12 || $[42] !== t15 || $[43] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[41] = t12;
        $[42] = t15;
        $[43] = t5;
        $[44] = t16;
    } else {
        t16 = $[44];
    }
    let t17;
    if ($[45] !== t16 || $[46] !== t6 || $[47] !== t7 || $[48] !== t8) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            onClick: t7,
            children: [
                t8,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 516,
            columnNumber: 11
        }, this);
        $[45] = t16;
        $[46] = t6;
        $[47] = t7;
        $[48] = t8;
        $[49] = t17;
    } else {
        t17 = $[49];
    }
    let t18;
    if ($[50] !== t10 || $[51] !== t17 || $[52] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            onClick: t10,
            children: t17
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 527,
            columnNumber: 11
        }, this);
        $[50] = t10;
        $[51] = t17;
        $[52] = t9;
        $[53] = t18;
    } else {
        t18 = $[53];
    }
    return t18;
}
_c1 = BuildingBlockModal;
function _BuildingBlockModalAnonymousAnonymous(str) {
    return str.toUpperCase();
}
function _BuildingBlockModalDivOnClick(e) {
    return e.stopPropagation();
}
function _BuildingBlockModalGetBlockColor(key) {
    const colors = {
        service: "bg-blue-500",
        workforce: "bg-violet-500",
        info: "bg-cyan-500",
        financing: "bg-emerald-500",
        medicines: "bg-amber-500",
        governance: "bg-red-500"
    };
    return colors[key] || "bg-slate-500";
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ScoreBreakdownModal");
__turbopack_context__.k.register(_c1, "BuildingBlockModal");
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
"[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountryProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useCountryProfile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$CountryProfileHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$FiscalAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$BuildingBlockCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$PolicyAccordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$ProfileModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
;
;
;
;
;
function CountryProfilePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "84d4eed9b6487dfd8123ead844b234f83e00d7422eac303a84412480c7c192b3") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "84d4eed9b6487dfd8123ead844b234f83e00d7422eac303a84412480c7c192b3";
    }
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const id = typeof params.id === "string" ? params.id : "";
    const { country, policies, overallScore, rank, hasFiscalAlert, openModal, setOpenModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountryProfile"])(id);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const allCountries = t0;
    if (!country) {
        let t1;
        let t2;
        let t3;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "w-12 h-12 text-slate-300 mb-4"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                lineNumber: 49,
                columnNumber: 12
            }, this);
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold text-slate-900 mb-2",
                children: "Country Not Found"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                lineNumber: 50,
                columnNumber: 12
            }, this);
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 mb-6",
                children: "The profile you are looking for does not exist or has been removed."
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                lineNumber: 51,
                columnNumber: 12
            }, this);
            $[2] = t1;
            $[3] = t2;
            $[4] = t3;
        } else {
            t1 = $[2];
            t2 = $[3];
            t3 = $[4];
        }
        let t4;
        if ($[5] !== router) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50 relative h-full",
                children: [
                    t1,
                    t2,
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "CountryProfilePage[<button>.onClick]": ()=>router.push("/country-profiles")
                        }["CountryProfilePage[<button>.onClick]"],
                        className: "px-4 py-2 bg-[#F29D38] hover:bg-orange-500 text-white rounded-lg font-semibold transition-colors",
                        children: "Return to Profiles"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 134
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                lineNumber: 62,
                columnNumber: 12
            }, this);
            $[5] = router;
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        return t4;
    }
    let t1;
    if ($[7] !== router) {
        t1 = ({
            "CountryProfilePage[handleCountrySelect]": (cId)=>{
                router.push(`/country-profiles/${cId}`);
            }
        })["CountryProfilePage[handleCountrySelect]"];
        $[7] = router;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    const handleCountrySelect = t1;
    let t2;
    if ($[9] !== handleCountrySelect || $[10] !== id) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$CountrySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountrySidebar"], {
            selectedCountry: id,
            onCountrySelect: handleCountrySelect
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[9] = handleCountrySelect;
        $[10] = id;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    let t3;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-b border-slate-200 px-6 py-3 flex items-center shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/country-profiles",
                className: "flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#F29D38] transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                        lineNumber: 96,
                        columnNumber: 242
                    }, this),
                    "Back to Map"
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                lineNumber: 96,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== setOpenModal) {
        t4 = ({
            "CountryProfilePage[<CountryProfileHeader>.onScoreClick]": ()=>setOpenModal("scoreBreakdown")
        })["CountryProfilePage[<CountryProfileHeader>.onScoreClick]"];
        $[13] = setOpenModal;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== country || $[16] !== overallScore || $[17] !== rank || $[18] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$CountryProfileHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountryProfileHeader"], {
            country: country,
            overallScore: overallScore,
            rank: rank,
            onScoreClick: t4
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[15] = country;
        $[16] = overallScore;
        $[17] = rank;
        $[18] = t4;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== country.debtServiceRatio || $[21] !== country.healthBudgetPercent || $[22] !== hasFiscalAlert) {
        t6 = hasFiscalAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$FiscalAlert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiscalAlert"], {
            debtServiceRatio: country.debtServiceRatio,
            healthBudgetPercent: country.healthBudgetPercent
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 124,
            columnNumber: 28
        }, this);
        $[20] = country.debtServiceRatio;
        $[21] = country.healthBudgetPercent;
        $[22] = hasFiscalAlert;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    let t7;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-bold font-heading text-slate-900 mb-5 pl-1 border-l-4 border-[#F29D38]",
            children: "WHO 6 Building Blocks Performance"
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] !== country.buildingBlocks) {
        t8 = Object.entries(country.buildingBlocks);
        $[25] = country.buildingBlocks;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== setOpenModal || $[28] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                    children: t8.map({
                        "CountryProfilePage[(anonymous)()]": (t10)=>{
                            const [key, data] = t10;
                            const names = {
                                service: "Service Delivery",
                                workforce: "Health Workforce",
                                info: "Health Information",
                                financing: "Health Financing",
                                medicines: "Medicines & Tech",
                                governance: "Leadership & Gov."
                            };
                            const colors = {
                                service: "bg-blue-500",
                                workforce: "bg-violet-500",
                                info: "bg-cyan-500",
                                financing: "bg-emerald-500",
                                medicines: "bg-amber-500",
                                governance: "bg-red-500"
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$BuildingBlockCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildingBlockCard"], {
                                blockKey: key,
                                name: names[key] || key,
                                data: data,
                                colorClass: colors[key] || "bg-slate-500",
                                onClick: {
                                    "CountryProfilePage[(anonymous)() > <BuildingBlockCard>.onClick]": ()=>setOpenModal(key)
                                }["CountryProfilePage[(anonymous)() > <BuildingBlockCard>.onClick]"]
                            }, key, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                lineNumber: 168,
                                columnNumber: 20
                            }, this);
                        }
                    }["CountryProfilePage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 149,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 149,
            columnNumber: 10
        }, this);
        $[27] = setOpenModal;
        $[28] = t8;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    let t10;
    if ($[30] !== policies) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$PolicyAccordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolicyAccordion"], {
                policies: policies
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                lineNumber: 181,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[30] = policies;
        $[31] = t10;
    } else {
        t10 = $[31];
    }
    let t11;
    if ($[32] !== t10 || $[33] !== t6 || $[34] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-8 space-y-8",
            children: [
                t6,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t6;
        $[34] = t9;
        $[35] = t11;
    } else {
        t11 = $[35];
    }
    let t12;
    if ($[36] !== country || $[37] !== openModal || $[38] !== overallScore || $[39] !== setOpenModal) {
        t12 = openModal === "scoreBreakdown" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$ProfileModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreBreakdownModal"], {
            country: country,
            overallScore: overallScore,
            onClose: {
                "CountryProfilePage[<ScoreBreakdownModal>.onClose]": ()=>setOpenModal(null)
            }["CountryProfilePage[<ScoreBreakdownModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 199,
            columnNumber: 45
        }, this);
        $[36] = country;
        $[37] = openModal;
        $[38] = overallScore;
        $[39] = setOpenModal;
        $[40] = t12;
    } else {
        t12 = $[40];
    }
    let t13;
    if ($[41] !== country || $[42] !== openModal || $[43] !== setOpenModal) {
        t13 = openModal && openModal !== "scoreBreakdown" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$ProfileModals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildingBlockModal"], {
            blockKey: openModal,
            country: country,
            allCountries: allCountries,
            onClose: {
                "CountryProfilePage[<BuildingBlockModal>.onClose]": ()=>setOpenModal(null)
            }["CountryProfilePage[<BuildingBlockModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 212,
            columnNumber: 58
        }, this);
        $[41] = country;
        $[42] = openModal;
        $[43] = setOpenModal;
        $[44] = t13;
    } else {
        t13 = $[44];
    }
    let t14;
    if ($[45] !== t11 || $[46] !== t12 || $[47] !== t13 || $[48] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full relative overflow-hidden",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto w-full",
                    children: [
                        t5,
                        t11,
                        t12,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 224,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[45] = t11;
        $[46] = t12;
        $[47] = t13;
        $[48] = t5;
        $[49] = t14;
    } else {
        t14 = $[49];
    }
    let t15;
    if ($[50] !== t14 || $[51] !== t2) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageLayout"], {
            sidebar: t2,
            children: t14
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[50] = t14;
        $[51] = t2;
        $[52] = t15;
    } else {
        t15 = $[52];
    }
    return t15;
}
_s(CountryProfilePage, "8QbwtggMjuzaDeHp88PVc4PKmK0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountryProfile"]
    ];
});
_c = CountryProfilePage;
var _c;
__turbopack_context__.k.register(_c, "CountryProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_planetary-constellation_src_7b4dd654._.js.map