/**
 * Accordion component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add accordion` to replace
 */

'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple'
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Accordion({ className, type = 'single', ...props }: AccordionProps) {
  const [activeId, setActiveId] = useState<string>('')

  return (
    <div className={cn('space-y-2', className)} {...props}>
      {/* Accordion items would be passed as children */}
    </div>
  )
}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <div className={cn('border border-gray-200 rounded-lg', className)} {...props} />
}

export function AccordionTrigger({ className, ...props }: AccordionTriggerProps) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between px-4 py-3 font-semibold hover:bg-gray-50',
        className
      )}
      {...props}
    />
  )
}

export function AccordionContent({ className, ...props }: AccordionContentProps) {
  return (
    <div
      className={cn('px-4 py-3 border-t border-gray-200 text-gray-700', className)}
      {...props}
    />
  )
}
