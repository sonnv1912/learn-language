import z from 'zod';
import { i18n } from '../i18n';

type LoginSchema = z.infer<typeof loginSchema>;

const loginSchema = z.object({
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
});

const defaultLoginValue: LoginSchema = {
   email: '',
   password: '',
};

export { loginSchema, type LoginSchema, defaultLoginValue };
