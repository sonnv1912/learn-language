'use client';

import { useApp } from '@packages/providers';
import { useAppDispatch, useAppSelector } from '@redux/store';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

const LayoutBody = ({ children }: PropsWithChildren) => {
   const { app } = useApp(useAppSelector, useAppDispatch);

   return (
      <div className={clsx('flex flex-col layout min-h-screen', app.theme)}>
         {children}
      </div>
   );
};

export { LayoutBody };
