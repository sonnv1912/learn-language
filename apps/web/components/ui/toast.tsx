'use client';

import { type ToastSlice, useAppToast } from '@packages/providers';
import { useAppDispatch, useAppSelector } from '@redux/store';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from 'primereact/button';
import { useMountEffect, useTimeout, useUnmountEffect } from 'primereact/hooks';

const Item = ({ data }: { data: ToastSlice }) => {
   const { close } = useAppToast(useAppSelector, useAppDispatch);

   const [clearTimeout] = useTimeout(() => {
      close(data.code);
   }, 3000);

   useMountEffect(() => {
      return () => clearTimeout();
   });

   useUnmountEffect(() => {
      clearTimeout();
   });

   return (
      <div
         className={`p-toast-message p-toast-message-${data.type || 'info'} p-toast-message-enter-done`}
      >
         <div className='p-toast-message-content'>
            <i
               className={clsx('p-icon p-toast-message-icon pi', {
                  'pi-info-circle': !data.type || data.type === 'info',
                  'pi-times-circle': data.type === 'error',
                  'pi-check': data.type === 'success',
               })}
            />

            <div className='p-toast-message-text'>
               <span className='p-toast-summary'>{data.label}</span>

               <div className='p-toast-detail'>{data.description}</div>
            </div>

            <Button
               icon='pi pi-times'
               text={true}
               rounded={true}
               className='p-toast-icon-close p-link'
               onClick={() => {
                  clearTimeout();
                  close(data.code);
               }}
            />
         </div>
      </div>
   );
};

const Toast = () => {
   const { items } = useAppToast(useAppSelector, useAppDispatch);

   return (
      <div
         id='app-toast'
         className='p-toast p-component fixed top-5 right-5 z-50'
      >
         <AnimatePresence mode='sync'>
            {items.map((item) => (
               <motion.div
                  key={item.code}
                  layout={true}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                     opacity: 1,
                     y: 0,
                  }}
                  exit={{
                     opacity: 0,
                     y: -50,
                  }}
               >
                  <Item data={item} />
               </motion.div>
            ))}
         </AnimatePresence>
      </div>
   );
};

export { Toast };
