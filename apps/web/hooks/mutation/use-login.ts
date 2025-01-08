'use client';

import { useAppToast } from '@packages/providers';
import type { Login } from '@packages/types';
import { type LoginSchema, METHOD, api, route } from '@packages/utils';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useMutation } from '@tanstack/react-query';
import { request } from '@utils/request';
import { type SignInResponse, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
   const router = useRouter();

   return useMutation<SignInResponse | undefined, SignInResponse, LoginSchema>({
      mutationFn: async (data) => {
         const response = await signIn('credentials', {
            ...data,
            redirect: false,
         });

         return response;
      },
      onSuccess(data) {
         if (data?.code) {
            toast.show([
               {
                  code: data?.error || '',
                  label: data?.code,
                  type: 'error',
               },
            ]);

            return;
         }

         router.push(route.dashboard);
      },
   });
};

export { login, useLogin };
