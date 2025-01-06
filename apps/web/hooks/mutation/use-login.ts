import type { ApiResponse, Login } from '@packages/types';
import { api, METHOD, type LoginSchema } from '@packages/utils';
import { useMutation } from '@tanstack/react-query';
import { request } from '@utils/request';

const useLogin = () => {
   return useMutation<ApiResponse<Login> | null, Error, LoginSchema>({
      mutationFn: async (data) => {
         const response = await request<Login>({
            endpoint: api.login,
            options: {
               method: METHOD.post,
               body: data,
            },
         });

         //  if (response?.expires) {
         //     const accessToken = useCookie(ACCESS_TOKEN, {
         //        expires: new Date(Date.now() + response?.expires),
         //     });

         //     accessToken.value = response?.access_token;
         //  }

         //  await navigateTo({
         //     path: '/:email/dashboard',
         //     params: {
         //        email: data.email.split('@')[0],
         //     },
         //  });

         return response;
      },
      onError(err) {
         console.log('🚀 ~ onError ~ err:', err);
      },
   });
};

export { useLogin };
