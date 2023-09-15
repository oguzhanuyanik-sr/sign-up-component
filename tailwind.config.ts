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
      'green-100': '#40E79E',
      'green-200': '#38CC8B',
      'green-300': '#1D9360',
      'purple-100': '#BAB7D4',
      'purple-200': '#5E54A4',
      'purple-300': '#776BCA',
      'grey-100': 'rgba(61, 59, 72, 0.7)',
      'grey-200': 'rgba(61, 59, 72, 1)',
      'white-100': '#FFFFFF',
      'white-200': '#DEDEDE',
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
