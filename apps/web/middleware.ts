import {
   COOKIE,
   LANGUAGES,
   DEFAULT_LNG,
   route,
   privateRoutes,
} from '@packages/utils';
import { auth } from '@utils/auth';
import { ensureRoute, removeLng, validRoute } from '@utils/route';
import { NextResponse } from 'next/server';

export const config = {
   matcher: [
      '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
   ],
};

export default auth((req) => {
   let lng: string | undefined | null;

   const response = NextResponse.next();
   const refererUrl = req.headers.get('referer');

   const isPrivateRoute = privateRoutes.includes(
      removeLng(req.nextUrl.pathname),
   );

   if (req.cookies.has(COOKIE.i18n)) {
      lng = req?.cookies?.get(COOKIE.i18n)?.value;
   }

   if (!lng) {
      lng = DEFAULT_LNG;

      response.cookies.set(COOKIE.i18n, lng);
   }

   if (!req.auth && isPrivateRoute) {
      const newUrl = new URL(ensureRoute(route.login), req.nextUrl.origin);

      return Response.redirect(newUrl);
   }

   if (
      !validRoute(req.nextUrl.pathname) &&
      !req.nextUrl.pathname.startsWith('/_next')
   ) {
      return NextResponse.redirect(
         new URL(ensureRoute(req.nextUrl.pathname, lng), req.url),
      );
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

   return NextResponse.next();
});
