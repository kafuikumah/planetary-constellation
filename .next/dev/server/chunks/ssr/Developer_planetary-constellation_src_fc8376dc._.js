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
"[project]/Developer/planetary-constellation/src/data/indicators.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Developer/planetary-constellation/src/app/policies/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoliciesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/policies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/countries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/data/indicators.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/ImpactBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/shared/CountryFlag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/planetary-constellation/src/components/layout/PageLayout.tsx [app-ssr] (ecmascript)");
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
const allCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCountriesAlphabetical"])();
function PoliciesPage() {
    const [subView, setSubView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('list');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [countryFilter, setCountryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [blockFilter, setBlockFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const filteredPolicies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = searchQuery ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchPolicies"])(searchQuery) : [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["policies"]
        ];
        if (countryFilter) result = result.filter((p)=>p.country === countryFilter);
        if (statusFilter) result = result.filter((p)=>p.status === statusFilter);
        if (blockFilter) result = result.filter((p)=>p.buildingBlocks.includes(blockFilter));
        return result;
    }, [
        searchQuery,
        countryFilter,
        statusFilter,
        blockFilter
    ]);
    const coverageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return allCountries.map((c)=>({
                country: c,
                policyCount: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["policies"].filter((p)=>p.country === c.id).length,
                blocksHit: new Set(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["policies"].filter((p)=>p.country === c.id).flatMap((p)=>p.buildingBlocks)).size
            })).sort((a, b)=>b.policyCount - a.policyCount);
    }, []);
    const timelineData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const byYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupBy"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$policies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["policies"], 'yearEnacted');
        return Object.entries(byYear).sort(([a], [b])=>Number(a) - Number(b)).map(([year, items])=>({
                year: Number(year),
                policies: items
            }));
    }, []);
    const sidebar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-[280px] bg-white rounded-[10px] shadow-sm border border-slate-200 flex flex-col flex-shrink-0 h-full p-4 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm font-bold text-slate-900 mb-4",
                children: "Filters"
            }, void 0, false, {
                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block",
                                children: "Select Country"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: countryFilter,
                                onChange: (e)=>setCountryFilter(e.target.value),
                                className: "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All Countries"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    allCountries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.id,
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 48
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block",
                                children: "Focus Areas"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-slate-50 cursor-not-allowed text-slate-400",
                                disabled: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "All Focus Areas"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block",
                                children: "Building Block"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: blockFilter,
                                onChange: (e)=>setBlockFilter(e.target.value),
                                className: "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All Building Blocks"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$indicators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildingBlocks"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: b.id,
                                            children: b.name
                                        }, b.id, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 50
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2 block",
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: statusFilter,
                                onChange: (e)=>setStatusFilter(e.target.value),
                                className: "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/30 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "All Statuses"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Active",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Draft",
                                        children: "Draft"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Archived",
                                        children: "Archived"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$layout$2f$PageLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageLayout"], {
        sidebar: sidebar,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold text-slate-900",
                            children: "Policy Library"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500 mt-1",
                            children: "Browse and analyze health policies across African nations"
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 border-b border-slate-200",
                    children: [
                        [
                            'list',
                            'Policy List'
                        ],
                        [
                            'coverage',
                            'Coverage Analysis'
                        ],
                        [
                            'timeline',
                            'Timeline'
                        ]
                    ].map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSubView(key),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-4 py-2.5 text-sm font-medium transition-colors border-b-2', subView === key ? 'text-orange-600 border-orange-500' : 'text-slate-500 border-transparent hover:text-slate-700'),
                            children: label
                        }, key, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                            lineNumber: 115,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this),
                subView === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Search policies...",
                                        className: "w-full border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 134,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: filteredPolicies.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-slate-100 p-8 text-center text-slate-400 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-8 h-8 mx-auto mb-2 opacity-40"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 37
                                    }, this),
                                    "No policies match your filters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                lineNumber: 149,
                                columnNumber: 33
                            }, this) : filteredPolicies.map((policy)=>{
                                const policyCountry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryById"])(policy.country);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-sm border border-slate-100 p-4 hover:shadow-md transition-shadow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-5 h-5 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-semibold text-slate-900",
                                                                children: policy.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-2 py-0.5 rounded-full text-[10px] font-medium', policy.status === 'Active' ? 'bg-green-50 text-green-600' : policy.status === 'Draft' ? 'bg-yellow-50 text-yellow-600' : 'bg-slate-100 text-slate-500'),
                                                                children: policy.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 line-clamp-2 mb-2",
                                                        children: policy.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 text-xs text-slate-400",
                                                        children: [
                                                            policyCountry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                                                        code: policyCountry.code,
                                                                        name: policyCountry.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    policyCountry.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: policy.yearEnacted
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    "Impact: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImpactBadge"], {
                                                                        impact: policy.impact
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 107
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 45
                                    }, this)
                                }, policy.id, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 41
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                            lineNumber: 147,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true),
                subView === 'coverage' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400",
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400",
                                                children: "Policies"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400",
                                                children: "Blocks Covered"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-center px-3 py-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400",
                                                children: "Coverage"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: coverageData.filter((d)=>d.policyCount > 0).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-slate-50 hover:bg-slate-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                                            code: d.country.code,
                                                            name: d.country.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-slate-800",
                                                            children: d.country.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center px-3 py-3 font-mono-data font-semibold text-slate-700",
                                                    children: d.policyCount
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center px-3 py-3 font-mono-data text-slate-600",
                                                    children: [
                                                        d.blocksHit,
                                                        "/6"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center px-3 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-slate-100 rounded-full h-2 max-w-[120px] mx-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-orange-500 h-2 rounded-full transition-all",
                                                            style: {
                                                                width: `${d.blocksHit / 6 * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, d.country.id, true, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                            lineNumber: 198,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                        lineNumber: 197,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                    lineNumber: 196,
                    columnNumber: 21
                }, this),
                subView === 'timeline' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: timelineData.map(({ year, policies: yearPolicies })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px flex-1 bg-slate-200 mt-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 pb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-slate-900 font-mono-data mb-2",
                                            children: year
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: yearPolicies.map((p)=>{
                                                const pc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$data$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryById"])(p.country);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-lg border border-slate-100 p-3 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            pc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$CountryFlag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CountryFlag"], {
                                                                code: pc.code,
                                                                name: pc.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 64
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-slate-800",
                                                                children: p.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$planetary$2d$constellation$2f$src$2f$components$2f$shared$2f$ImpactBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImpactBadge"], {
                                                                impact: p.impact
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 53
                                                    }, this)
                                                }, p.id, false, {
                                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 49
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, year, true, {
                            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                            lineNumber: 235,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
                    lineNumber: 233,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
            lineNumber: 106,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/planetary-constellation/src/app/policies/page.tsx",
        lineNumber: 105,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Developer_planetary-constellation_src_fc8376dc._.js.map