import { createBrowserRouter } from 'react-router-dom';
import { Home } from './page/Home';
import { Products } from './page/Products';
import { NotFound } from './page/NotFound';
import { Linked } from './page/Liked';
import { Signin } from './page/Signin';
import { Checkauth } from './loaders/Authentication';
import { Authentication } from './actions/Authenticate';

const router = createBrowserRouter([
    {
        path: 'home',
        loader: Checkauth,
        element: <Home />,
    },
    {
        path: 'products',
        element: <Products />,
    },
    {
        path: 'liked',
        element: <Linked />,
    },
    {
        path: '/signin',
        loader: Checkauth,
        action: Authentication,
        element: <Signin />,
    },
    {
        path: '*',
        element: <NotFound />,
    }, 
]);


export default router;