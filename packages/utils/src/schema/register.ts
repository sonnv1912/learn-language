import z from 'zod';
import { i18n } from '../i18n';

type RegisterSchema = z.infer<typeof registerSchema>;

const registerSchema = z.object({
   email: z.string().email(
      i18n.t('validation.invalid_format', {
         field: i18n.t('auth.field.email').toLowerCase(),
      }),
   ),
   password: z.string().min(
      1,
      i18n.t('validation.required', {
         field: i18n.t('auth.field.password').toLowerCase(),
      }),
   ),
   confirm_password: z.string().min(
      1,
      i18n.t('validation.required', {
         field: i18n.t('auth.field.password').toLowerCase(),
      }),
   ),
});

const defaultRegisterValue: RegisterSchema = {
   confirm_password: '',
   email: '',
   password: '',
};

export { registerSchema, type RegisterSchema, defaultRegisterValue };
