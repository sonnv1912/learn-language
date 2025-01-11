import { useToast } from '@packages/hooks';
import type { ApiResponse } from '@packages/types';
import { METHOD, type RegisterSchema, api } from '@packages/utils';
import { useMutation } from '@tanstack/react-query';
import { request } from '@utils/request';

const useRegister = () => {
   const toast = useToast();

   return useMutation<boolean, ApiResponse, Partial<RegisterSchema>>({
      mutationFn: async (data) => {
         data.confirm_password = undefined;

         await request({
            endpoint: api.register,
            options: {
               method: METHOD.post,
               body: data,
            },
         });

         return true;
      },
      onError: (error) => {
         if (error?.errors) {
            toast.show(
               error.errors.map((t) => ({
                  code: t.extensions.code,
                  label: t.message,
               })),
            );
         }
      },
   });
};

export { useRegister };
