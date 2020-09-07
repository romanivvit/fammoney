import WelcomePage from '../pages/Auth/WelcomePage/WelcomePage';

// eslint-disable-next-line no-unused-vars
const checkAuth = (IsAuthenticated) => () => (IsAuthenticated ? false : '/login');
// eslint-disable-next-line no-unused-vars
const redirectToDashboard = (IsAuthenticated) => () => (IsAuthenticated ? '/dashboard' : false);
// eslint-disable-next-line no-unused-vars
const checkAuthWithRedirect = (IsAuthenticated) => () => (IsAuthenticated ? '/dashboard' : '/login');

const routers = () => [
    {
        path: '/',
        strict: true,
        component: WelcomePage,
        // before: checkAuthWithRedirect(IsAuthenticated),

    },
];

export default routers;
