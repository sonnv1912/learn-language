const route = {
   // public
   home: '/',
   social: '/social',

   // auth
   login: '/auth/login',
   register: '/auth/register',

   // protected
   dashboard: '/dashboard',
   lexis: '/lexis',
   profile: '/profile',
};

const authRoutes = [route.login, route.register];

const publicRoutes = [route.home, route.social];

const privateRoutes = [route.dashboard, route.lexis];

const routesCantAccessWhenLogin = [route.login, route.register];

export {
   route,
   publicRoutes,
   privateRoutes,
   authRoutes,
   routesCantAccessWhenLogin,
};
