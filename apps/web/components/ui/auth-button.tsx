'use client';

import { i18n, route } from '@packages/utils';
import { useSession } from 'next-auth/react';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { ClientOnly } from './client-only';
import { Link } from './link';
import { UserButton } from './user-button';

const AuthButton = () => {
   const session = useSession();

   return (
      <ClientOnly fallback={<Skeleton size='3rem' className='rounded-full' />}>
         {session.status === 'authenticated' ? (
            <UserButton v-if='isLogin' />
         ) : (
            <div className='flex items-center gap-2'>
               <Link href={route.register}>
                  <Button
                     size='small'
                     label={i18n.t('common:action.register')}
                  />
               </Link>

               <Link href={route.login}>
                  <Button
                     size='small'
                     outlined={true}
                     label={i18n.t('common:action.login')}
                  />
               </Link>
            </div>
         )}
      </ClientOnly>
   );
};

export { AuthButton };
