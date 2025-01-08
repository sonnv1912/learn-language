import { ManageLayout } from '@/layouts/manage';
import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
   return <ManageLayout>{children}</ManageLayout>;
};

export default Layout;
