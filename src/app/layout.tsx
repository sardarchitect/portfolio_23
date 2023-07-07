import '@/styles/globals.css'

import type { Metadata } from "next"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Profile from '@/components/Profile';
import Information from '@/components/Information';
import Skills from '@/components/Skills';
import Header from '@/components/Header';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Arvinder Singh',
  description: 'Machine Learning Engineering Portfolio',
}

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-bl from-bg_1 to-bg_2 py-5">
        <div className="grid m-auto justify-center md:grid-cols-3 md:gap-5 max-w-screen-lg">
          <Sidebar />
          <div className="space-y-5 md:col-start-2 md:col-end-4">
            <Header />
            {children}
          </div>
        </div>
        <footer className='flex justify-center'>
          <p className='mt-5'>Arvinder Singh - 2023</p>
        </footer>
      </body>
    </html>
  )
}

function Sidebar() {
  return (
    <div className="space-y-5 md:col-start-1 md:col-end-2">
      <Profile />
      <Information />
      <Skills />
    </div>
  )
}