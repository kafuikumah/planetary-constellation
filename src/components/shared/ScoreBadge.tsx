'use client';

import { cn, getScoreBg } from '@/lib/utils';

interface ScoreBadgeProps {
    score: number;
    size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg',
};

export function ScoreBadge({ score, size = 'md' }: ScoreBadgeProps) {
    return (
        <div
            className={cn(
                'rounded-full text-white font-bold flex items-center justify-center flex-shrink-0',
                getScoreBg(score),
                sizeMap[size]
            )}
        >
            {score}
        </div>
    );
}
