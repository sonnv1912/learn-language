import { username } from '@packages/utils';
import NextAuth, { type DefaultSession } from 'next-auth';
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';

declare module 'next-auth' {
   interface Session {
      user: {
         access_token: string;
         refresh_token: string;
         expires: number;
      } & DefaultSession['user'];
   }
}

declare module 'next-auth/jwt' {
   interface JWT {
      access_token: string;
      refresh_token: string;
      expires: number;
   }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
   jwt: {
      maxAge: 365 * 24 * 60 * 60,
   },
   session: {
      maxAge: 365 * 24 * 60 * 60,
   },
   callbacks: {
      authorized: ({ auth }) => {
         return !!auth;
      },
      jwt(params) {
         return {
            ...params.token,
            ...params.session,
            ...params.user,
         };
      },
      session({ session, token }) {
         return {
            ...session,
            user: {
               access_token: token.access_token,
               refresh_token: token.refresh_token,
               expires: token.expires + Date.now(),
               id: token.id as string,
               email: token.email,
               image: session.user.image,
               name: session.user.name,
            },
         };
      },
   },
   providers: [
      Credentials({
         credentials: {
            access_token: {},
            refresh_token: {},
            expires: {},
            id: {},
            email: {},
            avatar: {},
            first_name: {},
            last_name: {},
         },
         authorize: (data) => {
            return {
               id: data?.id as string,
               email: data?.email as string,
               image: data?.avatar as string,
               name: username({
                  first_name: data.first_name as string,
                  last_name: data.last_name as string,
               }),
               access_token: data?.access_token,
               refresh_token: data?.refresh_token,
               expires: data?.expires,
            };
         },
      }),
   ],
});
