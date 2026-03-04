'use client';

import { cn, getImpactColor } from '@/lib/utils';

interface ImpactBadgeProps {
    impact: 'Low' | 'Medium' | 'High';
}

export function ImpactBadge({ impact }: ImpactBadgeProps) {
    return (
        <span className={cn('text-xs font-semibold', getImpactColor(impact))}>
            {impact}
        </span>
    );
}
