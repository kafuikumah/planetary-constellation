import { BuildingBlockData } from '@/types/country';
import { ScoreBadge } from '@/components/shared/ScoreBadge';
import { IndicatorProgressBar } from './IndicatorProgressBar';
import { Activity, Users, FileText, Banknote, Pill, Scale } from 'lucide-react';

interface Props {
    blockKey: string;
    name: string;
    data: BuildingBlockData;
    colorClass: string;
    onClick: () => void;
}

const ICONS: Record<string, React.ReactNode> = {
    service: <Activity className="w-5 h-5" />,
    workforce: <Users className="w-5 h-5" />,
    info: <FileText className="w-5 h-5" />,
    financing: <Banknote className="w-5 h-5" />,
    medicines: <Pill className="w-5 h-5" />,
    governance: <Scale className="w-5 h-5" />
};

export function BuildingBlockCard({ blockKey, name, data, colorClass, onClick }: Props) {
    const icon = ICONS[blockKey] || <Activity className="w-5 h-5" />;

    // Extract top 3 indicators for the mini preview
    const indicatorEntries = Object.entries(data.indicators).slice(0, 3);

    return (
        <div
            onClick={onClick}
            className={`rounded-xl border border-slate-100 shadow-sm p-5 cursor-pointer hover:shadow-md transition-all bg-white group hover:border-${colorClass.replace('bg-', '')}/30`}
        >
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClass.replace('bg-', 'bg-opacity-10 text-')} ${colorClass.replace('bg-', 'text-')} bg-opacity-20`}>
                        {/* We use inline styles to enforce opacity for Tailwind dynamic classes if needed, 
                            but keeping it simple with defined color classes is safer. 
                            The guide asks for bg-[color]/10. We will handle this explicitly in the caller or here. */}
                        {icon}
                    </div>
                    <span className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors w-24 leading-tight">{name}</span>
                </div>
                <ScoreBadge score={data.score} size="md" />
            </div>

            <div className="space-y-3">
                {indicatorEntries.map(([key, value]) => {
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                    // Simple target resolution mapping
                    const targets: Record<string, number> = {
                        hospitalBeds: 5, facilities: 1, specialists: 1, doctors: 1, nurses: 3,
                        healthWorkers: 4.45, dataCompleteness: 100, digitalReadiness: 100,
                        totalExpenditure: 15, outOfPocket: 15, uhcIndex: 100, essentialMeds: 100,
                        vaccineRate: 95, compliance: 100, policyScore: 100, regulatory: 100, institutional: 100
                    };
                    const target = targets[key] || 100;

                    let numValue = typeof value === 'string' ? parseFloat(value) : value;
                    if (isNaN(numValue)) numValue = 0;

                    let percent = Math.min((numValue / target) * 100, 100);
                    if (key === 'outOfPocket') percent = Math.max(100 - numValue, 0);

                    return (
                        <IndicatorProgressBar
                            key={key}
                            label={label}
                            value={value}
                            percent={percent}
                            colorClass={colorClass}
                        />
                    );
                })}
            </div>
        </div>
    );
}
