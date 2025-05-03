import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Theme } from '@/lib/typings'

export function useResolvedTheme() {
  const { theme, systemTheme, forcedTheme } = useTheme()

  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const actualTheme = forcedTheme ?? theme
  const resolved = actualTheme === Theme.SYSTEM ? systemTheme : actualTheme

  const isDarkTheme = resolved === Theme.DARK && isHydrated

  return {
    theme: resolved as Theme.LIGHT | Theme.DARK,
    isDarkTheme,
    isHydrated
  }
}
