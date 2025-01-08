import { COOKIE } from '@packages/utils';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   // biome-ignore lint/suspicious/useAwait: <explanation>
   redirects: async () => {
      return [
         {
            source: '/:lng/',
            destination: '/vi',
            permanent: true,
            has: [
               {
                  type: 'cookie',
                  key: COOKIE.i18n,
                  value: 'vi',
               },
            ],
         },
      ];
   },
};

export default nextConfig;
