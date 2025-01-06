import { api, METHOD, type RegisterSchema } from '@packages/utils';
import { useMutation } from '@tanstack/react-query';
import { request } from '@utils/request';

const useRegister = () => {
   // const toast = useShowToast();

   return useMutation<boolean, Error, Partial<RegisterSchema>>({
      mutationFn: async (data) => {
         //  delete data.confirm_password;

         await request({
            endpoint: api.register,
            options: {
               method: METHOD.post,
               body: data,
            },
         });

         return true;
      },
   });
};

export { useRegister };
