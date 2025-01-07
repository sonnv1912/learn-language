'use client';

import { useLogin } from '@/hooks/mutation/use-login';
import { Input } from '@components/form/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultLoginValue, i18n, loginSchema, route } from '@packages/utils';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Controller, useForm } from 'react-hook-form';

const Page = () => {
   const { t } = i18n;
   const loginMutate = useLogin();

   const { control, handleSubmit, formState } = useForm({
      defaultValues: defaultLoginValue,
      resolver: zodResolver(loginSchema),
   });

   const onSubmit = handleSubmit((value) => {
      loginMutate.mutate(value);
   });

   return (
      <div className='flex items-center justify-center h-full flex-col py-20'>
         <div className='w-full max-w-[688px]'>
            <div className='flex items-center justify-between mb-8'>
               <p className='font-bold text-2xl'>
                  {t('auth:login_to_lexifun')}
               </p>

               <div className='flex items-center gap-4'>
                  <p>{t('auth:new_to_lexifun')}</p>

                  <Link href={route.register}>
                     <Button label={t('common:action.register')} />
                  </Link>
               </div>
            </div>

            <Card>
               <div className='flex flex-col gap-5'>
                  <Controller
                     control={control}
                     name='email'
                     render={({ field, fieldState }) => (
                        <Input
                           value={field.value}
                           label={t('auth:field.email')}
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
                           label={t('auth:field.password')}
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
                     {t('auth:forgot_password')}
                  </Link>

                  <Button
                     disabled={!formState.isValid}
                     className='mt-3'
                     loading={loginMutate.isPending}
                     label={t('common:action.login')}
                     onClick={onSubmit}
                  />
               </div>
            </Card>
         </div>
      </div>
   );
};

export default Page;
