const route = {
   home: '/',
   login: '/auth/login',
   register: '/auth/register',
   dashboard: '/dashboard',
};

const authRoutes = [route.login, route.register];

const publicRoutes = [route.home];

const privateRoutes = [route.dashboard];

export { route, publicRoutes, privateRoutes, authRoutes };
