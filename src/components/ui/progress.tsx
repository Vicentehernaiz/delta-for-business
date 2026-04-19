/**
 * Progress component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add progress` to replace
 */

import { cn } from '@/lib/utils'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

export function Progress({ className, value = 0, max = 100, ...props }: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div
      className={cn('w-full h-2 bg-gray-200 rounded-full overflow-hidden', className)}
      {...props}
    >
      <div
        className="h-full bg-[var(--color-delta-red)] transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
