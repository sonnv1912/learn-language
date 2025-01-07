'use client';

import { useAppToast } from '@packages/providers';
import type { Login } from '@packages/types';
import { type LoginSchema, METHOD, api } from '@packages/utils';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useMutation } from '@tanstack/react-query';
import { request } from '@utils/request';
import { type SignInResponse, signIn } from 'next-auth/react';

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

   return useMutation<SignInResponse | undefined, SignInResponse, LoginSchema>({
      mutationFn: async (data) => {
         const response = await signIn('credentials', {
            ...data,
            redirect: false,
            redirectTo: '/dashboard',
         });

         return response;
      },
      onError: (error) => {
         toast.show([
            {
               code: error.code || '',
               label: error.error,
            },
         ]);
      },
   });
};

export { login, useLogin };
