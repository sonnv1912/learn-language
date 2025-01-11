'use client';

import { useToast, useWebApp } from '@packages/hooks';
import type { ApiResponse, Login } from '@packages/types';
import { type LoginSchema, METHOD, api, route } from '@packages/utils';
import { useMutation } from '@tanstack/react-query';
import { request } from '@utils/request';
import { ensureRoute } from '@utils/route';
import { signIn } from 'next-auth/react';
import { getMyProfile } from '../query/use-my-profile';

const login = async (data: LoginSchema) => {
   return await request<Login>({
      endpoint: api.login,
      options: {
         method: METHOD.post,
         body: data,
      },
   });
};

const useLogin = () => {
   const toast = useToast();
   const { setUser } = useWebApp();

   return useMutation<ApiResponse<Login>, ApiResponse, LoginSchema>({
      mutationFn: async (data) => {
         const response = await login(data);

         return response;
      },
      onSuccess: async (data) => {
         const userResponse = await getMyProfile(data?.data?.access_token);

         await signIn('credentials', {
            ...data?.data,
            ...userResponse?.data,
            redirectTo: ensureRoute({
               route: route.dashboard,
               lng: 'vi',
            }),
         });

         setUser(userResponse?.data);
      },
      onError(error) {
         if (error?.errors) {
            toast.show(
               error?.errors.map((t) => ({
                  code: t.extensions.code,
                  label: t.message,
                  type: 'error',
               })),
            );
         }
      },
   });
};

export { login, useLogin };
