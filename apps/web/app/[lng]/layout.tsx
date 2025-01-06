import { dir } from 'i18next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { APP_NAME } from '@packages/utils';
import { UIProvider } from '@/providers/ui-provider';
import { QueryProvider, ReduxProvider } from '@packages/providers';

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
            <ReduxProvider platform='web' loading={'loading'}>
               <UIProvider>
                  <QueryProvider>{children}</QueryProvider>
               </UIProvider>
            </ReduxProvider>
         </body>
      </html>
   );
};

export default Layout;
