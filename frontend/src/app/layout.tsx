// styles
import '../styles/global.css'
import { Inter } from 'next/font/google'
// import Layout from '../components/layout'

// Constants
import { CMS_NAME } from '../lib/constants'

// Types
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chrap App',
  description: 'Welcome to Chrap App',
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
