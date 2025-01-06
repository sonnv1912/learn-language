'use client';

import { useLogin } from '@/hooks/mutation/use-login';
import { useRegister } from '@/hooks/mutation/use-register';
import { Input } from '@components/form/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
   defaultRegisterValue,
   i18n,
   registerSchema,
   route,
} from '@packages/utils';
import { useIsMutating } from '@tanstack/react-query';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Controller, useForm } from 'react-hook-form';

const Page = () => {
   const isMutating = useIsMutating();
   const registerMutate = useRegister();
   const loginMutate = useLogin();

   const { control, handleSubmit } = useForm({
      defaultValues: defaultRegisterValue,
      resolver: zodResolver(registerSchema),
   });

   const onLogin = handleSubmit(async (data) => {
      await registerMutate.mutateAsync(data);

      await loginMutate.mutateAsync({
         email: data.email,
         password: data.password,
      });
   });

   return (
      <div className='flex items-center justify-center h-full flex-col py-20'>
         <div className='w-full max-w-[688px]'>
            <div className='flex items-center justify-between mb-8'>
               <p className='font-bold text-2xl'>
                  {i18n.t('auth:create_account')}
               </p>

               <div className='flex items-center gap-4'>
                  <p>{i18n.t('auth:have_an_account')}</p>

                  <Link href={route.login}>
                     <Button label={i18n.t('common:action.login')} />
                  </Link>
               </div>
            </div>

            <Card>
               <div className='flex flex-col gap-5'>
                  <Controller
                     control={control}
                     name='email'
                     render={({ field }) => (
                        <Input
                           label={i18n.t('auth:field.email')}
                           value={field.value}
                           onChange={field.onChange}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name='password'
                     render={({ field }) => (
                        <Input
                           label={i18n.t('auth:field.password')}
                           type='password'
                           value={field.value}
                           onChange={field.onChange}
                        />
                     )}
                  />

                  <Controller
                     control={control}
                     name='confirm_password'
                     render={({ field }) => (
                        <Input
                           label={i18n.t('auth:field.confirm_password')}
                           type='password'
                           value={field.value}
                           onChange={field.onChange}
                        />
                     )}
                  />

                  <Link
                     href='/auth/forgot-password'
                     className='text-right text-blue-500 hover:text-blue-700'
                  >
                     {i18n.t('auth:forgot_password')}
                  </Link>

                  <Button
                     className='mt-3'
                     label={i18n.t('common:action.register')}
                     loading={isMutating > 0}
                     onClick={onLogin}
                  />
               </div>
            </Card>
         </div>
      </div>
   );
};

export default Page;
