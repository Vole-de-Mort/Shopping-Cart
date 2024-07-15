import ErrorPage from './component/ErrorPage';
import HomePage from './component/HomePage';
import Shop from './component/Shop';
const routers = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shop',
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
];
export default routers;
