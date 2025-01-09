'use client';

import { useAppParams } from '@/hooks/use-app-params';
import { ensureRoute } from '@utils/route';
import { type LinkProps, default as NextLink } from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Props = LinkProps &
   ComponentProps<'a'> & {
      href: string;
      children: ReactNode;
   };

const Link = ({ href, children, ...rest }: Props) => {
   const params = useAppParams();

   return (
      <NextLink
         href={ensureRoute({
            lng: params.lng,
            route: href,
         })}
         {...rest}
      >
         {children}
      </NextLink>
   );
};

export { Link };
