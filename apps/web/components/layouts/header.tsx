'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { HeaderRightNav } from './header-right-nav';
import { Logo } from './logo';

const Header = () => {
   const [onTop, setOnTop] = useState(true);

   useEffect(() => {
      const handle = () => {
         if (window.scrollY === 0) {
            setOnTop(true);

            return;
         }

         setOnTop(false);
      };

      document.addEventListener('scroll', handle);

      return () => document.removeEventListener('scroll', handle);
   }, []);

   return (
      <div
         className={clsx(
            'py-4 px-10 flex items-center bg-black-950 border-b border-b-black-900 justify-between',
            'sticky top-0 left-0 right-0 w-full z-50 header border-b',
            {
               'border-b-transparent': onTop,
               'border-b-[--surface-border]': !onTop,
            },
         )}
      >
         <Logo />

         <HeaderRightNav />
      </div>
   );
};

export { Header };
