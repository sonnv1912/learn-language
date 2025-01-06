import { UIProvider } from '@/providers/ui-provider';
import { QueryProvider, ReduxProvider } from '@packages/providers';
import { APP_NAME } from '@packages/utils';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

import '../../assets/styles/global.css';
import 'primeicons/primeicons.css';

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
            <link id='theme' rel='stylesheet' href='/assets/themes/dark.css' />
         </head>

         <body>
            <SessionProvider>
               <ReduxProvider platform='web' loading={'loading'}>
                  <UIProvider>
                     <QueryProvider>{children}</QueryProvider>
                  </UIProvider>
               </ReduxProvider>
            </SessionProvider>
         </body>
      </html>
   );
};

export default Layout;
