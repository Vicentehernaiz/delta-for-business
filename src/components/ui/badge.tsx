/**
 * Badge component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add badge` to replace
 */

import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        {
          'default': 'bg-blue-100 text-blue-900',
          'secondary': 'bg-gray-100 text-gray-900',
          'destructive': 'bg-red-100 text-red-900',
        }[variant],
        className
      )}
      {...props}
    />
  )
}
