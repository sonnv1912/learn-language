'use client';

import { i18n, route } from '@packages/utils';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { UserButton } from './user-button';

const AuthButton = () => {
   const session = useSession();

   return (
      <>
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
                     text={true}
                     label={i18n.t('common:action.login')}
                  />
               </Link>
            </div>
         )}
      </>
   );
};

export { AuthButton };
