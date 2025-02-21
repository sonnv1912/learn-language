'use client';

import { useLogin } from '@/hooks/mutation/use-login';
import { useRegister } from '@/hooks/mutation/use-register';
import { useAPpRouter } from '@/hooks/use-app-router';
import { Input } from '@components/form/input';
import { faker } from '@faker-js/faker';
import { zodResolver } from '@hookform/resolvers/zod';
import {
   defaultRegisterValue,
   i18n,
   registerSchema,
   route,
} from '@packages/utils';
import { useIsMutating } from '@tanstack/react-query';
import { IS_DEV } from '@utils/constants';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Controller, useForm } from 'react-hook-form';

const RegisterForm = () => {
   const isMutating = useIsMutating();
   const registerMutate = useRegister();
   const loginMutate = useLogin();
   const router = useAPpRouter();

   const { control, handleSubmit } = useForm({
      defaultValues: IS_DEV
         ? {
              email: faker.internet.email(),
              password: '096186129Duy',
              confirm_password: '096186129Duy',
           }
         : defaultRegisterValue,
      resolver: zodResolver(registerSchema),
   });

   const onLogin = handleSubmit(async (data) => {
      try {
         await registerMutate.mutateAsync(data);

         await loginMutate.mutateAsync({
            email: data.email,
            password: data.password,
         });

         router.push(route.home);
      } catch (_error) {
         //
      }
   });

   return (
      <Card>
         <div className='flex flex-col gap-5'>
            <Controller
               control={control}
               name='email'
               render={({ field, fieldState }) => (
                  <Input
                     label={i18n.t('auth:field.email')}
                     value={field.value}
                     errorMessage={fieldState.error?.message}
                     onChange={field.onChange}
                  />
               )}
            />

            <Controller
               control={control}
               name='password'
               render={({ field, fieldState }) => (
                  <Input
                     label={i18n.t('auth:field.password')}
                     ratePassword={true}
                     type='password'
                     value={field.value}
                     errorMessage={fieldState.error?.message}
                     onChange={field.onChange}
                  />
               )}
            />

            <Controller
               control={control}
               name='confirm_password'
               render={({ field, fieldState }) => (
                  <Input
                     label={i18n.t('auth:field.confirm_password')}
                     type='password'
                     value={field.value}
                     errorMessage={fieldState.error?.message}
                     onChange={field.onChange}
                  />
               )}
            />

            <Button
               className='mt-3'
               label={i18n.t('common:action.register')}
               loading={isMutating > 0}
               onClick={onLogin}
            />
         </div>
      </Card>
   );
};

export { RegisterForm };
