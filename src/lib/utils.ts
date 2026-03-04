import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Country } from '@/types/country';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Score color helpers
export function getScoreColor(score: number): string {
  if (score >= 70) return 'text-green-500';
  if (score >= 50) return 'text-orange-500';
  return 'text-red-500';
}

export function getScoreBg(score: number): string {
  if (score >= 70) return 'bg-green-500';
  if (score >= 50) return 'bg-orange-500';
  return 'bg-red-500';
}

export function getScoreHex(score: number): string {
  if (score >= 70) return '#22C55E';
  if (score >= 60) return '#84CC16';
  if (score >= 50) return '#F97316';
  if (score >= 40) return '#EF4444';
  return '#991B1B';
}

export function getImpactColor(impact: 'Low' | 'Medium' | 'High'): string {
  const map = { Low: 'text-red-500', Medium: 'text-orange-500', High: 'text-green-500' };
  return map[impact];
}

// Formatting
export function formatNumber(n: number, decimals = 0): string {
  return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export function formatPercent(n: number): string {
  return `${n.toFixed(1)}%`;
}

export function formatCurrency(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}

export function formatRank(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function formatPopulation(millions: number): string {
  if (millions >= 1) return `${millions.toFixed(1)}M`;
  return `${(millions * 1000).toFixed(0)}K`;
}

export function getFlagUrl(code: string): string {
  return `https://flagcdn.com/w160/${code.toLowerCase()}.png`;
}

export function calculateOverallScore(buildingBlocks: Country['buildingBlocks']): number {
  const scores = Object.values(buildingBlocks).map(b => b.score);
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

export function average(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

export function sortBy<T>(array: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

export function debounce<T extends (...args: Parameters<T>) => void>(fn: T, wait: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  }) as T;
}

export function getScoreLabel(score: number): string {
  if (score >= 70) return 'Strong';
  if (score >= 60) return 'Good';
  if (score >= 50) return 'Moderate';
  if (score >= 40) return 'Weak';
  return 'Critical';
}
