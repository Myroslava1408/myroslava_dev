import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Myroslava Yatsuk – Front-End Developer',
  description:
    'Front-End Developer building clean, scalable, and high-performance web apps with React and Next.js.',
  keywords: ['Front-End Developer', 'React', 'Next.js', 'JavaScript', 'Portfolio', 'Ukraine'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='font-geistSans antialiased'>{children}</body>
    </html>
  )
}
