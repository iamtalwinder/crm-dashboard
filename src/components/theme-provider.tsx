'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'
import { Theme } from '../lib/typings'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const searchParams = useSearchParams()
  const themeParam = searchParams?.get('theme')
  const [forcedTheme, setForcedTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (themeParam === Theme.LIGHT || themeParam === Theme.DARK) {
      setForcedTheme(themeParam)
    }
  }, [themeParam])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={Theme.SYSTEM}
      enableSystem
      forcedTheme={forcedTheme}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
