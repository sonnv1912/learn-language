'use client';

import { SwitchTheme } from '@components/ui/switch-theme';
import { SIDEBAR } from '@utils/constants';
import { Button } from 'primereact/button';
import { Logo } from './logo';
import { SidebarItem } from './sidebar-item';

const Sidebar = () => {
   return (
      <div className='border-r border-[--surface-border] w-80'>
         <div className='flex items-center justify-between p-3 border-b border-[--surface-border]'>
            <Logo size={35} textSize='lg' />

            <div className='flex items-center'>
               <SwitchTheme />

               <Button icon='pi pi-bell' text={true} rounded={true} />
            </div>
         </div>

         <div className='p-3 flex flex-col gap-1'>
            {SIDEBAR.map((item) => (
               <SidebarItem key={item.code} data={item} />
            ))}
         </div>
      </div>
   );
};

export { Sidebar };
