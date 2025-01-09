import {
   COOKIE,
   DEFAULT_LNG,
   LANGUAGES,
   privateRoutes,
   route,
   routesCantAccessWhenLogin,
} from '@packages/utils';
import { auth } from '@utils/auth';
import { ensureRoute, removeLng } from '@utils/route';
import { NextResponse } from 'next/server';

export const config = {
   matcher: [
      '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
   ],
};

export default auth((req) => {
   const response = NextResponse.next();

   if (
      req.nextUrl.pathname.startsWith('/resources') ||
      req.nextUrl.pathname.startsWith('/app')
   ) {
      return response;
   }

   let lng: string | undefined | null;

   const loggedIn = !!req.auth;
   const refererUrl = req.headers.get('referer');

   const isPrivateRoute = privateRoutes.includes(
      removeLng(req.nextUrl.pathname),
   );

   const isSpecialRoute = routesCantAccessWhenLogin.includes(
      removeLng(req.nextUrl.pathname),
   );

   if (req.cookies.has(COOKIE.i18n)) {
      lng = req?.cookies?.get(COOKIE.i18n)?.value;
   }

   if (!lng) {
      lng = DEFAULT_LNG;

      response.cookies.set(COOKIE.i18n, lng);
   }

   if (loggedIn && isSpecialRoute) {
      return NextResponse.redirect(
         new URL(
            ensureRoute({
               lng,
               route: route.home,
            }),
            req.url,
         ),
      );
   }

   if (!loggedIn && isPrivateRoute) {
      const newUrl = new URL(
         ensureRoute({
            lng,
            route: route.login,
         }),
         req.nextUrl.origin,
      );

      return Response.redirect(newUrl);
   }

   if (refererUrl) {
      const lngInReferer = LANGUAGES.find((l) =>
         refererUrl.startsWith(`/${l}`),
      );

      if (lngInReferer) {
         response.cookies.set(COOKIE.i18n, lngInReferer);
      }

      return response;
   }

   return response;
});
