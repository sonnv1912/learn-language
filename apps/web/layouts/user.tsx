import { Footer } from '@components/layouts/footer';
import { Header } from '@components/layouts/header';
import { LayoutBody } from '@components/layouts/layout-body';
import type { PropsWithChildren } from 'react';

const UserLayout = ({ children }: PropsWithChildren) => {
   return (
      <LayoutBody>
         <Header />

         <div className='flex-1'>{children}</div>

         <Footer />
      </LayoutBody>
   );
};

export { UserLayout };
