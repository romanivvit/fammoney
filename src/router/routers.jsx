import WelcomePage from '../pages/Authentication/WelcomePage/WelcomePage';

// eslint-disable-next-line no-unused-vars
const checkAuth = (IsAuthenticated) => () => (IsAuthenticated ? false : '/login');
// eslint-disable-next-line no-unused-vars
const redirectToDashboard = (IsAuthenticated) => () => (IsAuthenticated ? '/dashboard' : false);
// eslint-disable-next-line no-unused-vars
const checkAuthWithRedirect = (IsAuthenticated) => () => (IsAuthenticated ? '/dashboard' : '/login');

const routers = (IsAuthenticated) => [
    {
        path: '/',
        exact: true,
        component: WelcomePage,
        before: checkAuthWithRedirect(IsAuthenticated),

    },
    {
        path: '/login',
        exact: true,
        component: WelcomePage,
        before: redirectToDashboard(IsAuthenticated),
    },
    {
        path: '/registration',
        exact: true,
        component: WelcomePage,
        before: redirectToDashboard(IsAuthenticated),
    },
];

export default routers;
