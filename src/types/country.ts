export interface BuildingBlockData {
  score: number;
  trend: 'up' | 'down' | 'stable';
  indicators: Record<string, number | string>;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  region: string;
  rec: string;
  incomeLevel: string;
  population: number;
  healthBudgetPercent: number;
  healthGdpPercent: number;
  debtServiceRatio: number;
  healthExpPerCapita: number;
  afriHealthRank: number;
  totalCases: number;
  buildingBlocks: {
    service: BuildingBlockData;
    workforce: BuildingBlockData;
    info: BuildingBlockData;
    financing: BuildingBlockData;
    medicines: BuildingBlockData;
    governance: BuildingBlockData;
  };
}
