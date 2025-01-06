import { UserLayout } from '@/layouts/user';
import { APP_NAME, i18n, route } from '@packages/utils';
import Link from 'next/link';
import { Button } from 'primereact/button';

const Page = () => {
   return (
      <UserLayout>
         <div className='max-w-screen-md flex flex-col gap-5 mx-auto flex-1 py-20'>
            <p className='font-bold text-4xl'>{APP_NAME}</p>

            <p className='leading-8 text-xl'>{i18n.t('info:welcome')}</p>

            <p className='leading-8 italic text-xl text-right my-10'>
               "{i18n.t('info:slogan')}"
            </p>

            <div className='flex items-center gap-4 justify-end'>
               <Link href={route.register}>
                  <Button
                     label={i18n.t('auth:sign_up_now')}
                     icon='pi pi-arrow-right'
                     iconPos='right'
                  />
               </Link>

               <Link href={route.home}>
                  <Button
                     label={i18n.t('page:home.share_with_everyone')}
                     icon='pi pi-arrow-up-right'
                     iconPos='right'
                  />
               </Link>
            </div>
         </div>
      </UserLayout>
   );
};

export default Page;
