import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dipassio AI | Your Digital assistant',
  description: 'AI for your Digital Passport Through Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='light'>
        <body className={cn('min-h-screen font-sans antialiased grainy',
        inter.className
        )}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
