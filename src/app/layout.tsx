import './globals.css'

import type { Metadata } from "next"

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Profile from '@/components/Profile';
import Information from '@/components/Information';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Arvinder Singh Resume',
  description: 'Machine Learning Engineering Portfolio',
}

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-bl from-bg_1 to-bg_2">
          <div className="grid m-auto justify-center md:grid-cols-3 md:gap-5 max-w-screen-lg">
            <div className="space-y-5 md:col-start-1 md:col-end-2">
              <Profile />
              <Information />
              <Skills />
            </div>
            <div className="space-y-5 md:col-start-2 md:col-end-4">
              <AboutMe />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
