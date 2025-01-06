import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
   callbacks: {
      authorized: ({ auth }) => {
         return !!auth;
      },
      session({ session, token, user }) {
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
         authorize: (credentials) => {
            return {};
         },
      }),
   ],
});
