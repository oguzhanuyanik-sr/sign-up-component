import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    colors: {
      'red-100': '#FF7979',
      'green-100': '#38CC8B',
      'purple-100': '#5E54A4',
      'grey-100': '#3D3B48',
    },
    fontFamily: {},
    boxShadow: {},
    backgroundImage: {},
    container: {
      center: true,
      padding: '2rem',
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
  },
  plugins: [],
};
export default config;
