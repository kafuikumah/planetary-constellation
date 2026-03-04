import { AlertTriangle } from 'lucide-react';

interface Props {
    debtServiceRatio: number;
    healthBudgetPercent: number;
}

export function FiscalAlert({ debtServiceRatio, healthBudgetPercent }: Props) {
    if (debtServiceRatio <= healthBudgetPercent) return null;

    return (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
                <p className="text-sm font-semibold text-amber-800">Fiscal Stress Detected</p>
                <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">
                    Debt service ratio ({debtServiceRatio}%) exceeds health budget allocation
                    ({healthBudgetPercent}%), indicating potential constraints on health financing.
                </p>
            </div>
        </div>
    );
}
