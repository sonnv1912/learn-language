import { Link } from '@components/ui/link';
import { i18n, route } from '@packages/utils';
import { Button } from 'primereact/button';

const LoginFormHeader = () => {
   return (
      <div className='flex items-center justify-between mb-8'>
         <p className='font-bold text-2xl'>{i18n.t('auth:login_to_lexifun')}</p>

         <div className='flex items-center gap-4'>
            <p>{i18n.t('auth:new_to_lexifun')}</p>

            <Link href={route.register}>
               <Button label={i18n.t('common:action.register')} />
            </Link>
         </div>
      </div>
   );
};

export { LoginFormHeader };
