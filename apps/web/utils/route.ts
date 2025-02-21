import { DEFAULT_LNG } from '@packages/utils';

const pattern = /^(\/?(vi)(\/|$))/;

function validRoute(route: string) {
   return pattern.test(route);
}

function ensureRoute({
   route,
   lng = DEFAULT_LNG,
}: {
   route: string;
   lng: string;
}) {
   if (validRoute(route)) {
      return route;
   }

   return `/${lng}${route}`;
}

function removeLng(route: string): string {
   return route.replace(pattern, '/');
}

export { validRoute, removeLng, ensureRoute };
