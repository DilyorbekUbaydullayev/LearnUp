'use client'

import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { CookiesProvider } from 'react-cookie'
import { ThemeProvider } from '@/components/providers/theme.provider'
import { localization } from '@/lib/utils'

interface ClientProvidersProps {
  children: React.ReactNode
  lng: string
}

export function ClientProviders({ children, lng }: ClientProvidersProps) {
  // Clerk uchun localization
  const local = localization(lng)

  return (
    <ClerkProvider localization={local}>
      <CookiesProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </CookiesProvider>
    </ClerkProvider>
  )
}
