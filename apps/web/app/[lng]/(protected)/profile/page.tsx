import { i18n } from '@packages/utils';
import { pageTitle } from '@utils/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: pageTitle(i18n.t('page:profile.title')),
};

const Page = () => {
   return <></>;
};

export default Page;
