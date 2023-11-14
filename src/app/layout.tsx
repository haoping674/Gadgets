import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '廢廢功能庫',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-tw">
      <body className={inter.className}>
        {/* <Header /> */}
        <main className="bg-white text-neutral-800">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
