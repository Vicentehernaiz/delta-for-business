/**
 * Dropdown Menu component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add dropdown-menu` to replace
 */

'use client'

import { cn } from '@/lib/utils'

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function DropdownMenuTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn('', className)} {...props} />
}

export function DropdownMenuContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg',
        className
      )}
      {...props}
    />
  )
}

export function DropdownMenuItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-4 py-2 hover:bg-gray-100 cursor-pointer', className)}
      {...props}
    />
  )
}

export function DropdownMenuSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('my-1 h-px bg-gray-200', className)} {...props} />
}
