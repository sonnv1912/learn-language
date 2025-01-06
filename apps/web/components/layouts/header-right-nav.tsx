import { AuthButton } from '@components/ui/auth-button';
import { SwitchTheme } from '@components/ui/switch-theme';

const HeaderRightNav = () => {
   return (
      <div className='flex items-center justify-end gap-3'>
         <SwitchTheme />

         <AuthButton />
      </div>
   );
};

export { HeaderRightNav };
