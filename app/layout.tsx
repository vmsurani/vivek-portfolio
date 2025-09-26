import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vivek - Frontend Developer | Futuristic Web Solutions',
  description: 'Portfolio of Vivek - Frontend Developer specializing in React, Next.js, TypeScript, and cutting-edge web technologies. Creating stunning, dark-themed, and immersive web experiences.',
  keywords: 'frontend developer, react developer, next.js, typescript, web development, portfolio, dark mode',
  authors: [{ name: 'Vivek' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>{children}</body>
    </html>
  )
}