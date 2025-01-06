import { isServer } from '@tanstack/react-query';
import type { ReactNode } from 'react';

type Props = {
   children: ReactNode;
   fallBack: ReactNode;
};

const ClientOnly = ({ children, fallBack }: Props) => {
   if (isServer) {
      return fallBack;
   }

   return children;
};

export { ClientOnly };
