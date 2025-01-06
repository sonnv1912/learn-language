import { Footer } from '@components/layouts/footer';
import { Header } from '@components/layouts/header';
import type { PropsWithChildren } from 'react';

const UserLayout = ({ children }: PropsWithChildren) => {
   return (
      <div className='flex flex-col layout min-h-screen'>
         <Header />

         <div className='pt-[69px] flex-1'>{children}</div>

         <Footer />
      </div>
   );
};

export { UserLayout };
