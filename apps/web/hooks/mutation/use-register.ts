import { METHOD, type RegisterSchema, api } from '@packages/utils';
import { useMutation } from '@tanstack/react-query';
import { request } from '@utils/request';

const useRegister = () => {
   // const toast = useShowToast();

   return useMutation<boolean, Error, Partial<RegisterSchema>>({
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
   });
};

export { useRegister };
