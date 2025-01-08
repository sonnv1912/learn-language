import { Footer } from '@components/layouts/footer';
import { Header } from '@components/layouts/header';
import { LayoutBody } from '@components/layouts/layout-body';
import type { PropsWithChildren } from 'react';

const DefaultLayout = ({ children }: PropsWithChildren) => {
   return (
      <LayoutBody>
         <div className='min-h-screen flex flex-col'>
            <Header />

            <div className='flex-1'>{children}</div>

            <Footer />
         </div>
      </LayoutBody>
   );
};

export { DefaultLayout };
