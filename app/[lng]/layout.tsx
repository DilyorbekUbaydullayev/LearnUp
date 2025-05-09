import type { Metadata } from 'next'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'
import { ClientProviders } from './providers'   // ← yangi fayl
import { ChildProps } from '@/types'
import { Toaster } from '@/components/ui/sonner'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100','300','400','500','700','900'],
  variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-space-grotesk',
})

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export const metadata: Metadata = {
  title: 'LearnUp',
  description: "Startup Praktikum's Next.js project",
   icons: {
    icon: '/logo.svg',      
    shortcut: '/logo.svg',
  },
}

interface Props extends ChildProps {
	params: { lng: string }
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ClientProviders lng={lng}>
          <Toaster position='top-center'/>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
