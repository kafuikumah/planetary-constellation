import { Policy } from '@/types/policy';

export const policies: Policy[] = [
    // Nigeria
    { id: 'nga-001', title: 'National Health Act 2014', country: 'nga', category: 'Legislation', buildingBlocks: ['governance', 'financing'], yearEnacted: 2014, status: 'Active', impact: 'High', agency: 'Federal Ministry of Health', description: 'Establishes a framework for the regulation, development, and management of a national health system.', sourceUrl: '#' },
    { id: 'nga-002', title: 'Basic Health Care Provision Fund', country: 'nga', category: 'Financing', buildingBlocks: ['financing', 'service'], yearEnacted: 2018, status: 'Active', impact: 'High', agency: 'National Primary Health Care Development Agency', description: 'Funding mechanism to provide basic minimum package of health services.', sourceUrl: '#' },
    { id: 'nga-003', title: 'National Drug Policy', country: 'nga', category: 'Medicines', buildingBlocks: ['medicines'], yearEnacted: 2005, status: 'Active', impact: 'Medium', agency: 'NAFDAC', description: 'Regulates drug manufacturing, importation and distribution.', sourceUrl: '#' },
    { id: 'nga-004', title: 'National Health Insurance Authority Act', country: 'nga', category: 'Financing', buildingBlocks: ['financing', 'governance'], yearEnacted: 2022, status: 'Active', impact: 'High', agency: 'NHIA', description: 'Mandatory health insurance coverage for all Nigerians.', sourceUrl: '#' },
    // South Africa
    { id: 'zaf-001', title: 'National Health Insurance Bill', country: 'zaf', category: 'Financing', buildingBlocks: ['financing', 'service', 'governance'], yearEnacted: 2024, status: 'Active', impact: 'High', agency: 'Department of Health', description: 'Universal health coverage through a single-payer national health insurance fund.', sourceUrl: '#' },
    { id: 'zaf-002', title: 'National Drug Policy for South Africa', country: 'zaf', category: 'Medicines', buildingBlocks: ['medicines'], yearEnacted: 1996, status: 'Active', impact: 'High', agency: 'Department of Health', description: 'Framework for ensuring access to affordable essential medicines.', sourceUrl: '#' },
    { id: 'zaf-003', title: 'Human Resources for Health Strategy', country: 'zaf', category: 'Workforce', buildingBlocks: ['workforce'], yearEnacted: 2020, status: 'Active', impact: 'Medium', agency: 'Department of Health', description: 'Strategy to address health worker shortages and distribution.', sourceUrl: '#' },
    // Kenya
    { id: 'ken-001', title: 'Kenya Health Policy 2014–2030', country: 'ken', category: 'Strategy', buildingBlocks: ['governance', 'service'], yearEnacted: 2014, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Long-term health sector strategic direction toward universal health coverage.', sourceUrl: '#' },
    { id: 'ken-002', title: 'Community Health Strategy', country: 'ken', category: 'Service', buildingBlocks: ['service', 'workforce'], yearEnacted: 2020, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Framework for community health services delivery.', sourceUrl: '#' },
    { id: 'ken-003', title: 'Kenya Digital Health Blueprint', country: 'ken', category: 'Information', buildingBlocks: ['info'], yearEnacted: 2021, status: 'Active', impact: 'Medium', agency: 'Ministry of Health', description: 'Digital transformation strategy for health information systems.', sourceUrl: '#' },
    // Rwanda
    { id: 'rwa-001', title: 'Community-Based Health Insurance (Mutuelle de Santé)', country: 'rwa', category: 'Financing', buildingBlocks: ['financing', 'service'], yearEnacted: 2004, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Community-based health insurance achieving near-universal coverage.', sourceUrl: '#' },
    { id: 'rwa-002', title: 'Health Sector Strategic Plan IV', country: 'rwa', category: 'Strategy', buildingBlocks: ['governance', 'service', 'workforce'], yearEnacted: 2018, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Five-year strategic plan for health sector development.', sourceUrl: '#' },
    // Ghana
    { id: 'gha-001', title: 'National Health Insurance Scheme', country: 'gha', category: 'Financing', buildingBlocks: ['financing', 'service'], yearEnacted: 2003, status: 'Active', impact: 'High', agency: 'NHIA Ghana', description: 'Social health insurance program providing coverage for basic healthcare.', sourceUrl: '#' },
    { id: 'gha-002', title: 'Ghana Health Service Act', country: 'gha', category: 'Governance', buildingBlocks: ['governance'], yearEnacted: 1996, status: 'Active', impact: 'High', agency: 'Ghana Health Service', description: 'Establishment of the Ghana Health Service for implementing health policies.', sourceUrl: '#' },
    // Egypt
    { id: 'egy-001', title: 'Universal Health Insurance Law', country: 'egy', category: 'Financing', buildingBlocks: ['financing', 'governance'], yearEnacted: 2018, status: 'Active', impact: 'High', agency: 'Universal Health Insurance Authority', description: 'Progressive rollout of mandatory health insurance for all Egyptian citizens.', sourceUrl: '#' },
    { id: 'egy-002', title: '100 Million Healthy Lives Initiative', country: 'egy', category: 'Service', buildingBlocks: ['service'], yearEnacted: 2019, status: 'Active', impact: 'High', agency: 'Ministry of Health and Population', description: 'Mass screening campaign for Hepatitis C, NCDs, and other conditions.', sourceUrl: '#' },
    // Ethiopia
    { id: 'eth-001', title: 'Health Extension Program', country: 'eth', category: 'Service', buildingBlocks: ['service', 'workforce'], yearEnacted: 2003, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Community-based primary healthcare delivery through health extension workers.', sourceUrl: '#' },
    { id: 'eth-002', title: 'Community-Based Health Insurance', country: 'eth', category: 'Financing', buildingBlocks: ['financing'], yearEnacted: 2011, status: 'Active', impact: 'Medium', agency: 'Ethiopian Health Insurance Agency', description: 'Voluntary health insurance for informal sector workers.', sourceUrl: '#' },
    // Morocco
    { id: 'mar-001', title: 'Amine (Generalized Mandatory Health Insurance)', country: 'mar', category: 'Financing', buildingBlocks: ['financing', 'governance'], yearEnacted: 2022, status: 'Active', impact: 'High', agency: 'National Health Insurance Agency', description: 'Extension of mandatory health insurance coverage to all citizens.', sourceUrl: '#' },
    // Tunisia
    { id: 'tun-001', title: 'National Health Insurance Fund (CNAM)', country: 'tun', category: 'Financing', buildingBlocks: ['financing'], yearEnacted: 2004, status: 'Active', impact: 'High', agency: 'CNAM', description: 'Unified national health insurance system.', sourceUrl: '#' },
    // Tanzania
    { id: 'tza-001', title: 'Primary Health Care Investment Plan', country: 'tza', category: 'Service', buildingBlocks: ['service', 'financing'], yearEnacted: 2020, status: 'Active', impact: 'Medium', agency: 'Ministry of Health', description: 'Investment plan focusing on strengthening primary healthcare facilities.', sourceUrl: '#' },
    // Senegal
    { id: 'sen-001', title: 'Universal Health Coverage Plan (Programme de Couverture Maladie Universelle)', country: 'sen', category: 'Financing', buildingBlocks: ['financing', 'service'], yearEnacted: 2013, status: 'Active', impact: 'High', agency: 'Agence de la Couverture Maladie Universelle', description: 'Community-based health insurance expansion toward UHC.', sourceUrl: '#' },
    // Botswana
    { id: 'bwa-001', title: 'Integrated Health Service Plan', country: 'bwa', category: 'Service', buildingBlocks: ['service', 'governance'], yearEnacted: 2010, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Comprehensive plan for integrating health services delivery.', sourceUrl: '#' },
    // Algeria
    { id: 'dza-001', title: 'National Health Sector Strategy', country: 'dza', category: 'Strategy', buildingBlocks: ['governance', 'service'], yearEnacted: 2015, status: 'Active', impact: 'Medium', agency: 'Ministry of Health, Population and Hospital Reform', description: 'Strategic plan for modernizing Algerias health system.', sourceUrl: '#' },
    // Uganda
    { id: 'uga-001', title: 'National Health Policy', country: 'uga', category: 'Strategy', buildingBlocks: ['governance', 'financing', 'service'], yearEnacted: 2010, status: 'Active', impact: 'Medium', agency: 'Ministry of Health', description: 'Framework for health sector development and universal access.', sourceUrl: '#' },
    // Mauritius
    { id: 'mus-001', title: 'Health Sector Strategy 2020–2024', country: 'mus', category: 'Strategy', buildingBlocks: ['governance', 'service', 'workforce'], yearEnacted: 2020, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Multi-year strategy for health system strengthening.', sourceUrl: '#' },
    // Seychelles
    { id: 'syc-001', title: 'National Health Strategic Plan', country: 'syc', category: 'Strategy', buildingBlocks: ['governance', 'service'], yearEnacted: 2016, status: 'Active', impact: 'High', agency: 'Ministry of Health', description: 'Strategic plan for health improvement and service delivery.', sourceUrl: '#' },
    // Namibia
    { id: 'nam-001', title: 'National Health Policy Framework', country: 'nam', category: 'Strategy', buildingBlocks: ['governance'], yearEnacted: 2010, status: 'Active', impact: 'Medium', agency: 'Ministry of Health and Social Services', description: 'Policy framework guiding health sector development.', sourceUrl: '#' },
    // Zambia
    { id: 'zmb-001', title: 'National Health Insurance Act', country: 'zmb', category: 'Financing', buildingBlocks: ['financing', 'governance'], yearEnacted: 2018, status: 'Active', impact: 'Medium', agency: 'National Health Insurance Management Authority', description: 'Mandatory health insurance program for formal and informal sectors.', sourceUrl: '#' },
    // Cameroon
    { id: 'cmr-001', title: 'Health Sector Strategy 2016–2027', country: 'cmr', category: 'Strategy', buildingBlocks: ['governance', 'service'], yearEnacted: 2016, status: 'Active', impact: 'Medium', agency: 'Ministry of Public Health', description: 'Long-term health sector development strategy.', sourceUrl: '#' },
    // Angola
    { id: 'ago-001', title: 'National Health Development Plan', country: 'ago', category: 'Strategy', buildingBlocks: ['governance', 'service', 'financing'], yearEnacted: 2012, status: 'Active', impact: 'Low', agency: 'Ministry of Health', description: 'Five-year plan for rebuilding and developing health systems.', sourceUrl: '#' },
];

export function getPoliciesByCountry(countryId: string): Policy[] {
    return policies.filter(p => p.country === countryId);
}

export function getPoliciesByBuildingBlock(blockId: string): Policy[] {
    return policies.filter(p => p.buildingBlocks.includes(blockId));
}

export function getPoliciesByStatus(status: Policy['status']): Policy[] {
    return policies.filter(p => p.status === status);
}

export function searchPolicies(query: string): Policy[] {
    const q = query.toLowerCase();
    return policies.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
}
