'use client';

import clsx from 'clsx';
import { useEventListener } from 'primereact/hooks';
import { useEffect, useState } from 'react';
import { HeaderRightNav } from './header-right-nav';
import { Logo } from './logo';

const Header = () => {
   const [onTop, setOnTop] = useState(true);

   const [scroll, unScroll] = useEventListener({
      type: 'scroll',
      listener: () => {
         if (window.scrollY === 0) {
            setOnTop(true);

            return;
         }

         setOnTop(false);
      },
   });

   useEffect(() => {
      scroll();

      return () => {
         unScroll();
      };
   }, [scroll, unScroll]);

   return (
      <div
         className={clsx(
            'py-4 px-10 flex items-center border-b bg-transparent justify-between',
            'sticky top-0 left-0 right-0 w-full z-50 border-b transition-colors',
            {
               'border-b-transparent': onTop,
               'border-b-[--surface-border] header': !onTop,
            },
         )}
      >
         <Logo />

         <HeaderRightNav />
      </div>
   );
};

export { Header };
