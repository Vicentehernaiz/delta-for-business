/**
 * Slider component
 * shadcn/ui — Agent 1 scaffolds, run `npx shadcn-ui@latest add slider` to replace
 */

'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
  step?: number
}

export function Slider({ className, min = 0, max = 100, step = 1, ...props }: SliderProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      className={cn(
        'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
        className
      )}
      {...props}
    />
  )
}
