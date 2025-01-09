'use client';

import { Ripple } from 'primereact/ripple';

type Props = {
   onPressCollapse: () => void;
   onPressTrash: () => void;
};

const LexisItemAction = ({ onPressCollapse, onPressTrash }: Props) => {
   return (
      <div className='flex items-center gap-1'>
         <div
            className='p-ripple size-9 rounded-full flex items-center justify-center hover:text-[--primary-color] hover:bg-[--surface-hover] cursor-pointer'
            onKeyUp={() => {
               //
            }}
            onClick={onPressCollapse}
         >
            <i className='pi pi-angle-down' />

            <Ripple />
         </div>

         <div
            className='p-ripple size-9 rounded-full flex items-center justify-center hover:text-red-500 hover:bg-[--surface-hover] cursor-pointer'
            onKeyUp={() => {
               //
            }}
            onClick={onPressTrash}
         >
            <i className='pi pi-trash' />

            <Ripple />
         </div>
      </div>
   );
};

export { LexisItemAction };
