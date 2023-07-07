/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bg_1': '#FFFFFF',
      'bg_2': '#F9F9F9',
      'tab_1': '#FFFFFF',

      'accent_1': '#E9ECEF',
      'accent_2': '#DEE2E6',

      'primary_text': '#022B3A',
      'primary_h1': '#ef476f',
      'primary_h2': '#ef476f',
      'primary_a': '#ef476f',
      'white': '#FFFFFF'
    }
    },
    extend: {
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
