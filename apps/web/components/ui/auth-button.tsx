import { UserButton } from './user-button';
import { Button } from 'primereact/button';
import { i18n, route } from '@packages/utils';
import Link from 'next/link';

const AuthButton = () => {
   return (
      <>
         {false ? (
            <UserButton v-if='isLogin' />
         ) : (
            <div className='flex items-center gap-2'>
               <Link href={route.register}>
                  <Button label={i18n.t('common:action.register')} />
               </Link>

               <Link href={route.login}>
                  <Button text={true} label={i18n.t('common:action.login')} />
               </Link>
            </div>
         )}
      </>
   );
};

export { AuthButton };
