/**
 * Tabs component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add tabs` to replace
 */

'use client'

import { useState, createContext, useContext } from 'react'
import { cn } from '@/lib/utils'

interface TabsProps {
  defaultValue: string
  children: React.ReactNode
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue>({ value: '', onValueChange: () => {} })

export function Tabs({ defaultValue, children }: TabsProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ value, onValueChange: setValue }}>
      {children}
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <div
      className={cn('flex border-b border-gray-200', className)}
      {...props}
    />
  )
}

export function TabsTrigger({ value, className, ...props }: TabsTriggerProps) {
  const context = useContext(TabsContext)

  return (
    <button
      onClick={() => context.onValueChange(value)}
      className={cn(
        'px-4 py-2 border-b-2 transition',
        context.value === value
          ? 'border-[var(--color-delta-red)] text-[var(--color-delta-red)]'
          : 'border-transparent text-gray-600',
        className
      )}
      {...props}
    />
  )
}

export function TabsContent({ value, className, ...props }: TabsContentProps) {
  const context = useContext(TabsContext)

  if (context.value !== value) return null

  return <div className={cn('mt-4', className)} {...props} />
}
