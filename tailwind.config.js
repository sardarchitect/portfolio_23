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
      'bg_1': '#101411',
      'bg_2': '#222624',
      'tab_1': '#2E3732',

      'accent_1': '#22577A',
      'accent_2': '#38A3A5',

      'primary_text': '#D3D3D3',
      'primary_h1': '#FFFFFF',
      'primary_h2': '#D2D2D2',
      'primary_a': '#CBCBCB',
    }
    },
    extend: {
  },
  plugins: [],
}
