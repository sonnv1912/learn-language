import { getMyProfile } from '@/hooks/query/use-my-profile';
import type { Login } from '@packages/types';
import { METHOD, api, username } from '@packages/utils';
import NextAuth, { type DefaultSession } from 'next-auth';
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { request } from './request';

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
            email: {},
            password: {},
         },
         authorize: async (data) => {
            const loginResponse = await request<Login>({
               endpoint: api.login,
               options: {
                  method: METHOD.post,
                  body: data,
               },
            });

            const profileResponse = await getMyProfile(
               loginResponse?.data?.access_token,
            );

            return {
               id: profileResponse?.data?.id,
               email: profileResponse?.data?.email,
               image: profileResponse?.data?.avatar,
               name: username(profileResponse?.data),
               access_token: loginResponse?.data?.access_token,
               refresh_token: loginResponse?.data?.refresh_token,
               expires: loginResponse?.data?.expires,
            };
         },
      }),
   ],
});
