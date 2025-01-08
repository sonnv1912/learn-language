import { signOut } from '@utils/auth';

const Page = () => {
   return (
      <form
         action={async () => {
            'use server';
            await signOut();
         }}
      >
         <button type='submit'>Sign out</button>
      </form>
   );
};

export default Page;
