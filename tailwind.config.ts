import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate'],
  },
};
export default config;
