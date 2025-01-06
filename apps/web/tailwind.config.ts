import type { Config } from 'tailwindcss';

export default {
   content: [
      './layouts/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            screen: '#0c0d0e',
            blue: {
               '50': '#f1f7fe',
               '100': '#e2eefc',
               '200': '#bedbf9',
               '300': '#84bef5',
               '400': '#439ded',
               '500': '#1a80dd',
               '600': '#0d64bc',
               '700': '#0d57a6',
               '800': '#0e457e',
               '900': '#123b68',
               '950': '#0c2545',
            },
            black: {
               '50': '#f7f7f8',
               '100': '#eeeef0',
               '200': '#d9d9de',
               '300': '#b8b9c1',
               '400': '#91939f',
               '500': '#747583',
               '600': '#5e5f6b',
               '700': '#4d4e57',
               '800': '#42424a',
               '900': '#3a3a40',
               '950': '#111113',
            },
            gray: {
               '50': '#f6f7f8',
               '100': '#edeef0',
               '200': '#dbdde2',
               '300': '#c3c7cd',
               '400': '#a6abb4',
               '500': '#9094a1',
               '600': '#7e8292',
               '700': '#727483',
               '800': '#60626d',
               '900': '#4f5159',
               '950': '#333438',
            },
         },
         keyframes: {
            fadeIn: {
               '0%': {
                  transform: 'translateY(100px)',
                  opacity: '0',
               },
               '100%': {
                  transform: 'translateY(0)',
                  opacity: '1',
               },
            },
         },
         animation: {
            fadeIn: 'fadeIn 1s ease-in-out',
         },
      },
   },
   plugins: [],
} satisfies Config;
