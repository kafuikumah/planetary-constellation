export interface Policy {
    id: string;
    title: string;
    country: string;
    category: string;
    buildingBlocks: string[];
    yearEnacted: number;
    status: 'Active' | 'Draft' | 'Archived';
    impact: 'Low' | 'Medium' | 'High';
    agency: string;
    description: string;
    sourceUrl: string;
}
