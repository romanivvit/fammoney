import WelcomePageContainer from '../pages/Authentication/container/WelcomePage';

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
        component: WelcomePageContainer,
        before: checkAuthWithRedirect(IsAuthenticated),

    },
    {
        path: '/login',
        exact: true,
        component: WelcomePageContainer,
        before: redirectToDashboard(IsAuthenticated),
    },
    {
        path: '/register',
        exact: true,
        component: WelcomePageContainer,
        before: redirectToDashboard(IsAuthenticated),
    },
];

export default routers;
