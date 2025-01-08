'use client';

import { useApp } from '@packages/providers';
import { useAppDispatch, useAppSelector } from '@redux/store';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

const LayoutBody = ({ children }: PropsWithChildren) => {
   const { app } = useApp(useAppSelector, useAppDispatch);

   return <div className={clsx('layout', app.theme)}>{children}</div>;
};

export { LayoutBody };
