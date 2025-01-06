import type { Option } from '@packages/types';
import { i18n } from '@packages/utils';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';

const UserButton = () => {
   const menuRight = useRef<Menu>(null);

   const items: Option[] = [
      {
         code: 'profile',
         label: i18n.t('common:profile'),
         icon: 'pi pi-user',
      },
      {
         code: 'logout',
         label: i18n.t('common:action.logout'),
         icon: 'pi pi-sign-out',
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
            label='V'
            shape='circle'
            aria-controls='popup_menu_right'
            aria-haspopup={true}
            onClick={(event) => menuRight.current?.toggle(event)}
         />
      </>
   );
};

export { UserButton };
