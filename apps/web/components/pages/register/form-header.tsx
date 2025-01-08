import { i18n, route } from '@packages/utils';
import Link from 'next/link';
import { Button } from 'primereact/button';

const RegisterFormHeader = () => {
   return (
      <div className='flex items-center justify-between mb-8'>
         <p className='font-bold text-2xl'>{i18n.t('auth:create_account')}</p>

         <div className='flex items-center gap-4'>
            <p>{i18n.t('auth:have_an_account')}</p>

            <Link href={route.login}>
               <Button label={i18n.t('common:action.login')} />
            </Link>
         </div>
      </div>
   );
};

export { RegisterFormHeader };
