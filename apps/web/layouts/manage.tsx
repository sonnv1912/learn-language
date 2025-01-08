import { Footer } from '@components/layouts/footer';
import { LayoutBody } from '@components/layouts/layout-body';
import { Sidebar } from '@components/layouts/sidebar';
import type { PropsWithChildren } from 'react';

const ManageLayout = ({ children }: PropsWithChildren) => {
   return (
      <LayoutBody>
         <div className='flex min-h-screen'>
            <Sidebar />

            <div className='flex-1 flex flex-col'>
               <div className='flex-1'>{children}</div>

               <Footer />
            </div>
         </div>
      </LayoutBody>
   );
};

export { ManageLayout };
