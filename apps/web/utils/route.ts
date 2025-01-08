const pattern = /^(\/?(vi)(\/|$))/;

function validRoute(route?: string) {
   return pattern.test(route || '');
}

function ensureRoute(route?: string, lng?: string) {
   if (validRoute(route)) {
      return route;
   }

   return `/${lng}${route}`;
}

function removeLng(route: string): string {
   return route.replace(pattern, '/');
}

export { validRoute, removeLng, ensureRoute };
