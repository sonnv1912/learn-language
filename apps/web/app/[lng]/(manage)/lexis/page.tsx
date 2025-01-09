import { LexisPageHeader } from '@components/pages/lexis/header';
import { ListLexis } from '@components/pages/lexis/list';
import { i18n } from '@packages/utils';
import { pageTitle } from '@utils/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: pageTitle(i18n.t('page:lexis.title')),
};

const Page = () => {
   return (
      <div className=''>
         <LexisPageHeader />

         <ListLexis />
      </div>
   );
};

export default Page;
