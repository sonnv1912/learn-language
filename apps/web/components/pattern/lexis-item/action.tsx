'use client';

import { Ripple } from 'primereact/ripple';
import { useLexisItemContext } from '.';

const LexisItemAction = () => {
   const { edit, onPressTrash, onPressShowMore, onPressClose, onPressConfirm } =
      useLexisItemContext((state) => state);

   return (
      <div className='flex items-center gap-1'>
         {!edit && (
            <div
               className='p-ripple size-10 rounded-full flex items-center justify-center hover:text-[--primary-color] hover:bg-[--surface-hover] cursor-pointer'
               onKeyUp={() => {
                  //
               }}
               onClick={onPressShowMore}
            >
               <i className='pi pi-external-link' />

               <Ripple />
            </div>
         )}

         <div
            className='p-ripple size-10 rounded-full flex items-center justify-center hover:text-red-500 hover:bg-[--surface-hover] cursor-pointer'
            onKeyUp={() => {
               //
            }}
            onClick={(e) => onPressTrash?.(e)}
         >
            <i className='pi pi-trash' />

            <Ripple />
         </div>

         {edit && (
            <div
               className='p-ripple size-10 rounded-full flex items-center justify-center hover:text-[--primary-color] hover:bg-[--surface-hover] cursor-pointer'
               onKeyUp={() => {
                  //
               }}
               onClick={onPressConfirm}
            >
               <i className='pi pi-check' />

               <Ripple />
            </div>
         )}

         {edit && (
            <div
               className='p-ripple size-10 rounded-full flex items-center justify-center hover:text-[--primary-color] hover:bg-[--surface-hover] cursor-pointer'
               onKeyUp={() => {
                  //
               }}
               onClick={onPressClose}
            >
               <i className='pi pi-times' />

               <Ripple />
            </div>
         )}
      </div>
   );
};

export { LexisItemAction };
