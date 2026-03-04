module.exports = [
"[project]/Developer/planetary-constellation/src/data/policies.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Developer/planetary-constellation/src/hooks/useCountryProfile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountryProfile",
    ()=>useCountryProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/policies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function useCountryProfile(id) {
    const country = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryById"])(id);
    const policies = country ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPoliciesByCountry"])(country.id) : [];
    const overallScore = country ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateOverallScore"])(country.buildingBlocks) : 0;
    const rank = country ? country.afriHealthRank : 0;
    const hasFiscalAlert = country ? country.debtServiceRatio > country.healthBudgetPercent : false;
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return {
        country,
        policies,
        overallScore,
        rank,
        hasFiscalAlert,
        openModal,
        setOpenModal
    };
}
}),
"[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountryFlag",
    ()=>CountryFlag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
const sizeMap = {
    sm: 'w-5 h-4',
    md: 'w-8 h-6',
    lg: 'w-12 h-8'
};
function CountryFlag({ code, name, size = 'sm', className = '' }) {
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFlagUrl"])(code),
        alt: `${name} flag`,
        className: `${sizeMap[size]} object-cover rounded-sm flex-shrink-0 ${className}`,
        width: size === 'lg' ? 48 : size === 'md' ? 32 : 20,
        height: size === 'lg' ? 32 : size === 'md' ? 24 : 15
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this));
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountryProfileHeader",
    ()=>CountryProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-ssr] (ecmascript)");
