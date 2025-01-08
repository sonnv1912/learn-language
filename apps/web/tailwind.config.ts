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
            'surface-overlay': 'var(--surface-overlay)',
         },
      },
   },
   plugins: [],
} satisfies Config;
