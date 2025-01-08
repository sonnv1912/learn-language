const route = {
   home: '/',
   login: '/auth/login',
   register: '/auth/register',
   dashboard: '/dashboard',
   lexis: '/lexis',
   profile: '/profile',
};

const authRoutes = [route.login, route.register];

const publicRoutes = [route.home];

const privateRoutes = [route.dashboard, route.lexis];

const routesCantAccessWhenLogin = [route.login, route.register];

export {
   route,
   publicRoutes,
   privateRoutes,
   authRoutes,
   routesCantAccessWhenLogin,
};