;
;
;
function CountryProfileHeader({ country, overallScore, rank, onScoreClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border-b border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 min-w-[300px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountryFlag"], {
                            code: country.code,
                            name: country.name,
                            size: "lg",
                            className: "w-16 h-12 rounded object-cover shadow-sm border border-slate-100"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 19,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold font-heading text-slate-900 leading-tight",
                                    children: country.name
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600",
                                            children: country.region
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                            lineNumber: 30,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600",
                                            children: country.rec
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                            lineNumber: 33,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 flex-1 w-full border-y lg:border-y-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
                                    children: "Population"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold font-mono-data text-slate-900",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPopulation"])(country.population)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
                                    children: "Health Budget"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold font-mono-data text-slate-900",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(country.healthBudgetPercent)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
                                    children: "Per Capita"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold font-mono-data text-slate-900",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(country.healthExpPerCapita)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1",
                                    children: "Debt Service Ratio"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold font-mono-data text-slate-900",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPercent"])(country.debtServiceRatio)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center min-w-[160px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onScoreClick,
                            className: `w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-sm hover:ring-4 hover:ring-opacity-50 hover:ring-offset-2 hover:scale-105 transition-all ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore)} hover:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore)}`,
                            children: overallScore
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold text-slate-400 text-center mt-2 uppercase tracking-wide",
                            children: "Overall Score"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-semibold text-slate-500 mt-1 bg-slate-100 px-2 py-0.5 rounded-sm",
                            children: [
                                "#",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRank"])(rank),
                                " in Africa"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FiscalAlert",
    ()=>FiscalAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
;
;
function FiscalAlert({ debtServiceRatio, healthBudgetPercent }) {
    if (debtServiceRatio <= healthBudgetPercent) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-amber-800",
                        children: "Fiscal Stress Detected"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreBadge",
    ()=>ScoreBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg'
};
function ScoreBadge({ score, size = 'md' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full text-white font-bold flex items-center justify-center flex-shrink-0', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScoreBg"])(score), sizeMap[size]),
        children: score
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndicatorProgressBar",
    ()=>IndicatorProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function IndicatorProgressBar({ label, value, percent, colorClass }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-xs mb-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500 font-medium truncate pr-2",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-data font-semibold text-slate-700 whitespace-nowrap",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-1.5 bg-slate-100 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-full rounded-full transition-all duration-1000 ${colorClass}`,
                    style: {
                        width: `${percent}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildingBlockCard",
    ()=>BuildingBlockCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ScoreBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$IndicatorProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/IndicatorProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
;
;
;
;
const ICONS = {
    service: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 15,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    workforce: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 16,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 17,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    financing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 18,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    medicines: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 19,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    governance: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 20,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0))
};
function BuildingBlockCard({ blockKey, name, data, colorClass, onClick }) {
    const icon = ICONS[blockKey] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
        className: "w-5 h-5"
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 24,
        columnNumber: 37
    }, this);
    // Extract top 3 indicators for the mini preview
    const indicatorEntries = Object.entries(data.indicators).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `rounded-xl border border-slate-100 shadow-sm p-5 cursor-pointer hover:shadow-md transition-all bg-white group hover:border-${colorClass.replace('bg-', '')}/30`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-10 h-10 rounded-full flex items-center justify-center ${colorClass.replace('bg-', 'bg-opacity-10 text-')} ${colorClass.replace('bg-', 'text-')} bg-opacity-20`,
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-slate-800 group-hover:text-slate-900 transition-colors w-24 leading-tight",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ScoreBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoreBadge"], {
                        score: data.score,
                        size: "md"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: indicatorEntries.map(([key, value])=>{
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase());
                    // Simple target resolution mapping
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
                    let numValue = typeof value === 'string' ? parseFloat(value) : value;
                    if (isNaN(numValue)) numValue = 0;
                    let percent = Math.min(numValue / target * 100, 100);
                    if (key === 'outOfPocket') percent = Math.max(100 - numValue, 0);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$IndicatorProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndicatorProgressBar"], {
                        label: label,
                        value: value,
                        percent: percent,
                        colorClass: colorClass
                    }, key, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                        lineNumber: 67,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImpactBadge",
    ()=>ImpactBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function ImpactBadge({ impact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs font-semibold', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImpactColor"])(impact)),
        children: impact
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolicyAccordion",
    ()=>PolicyAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PolicyAccordion({ policies }) {
    if (!policies || policies.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-[10px] shadow-sm border border-slate-200 p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-base font-semibold text-slate-900 mb-2",
                    children: "Health Policies"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-8 text-center text-sm text-slate-400 italic bg-slate-50 rounded-lg border border-slate-100",
                    children: "No policies on record for this country."
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[10px] shadow-sm border border-slate-200 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-slate-900 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-5 h-5 text-[#F29D38]"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            "Health Policies"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-[#F29D38]/10 text-[#F29D38] text-xs font-bold px-2.5 py-1 rounded-full",
                        children: [
                            policies.length,
                            " ",
                            policies.length === 1 ? 'Policy' : 'Policies'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-slate-100",
                children: policies.map((policy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                        policy: policy
                    }, policy.id, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
function AccordionItem({ policy }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full text-left p-5 hover:bg-slate-50 transition-colors flex items-start gap-4 focus:outline-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-slate-900 group-hover:text-[#F29D38] transition-colors pr-4",
                                    children: policy.title
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-medium",
                                            children: policy.status
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono-data text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md",
                                            children: policy.yearEnacted
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-5 h-5 text-slate-400 transition-transform duration-200 mt-0.5 shrink-0 group-hover:text-[#F29D38] ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-6 pt-1 animate-in slide-in-from-top-2 fade-in duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50 border border-slate-100 rounded-lg p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-700 leading-relaxed max-w-3xl mb-4",
                            children: policy.description
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-x-6 gap-y-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-400 uppercase tracking-widest text-[10px]",
                                            children: "Category:"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 83,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-700",
                                            children: policy.category
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                    lineNumber: 82,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-400 uppercase tracking-widest text-[10px]",
                                            children: "Agency:"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-700",
                                            children: policy.agency
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 89,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-400 uppercase tracking-widest text-[10px]",
                                            children: "Impact:"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 93,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImpactBadge"], {
                                            impact: policy.impact
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 94,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: policy.sourceUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-1.5 text-[#F29D38] hover:text-orange-500 font-medium ml-auto transition-colors",
                                    children: [
                                        "View Source ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                            lineNumber: 103,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                    lineNumber: 76,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
                lineNumber: 75,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildingBlockModal",
    ()=>BuildingBlockModal,
    "ScoreBreakdownModal",
    ()=>ScoreBreakdownModal,
    "generateBlockAnalysis",
    ()=>generateBlockAnalysis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
;
function ScoreBreakdownModal({ country, overallScore, onClose }) {
    const blocksList = Object.entries(country.buildingBlocks).map(([key, data])=>({
            key,
            ...data
        }));
    const getBlockName = (key)=>{
        const names = {
            service: 'Service Delivery',
            workforce: 'Health Workforce',
            info: 'Health Information',
            financing: 'Health Financing',
            medicines: 'Medicines & Tech',
            governance: 'Leadership & Gov.'
        };
        return names[key] || key;
    };
    const getBlockColor = (key)=>{
        const colors = {
            service: 'bg-blue-500',
            workforce: 'bg-violet-500',
            info: 'bg-cyan-500',
            financing: 'bg-emerald-500',
            medicines: 'bg-amber-500',
            governance: 'bg-red-500'
        };
        return colors[key] || 'bg-slate-500';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-5 border-b border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold font-heading text-slate-900",
                            children: "Score Breakdown"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl font-bold bg-white z-10 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore).replace('bg-', 'border-').replace('500', '400')} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScoreBg"])(overallScore).replace('bg-', 'text-')}`,
                                    children: overallScore
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-slate-500 mt-3 uppercase tracking-widest",
                                    children: "Overall Score"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: blocksList.map((block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600 font-medium w-36 truncate",
                                            children: getBlockName(block.key)
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-2 bg-slate-100 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-full rounded-full ${getBlockColor(block.key)}`,
                                                style: {
                                                    width: `${block.score / 5 * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                lineNumber: 54,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                            lineNumber: 53,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono-data font-semibold text-slate-800 w-8 text-right",
                                            children: block.score.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, block.key, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 51,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
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
function BuildingBlockModal({ blockKey, country, allCountries, onClose }) {
    const data = country.buildingBlocks[blockKey];
    if (!data) return null;
    const blockNames = {
        service: 'Service Delivery',
        workforce: 'Health Workforce',
        info: 'Health Information',
        financing: 'Health Financing',
        medicines: 'Medicines & Tech',
        governance: 'Leadership & Gov.'
    };
    const getBlockColor = (key)=>{
        const colors = {
            service: 'bg-blue-500',
            workforce: 'bg-violet-500',
            info: 'bg-cyan-500',
            financing: 'bg-emerald-500',
            medicines: 'bg-amber-500',
            governance: 'bg-red-500'
        };
        return colors[key] || 'bg-slate-500';
    };
    const colorClass = getBlockColor(blockKey);
    const textColor = colorClass.replace('bg-', 'text-');
    // Simple target mapping dict matching the guide
    const indicatorMeta = {
        hospitalBeds: {
            target: 5,
            unit: 'per 1,000'
        },
        facilities: {
            target: 1,
            unit: 'per 1,000'
        },
        specialists: {
            target: 1,
            unit: 'per 1,000'
        },
        doctors: {
            target: 1,
            unit: 'per 1,000'
        },
        nurses: {
            target: 3,
            unit: 'per 1,000'
        },
        healthWorkers: {
            target: 4.45,
            unit: 'per 1,000 (WHO SDG)'
        },
        dataCompleteness: {
            target: 100,
            unit: '%'
        },
        digitalReadiness: {
            target: 100,
            unit: '%'
        },
        totalExpenditure: {
            target: 15,
            unit: '% (Abuja)'
        },
        outOfPocket: {
            target: 15,
            unit: '% (invert)',
            invert: true
        },
        uhcIndex: {
            target: 100,
            unit: 'index'
        },
        essentialMeds: {
            target: 100,
            unit: '%'
        },
        vaccineRate: {
            target: 95,
            unit: '%'
        },
        compliance: {
            target: 100,
            unit: '%'
        },
        policyScore: {
            target: 100,
            unit: 'index'
        },
        regulatory: {
            target: 100,
            unit: 'index'
        },
        institutional: {
            target: 100,
            unit: 'index'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-6 border-b border-slate-100 flex items-start justify-between ${colorClass.replace('bg-', 'bg-opacity-10 bg-')}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-xl font-bold font-heading mb-1 ${textColor}`,
                                    children: blockNames[blockKey] || blockKey
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 font-medium",
                                    children: "Detailed indicators and regional benchmarks"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 bg-white/50 hover:bg-white text-slate-500 rounded-lg transition-colors border border-black/5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto p-6 space-y-8 bg-slate-50/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold uppercase tracking-widest text-slate-400 mb-4",
                                    children: "Indicators"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: Object.entries(data.indicators).map(([key, value])=>{
                                        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str)=>str.toUpperCase());
                                        const meta = indicatorMeta[key] || {
                                            target: 100,
                                            unit: ''
                                        };
                                        let numValue = typeof value === 'string' ? parseFloat(value) : value;
                                        if (isNaN(numValue)) numValue = 0;
                                        let percent = Math.min(numValue / meta.target * 100, 100);
                                        if (meta.invert) {
                                            percent = Math.max(100 - numValue, 0);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-4 rounded-xl border border-slate-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-500 flex flex-col sm:items-end gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Current: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "text-slate-900 font-mono-data",
                                                                            children: value
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                                            lineNumber: 178,
                                                                            columnNumber: 64
                                                                        }, this),
                                                                        " ",
                                                                        meta.unit.replace('(invert)', '')
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Target: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "text-slate-400 font-mono-data",
                                                                            children: meta.target
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                                            lineNumber: 179,
                                                                            columnNumber: 63
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 h-2 bg-slate-100 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full rounded-full transition-all duration-1000 ${colorClass}`,
                                                                style: {
                                                                    width: `${percent}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold font-mono-data w-8 text-right text-slate-400",
                                                            children: [
                                                                Math.round(percent),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                            lineNumber: 174,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold uppercase tracking-widest text-slate-400 mb-4",
                                    children: "Analysis"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-5 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-[#F29D38]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-700 leading-relaxed font-medium",
                                        children: generateBlockAnalysis(blockKey, country, allCountries)
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                        lineNumber: 201,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                                    lineNumber: 200,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                            lineNumber: 198,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
            lineNumber: 141,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx",
        lineNumber: 140,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomBar",
    ()=>BottomBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 12,
            columnNumber: 16
        }, this);
    }
    if (key === 'workforce') {
        const text = score >= 70 ? 'Good' : score >= 50 ? 'Medium' : 'Critical';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 17,
            columnNumber: 16
        }, this);
    }
    if (key === 'info') {
        const text = score >= 70 ? '70-100%' : score >= 41 ? '41-69%' : '0-40%';
        const color = score >= 70 ? 'text-green-500' : score >= 41 ? 'text-orange-500' : 'text-red-500';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 22,
            columnNumber: 16
        }, this);
    }
    if (key === 'financing') {
        const text = score >= 70 ? 'Top Percentile' : score >= 50 ? 'Middle Percentile' : 'Lower Percentile';
        const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
            children: text
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
            lineNumber: 27,
            columnNumber: 16
        }, this);
    }
    // Default fallback for medicines / governance
    const text = score >= 70 ? 'Stable' : score >= 50 ? 'At Risk' : 'Critical';
    const color = score >= 70 ? 'text-green-500' : score >= 50 ? 'text-orange-500' : 'text-red-500';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold font-mono-data', color),
        children: text
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
        lineNumber: 33,
        columnNumber: 12
    }, this);
}
function BottomBar() {
    const { country } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    if (!country) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[60px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex items-center px-4 gap-6 flex-shrink-0 z-10 overflow-x-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-slate-400 uppercase tracking-wide font-semibold",
                        children: "Country"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://flagcdn.com/w20/${country.code}.png`,
                                alt: `${country.name} flag`,
                                className: "w-5 h-4 object-cover rounded-sm",
                                width: 20,
                                height: 15
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-slate-900 border-b-2 border-orange-500 pb-0.5",
                                children: country.name
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-px h-8 bg-slate-200 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-slate-400 uppercase tracking-wide font-semibold",
                        children: "Total Cases"
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold text-orange-500 font-mono-data",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(country.totalCases)
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-px h-8 bg-slate-200 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOTTOM_BAR_INDICATORS"].map((indicator)=>{
                const block = country.buildingBlocks[indicator.key];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-slate-400 uppercase tracking-wide font-semibold",
                            children: indicator.label
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                            lineNumber: 80,
                            columnNumber: 25
                        }, this),
                        renderIndicator(indicator.key, block.score)
                    ]
                }, indicator.key, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                    lineNumber: 79,
                    columnNumber: 21
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto pl-4 border-l border-slate-200 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/country-profiles",
                    className: "text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors px-3 py-1.5 rounded-md hover:bg-slate-50 border border-transparent hover:border-slate-200",
                    children: "All Indicators →"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageLayout",
    ()=>PageLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$BottomBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/BottomBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function PageLayout({ sidebar, children, isMapView = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 overflow-hidden px-4 pb-4 gap-4",
        children: [
            sidebar,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 relative rounded-[10px]", isMapView ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    isMapView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$BottomBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BottomBar"], {}, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
                        lineNumber: 28,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/hooks/useCountryFilter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountryFilter",
    ()=>useCountryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useCountryFilter(countries) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All Regions');
    const [incomeLevel, setIncomeLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All Income Levels');
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = countries;
        if (region !== 'All Regions') {
            result = result.filter((c)=>c.region === region);
        }
        if (incomeLevel !== 'All Income Levels') {
            result = result.filter((c)=>c.incomeLevel === incomeLevel);
        }
        if (query) {
            const q = query.toLowerCase();
            result = result.filter((c)=>c.name.toLowerCase().includes(q));
        }
        return result;
    }, [
        countries,
        query,
        region,
        incomeLevel
    ]);
    return {
        query,
        setQuery,
        region,
        setRegion,
        incomeLevel,
        setIncomeLevel,
        filtered
    };
}
}),
"[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountrySidebar",
    ()=>CountrySidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryFilter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useCountryFilter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useSelectedCountry.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const allCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
function CountrySidebar({ selectedCountry, onCountrySelect } = {}) {
    const { query, setQuery, filtered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryFilter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCountryFilter"])(allCountries);
    const { selectedId: contextSelectedId, setSelectedId: contextSetSelectedId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useSelectedCountry$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedCountry"])();
    const currentSelectedId = selectedCountry !== undefined ? selectedCountry : contextSelectedId;
    const handleSelect = onCountrySelect || contextSetSelectedId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-slate-100 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            placeholder: "Search by Country",
                            className: "w-full border border-slate-200 rounded-lg pl-9 pr-9 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F29D38]/30 focus:border-[#F29D38] transition-all"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 space-y-0.5",
                    children: filtered.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSelect(country.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 text-sm font-medium transition-all', currentSelectedId === country.id ? 'bg-[#F29D38]/10 text-[#F29D38]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `https://flagcdn.com/w20/${country.code}.png`,
                                    alt: `${country.name} flag`,
                                    className: "w-6 h-4 object-cover rounded-[2px] shadow-sm flex-shrink-0",
                                    width: 24,
                                    height: 16
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: country.name
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, country.id, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                            lineNumber: 44,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-slate-100 bg-slate-50/50 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-400 text-center font-medium uppercase tracking-wider",
                    children: "Afri Health V0.0.01"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
"[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountryProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/hooks/useCountryProfile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$CountryProfileHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/CountryProfileHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$FiscalAlert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/FiscalAlert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$BuildingBlockCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/BuildingBlockCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$PolicyAccordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/PolicyAccordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$ProfileModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/country-profile/ProfileModals.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$CountrySidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/CountrySidebar.tsx [app-ssr] (ecmascript)");
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
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const id = typeof params.id === 'string' ? params.id : '';
    const { country, policies, overallScore, rank, hasFiscalAlert, openModal, setOpenModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$hooks$2f$useCountryProfile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCountryProfile"])(id);
    const allCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
    if (!country) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50 relative h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "w-12 h-12 text-slate-300 mb-4"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-slate-900 mb-2",
                    children: "Country Not Found"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 mb-6",
                    children: "The profile you are looking for does not exist or has been removed."
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push('/country-profiles'),
                    className: "px-4 py-2 bg-[#F29D38] hover:bg-orange-500 text-white rounded-lg font-semibold transition-colors",
                    children: "Return to Profiles"
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, this);
    }
    const handleCountrySelect = (cId)=>{
        router.push(`/country-profiles/${cId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageLayout"], {
        sidebar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$CountrySidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountrySidebar"], {
            selectedCountry: id,
            onCountrySelect: handleCountrySelect
        }, void 0, false, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 55,
            columnNumber: 30
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-b border-slate-200 px-6 py-3 flex items-center shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/country-profiles",
                        className: "flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#F29D38] transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 25
                            }, this),
                            "Back to Map"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$CountryProfileHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountryProfileHeader"], {
                            country: country,
                            overallScore: overallScore,
                            rank: rank,
                            onScoreClick: ()=>setOpenModal('scoreBreakdown')
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto px-6 py-8 space-y-8",
                            children: [
                                hasFiscalAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$FiscalAlert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiscalAlert"], {
                                    debtServiceRatio: country.debtServiceRatio,
                                    healthBudgetPercent: country.healthBudgetPercent
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold font-heading text-slate-900 mb-5 pl-1 border-l-4 border-[#F29D38]",
                                            children: "WHO 6 Building Blocks Performance"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                                            children: Object.entries(country.buildingBlocks).map(([key, data])=>{
                                                const names = {
                                                    service: 'Service Delivery',
                                                    workforce: 'Health Workforce',
                                                    info: 'Health Information',
                                                    financing: 'Health Financing',
                                                    medicines: 'Medicines & Tech',
                                                    governance: 'Leadership & Gov.'
                                                };
                                                const colors = {
                                                    service: 'bg-blue-500',
                                                    workforce: 'bg-violet-500',
                                                    info: 'bg-cyan-500',
                                                    financing: 'bg-emerald-500',
                                                    medicines: 'bg-amber-500',
                                                    governance: 'bg-red-500'
                                                };
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$BuildingBlockCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BuildingBlockCard"], {
                                                    blockKey: key,
                                                    name: names[key] || key,
                                                    data: data,
                                                    colorClass: colors[key] || 'bg-slate-500',
                                                    onClick: ()=>setOpenModal(key)
                                                }, key, false, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 41
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$PolicyAccordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolicyAccordion"], {
                                        policies: policies
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        openModal === 'scoreBreakdown' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$ProfileModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoreBreakdownModal"], {
                            country: country,
                            overallScore: overallScore,
                            onClose: ()=>setOpenModal(null)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                            lineNumber: 124,
                            columnNumber: 25
                        }, this),
                        openModal && openModal !== 'scoreBreakdown' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$country$2d$profile$2f$ProfileModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BuildingBlockModal"], {
                            blockKey: openModal,
                            country: country,
                            allCountries: allCountries,
                            onClose: ()=>setOpenModal(null)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                            lineNumber: 132,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/app/country-profiles/[id]/page.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Developer_planetary-constellation_src_2eb608e8._.js.map