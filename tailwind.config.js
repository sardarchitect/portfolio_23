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
      'bg_1': '#211339',
      'bg_2': '#000000',
      'accent_1': '#ffff1a',
      'primary_text': '#FFFBE7',
      'primary_h1': '#FFFFFF',
      'white': '#FFFFFF'
    }
  },
  extend: {
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
