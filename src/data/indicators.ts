import { BuildingBlock } from '@/types/indicator';

export const buildingBlocks: BuildingBlock[] = [
    {
        id: 'service',
        name: 'Service Delivery',
        color: '#3B82F6',
        icon: 'Heart',
        description: 'Delivery of effective, safe, quality health services to those who need them, when and where needed, with minimum waste of resources.',
        indicators: [
            { key: 'coverage', label: 'Service Coverage Index', unit: '%', target: 80 },
            { key: 'immunization', label: 'Immunization Coverage', unit: '%', target: 90 },
            { key: 'skilled_birth', label: 'Skilled Birth Attendance', unit: '%', target: 90 },
            { key: 'bed_density', label: 'Hospital Bed Density', unit: 'per 10k', target: 25 },
        ],
    },
    {
        id: 'workforce',
        name: 'Health Workforce',
        color: '#8B5CF6',
        icon: 'Users',
        description: 'Health workers who are responsive, fair and efficient to achieve the best health outcomes possible.',
        indicators: [
            { key: 'density', label: 'Physician Density', unit: 'per 1k', target: 2.3 },
            { key: 'nurse_density', label: 'Nurse/Midwife Density', unit: 'per 1k', target: 3.0 },
            { key: 'retention', label: 'Retention Rate', unit: '%', target: 80 },
            { key: 'training', label: 'Training Capacity', unit: 'per yr', target: 5000 },
        ],
    },
    {
        id: 'info',
        name: 'Health Information',
        color: '#06B6D4',
        icon: 'BarChart3',
        description: 'Production, analysis, dissemination and use of reliable and timely health information.',
        indicators: [
            { key: 'completeness', label: 'Data Completeness', unit: '%', target: 90 },
            { key: 'birth_registration', label: 'Birth Registration', unit: '%', target: 100 },
            { key: 'death_registration', label: 'Death Registration', unit: '%', target: 80 },
            { key: 'digital_systems', label: 'Digital Health Systems', unit: 'score', target: 4 },
        ],
    },
    {
        id: 'financing',
        name: 'Health Financing',
        color: '#F59E0B',
        icon: 'DollarSign',
        description: 'Raising adequate funds for health, to ensure people can use needed services and are protected from catastrophic expenditures.',
        indicators: [
            { key: 'pooling', label: 'Risk Pooling Coverage', unit: '%', target: 80 },
            { key: 'oop', label: 'Out-of-Pocket Expenditure', unit: '%', target: 20 },
            { key: 'govt_share', label: 'Gov. Health Expenditure', unit: '%GDP', target: 5 },
            { key: 'external_dep', label: 'External Dependency', unit: '%', target: 10 },
        ],
    },
    {
        id: 'medicines',
        name: 'Medical Products & Technologies',
        color: '#10B981',
        icon: 'Pill',
        description: 'Equitable access to essential medical products, vaccines and technologies of assured quality, safety, efficacy and cost-effectiveness.',
        indicators: [
            { key: 'availability', label: 'Essential Medicine Availability', unit: '%', target: 80 },
            { key: 'supply_chain', label: 'Supply Chain Reliability', unit: '%', target: 90 },
            { key: 'quality_assurance', label: 'Quality Assurance', unit: 'score', target: 4 },
            { key: 'local_production', label: 'Local Production', unit: '%', target: 30 },
        ],
    },
    {
        id: 'governance',
        name: 'Leadership & Governance',
        color: '#EF4444',
        icon: 'Building2',
        description: 'Ensuring strategic policy frameworks exist and are combined with effective oversight, regulation, and accountability.',
        indicators: [
            { key: 'accountability', label: 'Accountability Index', unit: '%', target: 80 },
            { key: 'policy_framework', label: 'Policy Framework', unit: 'score', target: 4 },
            { key: 'regulation', label: 'Regulatory Capacity', unit: 'score', target: 4 },
            { key: 'transparency', label: 'Transparency Index', unit: '%', target: 75 },
        ],
    },
];

export function getBuildingBlockById(id: string): BuildingBlock | undefined {
    return buildingBlocks.find(b => b.id === id);
}
