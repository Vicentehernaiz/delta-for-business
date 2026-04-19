'use client'

import { useEffect, useState } from 'react'

/**
 * Hook for tracking active section during scroll
 * Useful for navbar highlighting and table of contents
 * @param sectionIds Array of section IDs to track
 * @returns ID of currently active section
 */
export function useScrollSpy(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveId(id)
          return
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeId
}
