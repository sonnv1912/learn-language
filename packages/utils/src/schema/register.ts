import z from 'zod';
import { i18n } from '../i18n';

type RegisterSchema = z.infer<typeof registerSchema>;

const registerSchema = z
   .object({
      email: z.string().email(
         i18n.t('validation:invalid_format', {
            field: i18n.t('auth:field.email').toLowerCase(),
         }),
      ),
      password: z
         .string()
         .min(
            8,
            i18n.t('validation:invalid_format', {
               field: i18n.t('auth:field.password').toLowerCase(),
            }),
         )
         .regex(
            /[a-z]/,
            i18n.t('validation:invalid_format', {
               field: i18n.t('auth:field.password').toLowerCase(),
            }),
         )
         .regex(
            /[A-Z]/,
            i18n.t('validation:invalid_format', {
               field: i18n.t('auth:field.password').toLowerCase(),
            }),
         )
         .regex(
            /\d/,
            i18n.t('validation:invalid_format', {
               field: i18n.t('auth:field.password').toLowerCase(),
            }),
         ),
      confirm_password: z.string().min(
         8,
         i18n.t('validation:not_match', {
            field: i18n.t('auth:field.password').toLowerCase(),
         }),
      ),
   })
   .refine((data) => data.password === data.confirm_password, {
      path: ['confirm_password'],
      message: i18n.t('validation:not_match', {
         field: i18n.t('auth:field.password').toLowerCase(),
      }),
   });

const defaultRegisterValue: RegisterSchema = {
   email: '',
   password: '',
   confirm_password: '',
};

export { registerSchema, type RegisterSchema, defaultRegisterValue };
