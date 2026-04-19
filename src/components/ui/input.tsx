/**
 * Input component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add input` to replace
 */

import { cn } from '@/lib/utils'

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--color-delta-blue)]',
        className
      )}
      {...props}
    />
  )
}
