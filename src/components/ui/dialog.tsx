/**
 * Dialog component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add dialog` to replace
 */

'use client'

import { cn } from '@/lib/utils'

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Dialog({ open = false, onOpenChange, children }: DialogProps) {
  return <div>{children}</div>
}

export function DialogTrigger({ className, ...props }: DialogTriggerProps) {
  return <button className={cn('', className)} {...props} />
}

export function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-black/50 flex items-center justify-center',
        className
      )}
      {...props}
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">{/* content */}</div>
    </div>
  )
}

export function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4', className)} {...props} />
}

export function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('text-lg font-bold', className)} {...props} />
}

export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-gray-600', className)} {...props} />
}

export function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex gap-2 justify-end mt-6', className)} {...props} />
}
