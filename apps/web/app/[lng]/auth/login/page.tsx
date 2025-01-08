import { LoginForm } from '@components/pages/login/form';
import { LoginFormHeader } from '@components/pages/login/form-header';
import { i18n } from '@packages/utils';
import { pageTitle } from '@utils/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: pageTitle(i18n.t('page:login.title')),
};

const Page = () => {
   return (
      <div className='flex items-center justify-center h-full flex-col py-20'>
         <div className='w-full max-w-[688px]'>
            <LoginFormHeader />

            <LoginForm />
         </div>
      </div>
   );
};

export default Page;
