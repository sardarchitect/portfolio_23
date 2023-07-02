import type { Metadata } from "next"
import './globals.css'

export const metadata: Metadata = {
  title: 'Arvinder Singh Resume',
  description: 'Machine Learning Engineering Portfolio',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}