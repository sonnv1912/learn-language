import { UserLayout } from '@/layouts/user';
import { APP_NAME, i18n } from '@packages/utils';
import { Button } from 'primereact/button';

const Page = () => {
   return (
      <UserLayout>
         <div className='max-w-screen-md flex flex-col gap-5 mx-auto flex-1 py-20'>
            <p className='font-bold text-4xl'>{APP_NAME}</p>

            <p className='leading-8 text-xl'>{i18n.t('info:welcome')}</p>

            <div className='flex items-center gap-4 justify-end mt-10'>
               <Button
                  label={i18n.t('auth:sign_up_now')}
                  icon='pi pi-arrow-right'
                  iconPos='right'
               />

               <Button
                  label={i18n.t('page:home.share_with_everyone')}
                  icon='pi pi-arrow-up-right'
                  iconPos='right'
               />
            </div>
         </div>
      </UserLayout>
   );
};

export default Page;
