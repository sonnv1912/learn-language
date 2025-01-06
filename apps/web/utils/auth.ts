import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

declare module 'next-auth' {
   interface User {}

   interface Session {}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
   callbacks: {
      authorized: ({ auth }) => {
         return !!auth;
      },
      session({ session }) {
         return {
            ...session,
            user: {
               ...session.user,
            },
         };
      },
   },
   providers: [
      Credentials({
         credentials: {
            email: {},
            password: {},
         },
         authorize: () => {
            return {};
         },
      }),
   ],
});
