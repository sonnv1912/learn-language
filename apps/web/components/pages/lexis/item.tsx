'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { useState } from 'react';
import { LexisItemAction } from './item-action';
import { LexisItemExample } from './item-example';
import { LexisItemTag } from './item-tag';

type Props = {
   data: string;
   onPressTrash: () => void;
};

const LexisItem = ({ data, onPressTrash }: Props) => {
   const [collapse, setCollapse] = useState(true);

   return (
      <motion.div
         layout={true}
         key={data}
         exit={{
            opacity: 0,
            scale: 0,
         }}
         className={clsx('overflow-hidden p-card pt-4 h-fit border ', {
            'border-transparent': collapse,
            'shadow-[--focus-ring]': !collapse,
         })}
      >
         <div className='flex px-4 gap-4'>
            <Avatar label='B' size='large' shape='circle' />

            <div className='flex-1 flex flex-col gap-3'>
               <div className='flex items-center'>
                  <p className='font-semibold text-xl flex-1'>{data}</p>

                  <LexisItemAction
                     onPressTrash={onPressTrash}
                     onPressCollapse={() => {
                        setCollapse((prev) => !prev);
                     }}
                  />
               </div>

               <p className='leading-7'>Quả chuối</p>

               <p className='leading-7'>Một loại hoa quả màu vàng, khá ngon</p>

               <LexisItemTag />
            </div>
         </div>

         <Divider align='right'>
            <p className='text-sm text-gray-400 ml-auto'>06/08/2024</p>
         </Divider>

         <LexisItemExample collapse={collapse} />
      </motion.div>
   );
};

export { LexisItem };
