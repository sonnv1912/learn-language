'use client';

import { useWebApp } from '@packages/hooks';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

const LayoutBody = ({ children }: PropsWithChildren) => {
   const theme = useWebApp((state) => state.theme);

   return <div className={clsx('layout', theme)}>{children}</div>;
};

export { LayoutBody };
