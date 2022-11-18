import exp from 'constants';
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import Home from '../views/Home';
const About = lazy(() => import('../views/About'));
const User = lazy(() => import('../views/User'));
const Page1 = lazy(() => import('../views/Page1'));
const Page2 = lazy(() => import('../views/Page2'));

const withLoadingComponent = (comp: JSX.Element) => (
  <Suspense fallback={<div>loading</div>}>{comp}</Suspense>
);

const routes = [
  {
    path: '/',
    element: <Navigate to='/page1' />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },

  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   element: withLoadingComponent(<About />),
  // },
  // {
  //   path: '/user',
  //   element: withLoadingComponent(<User />),
  // },
];

export default routes;
