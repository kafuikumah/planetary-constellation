export interface IndicatorDef {
    key: string;
    label: string;
    unit: string;
    target: number;
}

export interface BuildingBlock {
    id: string;
    name: string;
    color: string;
    icon: string;
    description: string;
    indicators: IndicatorDef[];
}
