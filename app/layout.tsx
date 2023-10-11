import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CarRental',
  description: 'CarRental app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative bg-slate-400'>
          <Navbar/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
