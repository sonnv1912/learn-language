import type { RequestProps } from '@packages/types';
import { instance } from '@packages/utils';
import { isServer } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';
import { auth } from './auth';

const request = async <T>(props: RequestProps) => {
   let token = props.options.token;

   try {
      if (token) {
         if (isServer) {
            const session = await auth();

            token = session?.user.access_token;
         }

         if (!isServer) {
            const session = await getSession();

            token = session?.user.access_token;
         }
      }
   } catch (_error) {
      //
   }

   return await instance<T>({
      ...props,
      options: {
         ...props.options,
         token,
      },
   });
};

export { request };
