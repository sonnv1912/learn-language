'use client';

import { useLogin } from '@/hooks/mutation/use-login';
import { Input } from '@components/form/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultLoginValue, i18n, loginSchema } from '@packages/utils';
import { IS_DEV } from '@utils/constants';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Controller, useForm } from 'react-hook-form';

const LoginForm = () => {
   const loginMutate = useLogin();

   const { control, handleSubmit } = useForm({
      defaultValues: IS_DEV
         ? {
              email: 'Gerry26@yahoo.com',
              password: '0961861912Duy',
           }
         : defaultLoginValue,
      resolver: zodResolver(loginSchema),
   });

   const onSubmit = handleSubmit((value) => {
      loginMutate.mutate(value);
   });

   return (
      <Card>
         <div className='flex flex-col gap-5'>
            <Controller
               control={control}
               name='email'
               render={({ field, fieldState }) => (
                  <Input
                     value={field.value}
                     label={i18n.t('auth:field.email')}
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
                     value={field.value}
                     label={i18n.t('auth:field.password')}
                     errorMessage={fieldState.error?.message}
                     type='password'
                     onChange={field.onChange}
                  />
               )}
            />

            <Link
               href='/auth/forgot-password'
               className='text-right text-blue-500 hovertext-blue-700'
            >
               {i18n.t('auth:forgot_password')}
            </Link>

            <Button
               className='mt-3'
               loading={loginMutate.isPending}
               label={i18n.t('common:action.login')}
               onClick={onSubmit}
            />
         </div>
      </Card>
   );
};

export { LoginForm };
