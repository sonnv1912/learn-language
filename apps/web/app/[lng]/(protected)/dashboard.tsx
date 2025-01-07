import { signIn } from '@utils/auth';

const Page = () => {
   return (
      <form
         action={async () => {
            'use server';
            await signIn('github', { redirectTo: '/dashboard' });
         }}
      >
         <button type='submit'>Sign in</button>
      </form>
   );
};

export default Page;
