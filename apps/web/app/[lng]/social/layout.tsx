import { DefaultLayout } from '@/layouts/default';
import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
   return <DefaultLayout>{children}</DefaultLayout>;
};

export default Layout;
