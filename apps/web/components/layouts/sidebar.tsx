import { Button } from 'primereact/button';
import { Logo } from './logo';

const Sidebar = () => {
   return (
      <div className='border-r border-[--surface-border] w-80 p-3'>
         <div className='flex items-center justify-between'>
            <Logo size={35} textSize='lg' />

            <Button icon='pi pi-bell' text={true} rounded={true} />
         </div>
      </div>
   );
};

export { Sidebar };
