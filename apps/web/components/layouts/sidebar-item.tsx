'use client';

import { useAppParams } from '@/hooks/use-app-params';
import { Link } from '@components/ui/link';
import type { Option } from '@packages/types';
import { ensureRoute } from '@utils/route';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { Ripple } from 'primereact/ripple';
import { type ComponentProps, useState } from 'react';

type Props = {
   data: Option;
};

const Div = (props: ComponentProps<'div'>) => {
   return <div {...props}>{props.children}</div>;
};

const SidebarItem = ({ data }: Props) => {
   const pathname = usePathname();
   const params = useAppParams();
   const Component = data.url ? Link : Div;
   const [collapse, setCollapse] = useState(false);

   return (
      <div>
         <Component
            href={data.url || '#'}
            className={clsx(
               'flex items-center gap-3 cursor-pointer px-4 h-12 rounded-md p-ripple',
               'hover:text-[--primary-color] hover:bg-[--surface-hover]',
               {
                  'bg-[--surface-hover] text-[--primary-color]':
                     pathname ===
                     ensureRoute({
                        route: data.url || '#',
                        lng: params.lng,
                     }),
               },
            )}
            onClick={() => {
               setCollapse((prev) => !prev);
            }}
         >
            <i className={clsx('pi', data.icon)} />

            <p className='leading-7 flex-1'>{data.label}</p>

            {data.items && (
               <motion.div
                  className='pi pi-angle-down'
                  animate={{
                     rotate: collapse ? '-90deg' : '0deg',
                  }}
               />
            )}
            <Ripple />
         </Component>

         {data.items && (
            <motion.div
               className={clsx('gap-1 ml-3 overflow-hidden')}
               animate={{ height: collapse ? '0' : 'auto' }}
            >
               {data.items?.map((item) => (
                  <SidebarItem key={item.code} data={item} />
               ))}
            </motion.div>
         )}
      </div>
   );
};

export { SidebarItem };
