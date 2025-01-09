import { i18n } from '@packages/utils';
import { signOut } from '@utils/auth';
import { pageTitle } from '@utils/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: pageTitle(i18n.t('page:dashboard.title')),
};

const Page = () => {
   return (
      <form
         action={async () => {
            'use server';
            await signOut();
         }}
      >
         <button type='submit'>Sign out</button>
      </form>
   );
};

export default Page;
