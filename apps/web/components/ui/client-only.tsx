'use client';

import { useSession } from 'next-auth/react';
import {
   type PropsWithChildren,
   type ReactNode,
   useEffect,
   useState,
} from 'react';

type Props = PropsWithChildren<{
   fallback?: ReactNode;
   loading?: boolean;
}>;

const ClientOnly = ({ children, fallback = null, loading }: Props) => {
   const [isClient, setIsClient] = useState(false);
   const auth = useSession();

   useEffect(() => {
      setIsClient(true);
   }, []);

   if (!isClient || loading || auth.status === 'loading') {
      return fallback;
   }

   return children;
};

export { ClientOnly };
