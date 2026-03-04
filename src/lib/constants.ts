// Score thresholds
export const SCORE_HIGH_THRESHOLD = 70;
export const SCORE_MID_THRESHOLD = 50;

// Color maps
export const SCORE_COLORS = {
    high: '#22C55E',
    mid: '#F97316',
    low: '#EF4444',
} as const;

export const IMPACT_COLORS = {
    High: 'text-green-500',
    Medium: 'text-orange-500',
    Low: 'text-red-500',
} as const;

export const BUILDING_BLOCK_COLORS: Record<string, string> = {
    service: '#3B82F6',
    workforce: '#8B5CF6',
    info: '#06B6D4',
    financing: '#F59E0B',
    medicines: '#10B981',
    governance: '#EF4444',
};

// Region lists
export const REGIONS = [
    'North Africa',
    'West Africa',
    'Central Africa',
    'East Africa',
    'Southern Africa',
] as const;

export const RECS = [
    'ECOWAS',
    'SADC',
    'EAC',
    'ECCAS',
    'COMESA',
    'IGAD',
    'UMA',
] as const;

export const INCOME_LEVELS = [
    'Low',
    'Lower-middle',
    'Upper-middle',
    'High',
] as const;

// Map legend items
export const MAP_LEGEND_ITEMS = [
    { color: '#22C55E', label: 'Strong (≥70)' },
    { color: '#84CC16', label: 'Good (60–69)' },
    { color: '#F97316', label: 'Moderate (50–59)' },
    { color: '#EF4444', label: 'Weak (40–49)' },
    { color: '#991B1B', label: 'Critical (<40)' },
];

// Bottom bar indicator labels
export const BOTTOM_BAR_INDICATORS = [
    { key: 'service', label: 'SERVICE DELIVERY' },
    { key: 'workforce', label: 'WORKFORCE' },
    { key: 'info', label: 'HEALTH INFO' },
    { key: 'financing', label: 'FINANCING' },
    { key: 'medicines', label: 'MEDICINES' },
    { key: 'governance', label: 'GOVERNANCE' },
] as const;
