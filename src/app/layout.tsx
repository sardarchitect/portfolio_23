//Imports
import '@/styles/globals.css'
import type { Metadata } from "next"

import Header from '@/components/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@/components/Footer';

import "@fortawesome/fontawesome-svg-core/styles.css";
// import { Inconsolata } from 'next/font/google'

//Metadata
export const metadata: Metadata = {
  title: 'Arvinder Singh',
  description: 'Machine Learning Engineering Portfolio',
}

// const fontType = Inconsolata({
//   subsets: ['latin'],
//   display: 'swap'
// })

//RootLayout
export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <head />
      <body className="bg-gradient-to-bl from-bg_1 to-bg_2 p-5">
        <div className="grid m-auto justify-center md:grid-cols-3 md:gap-5 max-w-screen-lg">
          <Sidebar />
          <div className="space-y-5 mt-5 md:mt-0 md:col-start-2 md:col-end-4">
            <Header />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}