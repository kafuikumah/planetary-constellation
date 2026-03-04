import { Country } from '@/types/country';
import { getScoreBg, formatCurrency, formatPercent, formatPopulation, formatRank } from '@/lib/utils';
import { CountryFlag } from '@/components/shared/CountryFlag';

interface Props {
    country: Country;
    overallScore: number;
    rank: number;
    onScoreClick: () => void;
}

export function CountryProfileHeader({ country, overallScore, rank, onScoreClick }: Props) {
    return (
        <div className="bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">

                {/* Left region: Flag & Name */}
                <div className="flex items-center gap-4 min-w-[300px]">
                    <CountryFlag
                        code={country.code}
                        name={country.name}
                        size="lg"
                        className="w-16 h-12 rounded object-cover shadow-sm border border-slate-100"
                    />
                    <div>
                        <h1 className="text-2xl font-bold font-heading text-slate-900 leading-tight">
                            {country.name}
                        </h1>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {country.region}
                            </span>
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {country.rec}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Center region: Quick Stats Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 flex-1 w-full border-y lg:border-y-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-8">
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Population</p>
                        <p className="text-lg font-semibold font-mono-data text-slate-900">{formatPopulation(country.population)}</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Health Budget</p>
                        <p className="text-lg font-semibold font-mono-data text-slate-900">{formatPercent(country.healthBudgetPercent)}</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Per Capita</p>
                        <p className="text-lg font-semibold font-mono-data text-slate-900">{formatCurrency(country.healthExpPerCapita)}</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Debt Service Ratio</p>
                        <p className="text-lg font-semibold font-mono-data text-slate-900">{formatPercent(country.debtServiceRatio)}</p>
                    </div>
                </div>

                {/* Right region: Overall Score */}
                <div className="flex flex-col items-center min-w-[160px]">
                    <button
                        onClick={onScoreClick}
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-sm hover:ring-4 hover:ring-opacity-50 hover:ring-offset-2 hover:scale-105 transition-all ${getScoreBg(overallScore)} hover:${getScoreBg(overallScore)}`}
                    >
                        {overallScore}
                    </button>
                    <p className="text-xs font-semibold text-slate-400 text-center mt-2 uppercase tracking-wide">Overall Score</p>
                    <p className="text-[11px] font-semibold text-slate-500 mt-1 bg-slate-100 px-2 py-0.5 rounded-sm">
                        #{formatRank(rank)} in Africa
                    </p>
                </div>

            </div>
        </div>
    );
}
