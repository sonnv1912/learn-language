'use client';

import { DefaultLayout } from '@/layouts/default';
import { ClientOnly } from '@components/ui/client-only';
import { Link } from '@components/ui/link';
import { APP_NAME, i18n, route } from '@packages/utils';
import { useSession } from 'next-auth/react';
import { Button } from 'primereact/button';

const Page = () => {
   const auth = useSession();

   return (
      <DefaultLayout>
         <div className='max-w-screen-md flex flex-col gap-5 mx-auto flex-1 py-20'>
            <p className='font-bold text-4xl'>{APP_NAME}</p>

            <p className='leading-9 text-xl'>{i18n.t('info:welcome')}</p>

            <p className='leading-8 italic text-xl text-right my-10'>
               "{i18n.t('info:slogan')}"
            </p>

            <ClientOnly>
               <div className='flex items-center gap-4 justify-end'>
                  {!auth.data && (
                     <Link href={route.register}>
                        <Button
                           label={i18n.t('auth:sign_up_now')}
                           icon='pi pi-arrow-right'
                           iconPos='right'
                        />
                     </Link>
                  )}

                  <Link href={route.social}>
                     <Button
                        label={i18n.t('page:home.share_with_everyone')}
                        icon='pi pi-arrow-up-right'
                        iconPos='right'
                     />
                  </Link>
               </div>
            </ClientOnly>
         </div>
      </DefaultLayout>
   );
};

export default Page;
