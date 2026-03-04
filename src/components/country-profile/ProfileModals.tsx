import { Country } from '@/types/country';
import { getScoreBg, formatCurrency, formatPercent } from '@/lib/utils';
import { X, ExternalLink } from 'lucide-react';
import { IndicatorProgressBar } from './IndicatorProgressBar';

interface ScoreBreakdownProps {
    country: Country;
    overallScore: number;
    onClose: () => void;
}

export function ScoreBreakdownModal({ country, overallScore, onClose }: ScoreBreakdownProps) {
    const blocksList = Object.entries(country.buildingBlocks).map(([key, data]) => ({ key, ...data }));

    const getBlockName = (key: string) => {
        const names: Record<string, string> = {
            service: 'Service Delivery', workforce: 'Health Workforce', info: 'Health Information',
            financing: 'Health Financing', medicines: 'Medicines & Tech', governance: 'Leadership & Gov.'
        };
        return names[key] || key;
    };

    const getBlockColor = (key: string) => {
        const colors: Record<string, string> = {
            service: 'bg-blue-500', workforce: 'bg-violet-500', info: 'bg-cyan-500',
            financing: 'bg-emerald-500', medicines: 'bg-amber-500', governance: 'bg-red-500'
        };
        return colors[key] || 'bg-slate-500';
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                    <h2 className="text-lg font-bold font-heading text-slate-900">Score Breakdown</h2>
                    <button onClick={onClose} className="p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                        <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-3xl font-bold bg-white z-10 ${getScoreBg(overallScore).replace('bg-', 'border-').replace('500', '400')} ${getScoreBg(overallScore).replace('bg-', 'text-')}`}>
                            {overallScore}
                        </div>
                        <p className="text-sm font-semibold text-slate-500 mt-3 uppercase tracking-widest">Overall Score</p>
                    </div>

                    <div className="space-y-4">
                        {blocksList.map(block => (
                            <div key={block.key} className="flex items-center gap-4 text-sm">
                                <span className="text-slate-600 font-medium w-36 truncate">{getBlockName(block.key)}</span>
                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${getBlockColor(block.key)}`} style={{ width: `${(block.score / 5) * 100}%` }} />
                                </div>
                                <span className="font-mono-data font-semibold text-slate-800 w-8 text-right">{block.score.toFixed(1)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface BuildingBlockModalProps {
    blockKey: string;
    country: Country;
    allCountries: Country[];
    onClose: () => void;
}

export function generateBlockAnalysis(blockKey: string, country: Country, allCountries: Country[]): string {
    const score = country.buildingBlocks[blockKey as keyof typeof country.buildingBlocks]?.score || 0;
    const regionPeers = allCountries.filter(c => c.region === country.region);

    // Calculate average
    const sum = regionPeers.reduce((acc, c) => acc + (c.buildingBlocks[blockKey as keyof typeof country.buildingBlocks]?.score || 0), 0);
    const regionAvg = regionPeers.length ? sum / regionPeers.length : score;

    const diff = Math.abs(score - (regionAvg / 5 * 100)).toFixed(1);
    // Note: scores are out of 100 in the display logic? Actually they are out of 100 on the card, wait.
    // Let's ensure the math is right: average of scores (0-100), diff, direction.
    // The previous implementation mapped from 5 points to 100 % in block card.
    // Let's just use the score directly.

    const direction = score >= regionAvg ? 'above' : 'below';
    const blockNames: Record<string, string> = {
        service: 'Service Delivery', workforce: 'Health Workforce', info: 'Health Information',
        financing: 'Health Financing', medicines: 'Medicines & Tech', governance: 'Leadership & Gov.'
    };

    const finalDiff = Math.abs(score - regionAvg).toFixed(1);

    return `${country.name}'s ${blockNames[blockKey] || blockKey} score of ${score.toFixed(1)} is ${finalDiff} points ${direction} the ${country.region} regional average of ${regionAvg.toFixed(1)}. ${score < 50 ? 'Significant investment is needed to meet baseline targets.' : score >= 70 ? 'Performance is strong relative to continental benchmarks.' : 'Moderate improvements could elevate this country into the high-performing tier.'}`;
}

export function BuildingBlockModal({ blockKey, country, allCountries, onClose }: BuildingBlockModalProps) {
    const data = country.buildingBlocks[blockKey as keyof typeof country.buildingBlocks];
    if (!data) return null;

    const blockNames: Record<string, string> = {
        service: 'Service Delivery', workforce: 'Health Workforce', info: 'Health Information',
        financing: 'Health Financing', medicines: 'Medicines & Tech', governance: 'Leadership & Gov.'
    };

    const getBlockColor = (key: string) => {
        const colors: Record<string, string> = {
            service: 'bg-blue-500', workforce: 'bg-violet-500', info: 'bg-cyan-500',
            financing: 'bg-emerald-500', medicines: 'bg-amber-500', governance: 'bg-red-500'
        };
        return colors[key] || 'bg-slate-500';
    };

    const colorClass = getBlockColor(blockKey);
    const textColor = colorClass.replace('bg-', 'text-');

    // Simple target mapping dict matching the guide
    const indicatorMeta: Record<string, { target: number, unit: string, invert?: boolean }> = {
        hospitalBeds: { target: 5, unit: 'per 1,000' },
        facilities: { target: 1, unit: 'per 1,000' },
        specialists: { target: 1, unit: 'per 1,000' },
        doctors: { target: 1, unit: 'per 1,000' },
        nurses: { target: 3, unit: 'per 1,000' },
        healthWorkers: { target: 4.45, unit: 'per 1,000 (WHO SDG)' },
        dataCompleteness: { target: 100, unit: '%' },
        digitalReadiness: { target: 100, unit: '%' },
        totalExpenditure: { target: 15, unit: '% (Abuja)' },
        outOfPocket: { target: 15, unit: '% (invert)', invert: true },
        uhcIndex: { target: 100, unit: 'index' },
        essentialMeds: { target: 100, unit: '%' },
        vaccineRate: { target: 95, unit: '%' },
        compliance: { target: 100, unit: '%' },
        policyScore: { target: 100, unit: 'index' },
        regulatory: { target: 100, unit: 'index' },
        institutional: { target: 100, unit: 'index' }
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>

                <div className={`p-6 border-b border-slate-100 flex items-start justify-between ${colorClass.replace('bg-', 'bg-opacity-10 bg-')}`}>
                    <div>
                        <h2 className={`text-xl font-bold font-heading mb-1 ${textColor}`}>
                            {blockNames[blockKey] || blockKey}
                        </h2>
                        <p className="text-sm text-slate-600 font-medium">Detailed indicators and regional benchmarks</p>
                    </div>
                    <button onClick={onClose} className="p-1.5 bg-white/50 hover:bg-white text-slate-500 rounded-lg transition-colors border border-black/5">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-y-auto p-6 space-y-8 bg-slate-50/30">

                    {/* Indicators Section */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Indicators</h3>
                        <div className="space-y-6">
                            {Object.entries(data.indicators).map(([key, value]) => {
                                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                                const meta = indicatorMeta[key] || { target: 100, unit: '' };

                                let numValue = typeof value === 'string' ? parseFloat(value) : value;
                                if (isNaN(numValue)) numValue = 0;

                                let percent = Math.min((numValue / meta.target) * 100, 100);
                                if (meta.invert) {
                                    percent = Math.max(100 - numValue, 0);
                                }

                                return (
                                    <div key={key} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <span className="font-semibold text-slate-800">{label}</span>
                                            <div className="text-xs text-slate-500 flex flex-col sm:items-end gap-0.5">
                                                <span>Current: <strong className="text-slate-900 font-mono-data">{value}</strong> {meta.unit.replace('(invert)', '')}</span>
                                                <span>Target: <strong className="text-slate-400 font-mono-data">{meta.target}</strong></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${colorClass}`}
                                                    style={{ width: `${percent}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-bold font-mono-data w-8 text-right text-slate-400">{Math.round(percent)}%</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Analysis Section */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Analysis</h3>
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-[#F29D38]">
                            <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                {generateBlockAnalysis(blockKey, country, allCountries)}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
