import { UIProvider } from '@/providers/ui-provider';
import { QueryProvider } from '@packages/providers';
import { APP_NAME } from '@packages/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

import { WebReduxProvider } from '@/redux';
import { Toast } from '@components/ui/toast';
import 'primeicons/primeicons.css';
import '../../assets/styles/global.css';

export const metadata: Metadata = {
   title: APP_NAME,
};

const Layout = async ({
   children,
   params,
}: {
   children: ReactNode;
   params: Promise<{
      lng: string;
   }>;
}) => {
   return (
      <html lang={(await params).lng} dir={dir((await params).lng)}>
         <head>
            <meta name='theme-color' content='#111827' />

            <link rel='icon' href='/app/favicon.ico' />

            <link
               id='theme'
               rel='stylesheet'
               href='/resources/themes/dark.css'
            />

            <link
               rel='apple-touch-icon'
               sizes='180x180'
               href='/app/apple-touch-icon.png'
            />
            <link
               rel='icon'
               type='image/png'
               sizes='32x32'
               href='/app/favicon-32x32.png'
            />
            <link
               rel='icon'
               type='image/png'
               sizes='16x16'
               href='/app/favicon-16x16.png'
            />

            <link rel='manifest' href='/app/site.webmanifest' />
         </head>

         <body className='text-[--text-color]'>
            <SessionProvider>
               <WebReduxProvider>
                  <UIProvider>
                     <QueryProvider>
                        {children}

                        <Toast />
                     </QueryProvider>
                  </UIProvider>
               </WebReduxProvider>
            </SessionProvider>

            <Analytics debug={false} />

            <SpeedInsights debug={false} />
         </body>
      </html>
   );
};

export default Layout;
