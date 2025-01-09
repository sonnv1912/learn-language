'use client';

import { useApp, useAppToast } from '@packages/providers';
import type { ApiResponse, Login } from '@packages/types';
import { type LoginSchema, METHOD, api, route } from '@packages/utils';
import { useAppDispatch, useAppSelector } from '@redux/store';
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
   const toast = useAppToast(useAppSelector, useAppDispatch);
   const app = useApp(useAppSelector, useAppDispatch);

   return useMutation<ApiResponse<Login>, ApiResponse, LoginSchema>({
      mutationFn: async (data) => {
         const response = await login(data);

         return response;
      },
      onSuccess: async (data) => {
         const userResponse = await getMyProfile(data?.data?.access_token);

         const loginResponse = await signIn('credentials', {
            ...data?.data,
            ...userResponse?.data,
            redirectTo: ensureRoute({
               route: route.dashboard,
               lng: 'vi',
            }),
         });

         if (loginResponse?.code) {
            toast.show([
               {
                  code: loginResponse?.error || '',
                  label: loginResponse?.code,
                  type: 'error',
               },
            ]);

            return;
         }

         app.setApp({
            user: userResponse?.data,
         });
      },
   });
};

export { login, useLogin };
