import { UserLayout } from '@/layouts/user';
import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
   return <UserLayout>{children}</UserLayout>;
};

export default Layout;
