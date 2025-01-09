import { useAPpRouter } from '@/hooks/use-app-router';
import type { Option } from '@packages/types';
import { i18n, route } from '@packages/utils';
import { signOut, useSession } from 'next-auth/react';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';

const UserButton = () => {
   const menuRight = useRef<Menu>(null);
   const auth = useSession();
   const router = useAPpRouter();

   const items: Option[] = [
      {
         code: 'dashboard',
         label: i18n.t('page:dashboard.title'),
         icon: 'pi pi-home',
         command: () => {
            router.push(route.dashboard);
         },
      },
      {
         code: 'profile',
         label: i18n.t('common:profile'),
         icon: 'pi pi-user',
         command: () => {
            router.push(route.profile);
         },
      },
      {
         code: 'logout',
         label: i18n.t('common:action.logout'),
         icon: 'pi pi-sign-out',
         command: async () => {
            await signOut({
               redirect: false,
            });

            router.push(route.home);
         },
      },
   ];

   return (
      <>
         <Menu
            id='popup_menu_right'
            ref={menuRight}
            model={items}
            popup={true}
            popupAlignment='right'
            className='mt-2'
         />

         <Avatar
            label={auth.data?.user.name?.[0]}
            image={auth.data?.user.image || undefined}
            shape='circle'
            size='large'
            aria-controls='popup_menu_right'
            aria-haspopup={true}
            onClick={(event) => menuRight.current?.toggle(event)}
         />
      </>
   );
};

export { UserButton };
