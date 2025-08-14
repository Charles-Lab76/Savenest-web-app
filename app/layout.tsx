import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'SAVE NEST - Smart Finance Management',
  description: 'Build your financial future with SAVE NEST',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-inter antialiased bg-[#F9FAFB]`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}