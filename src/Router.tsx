import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './page/Home';
import { Products } from './page/Products';
import { NotFound } from './page/NotFound';
import { Linked } from './page/Liked';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'home',
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
        path: '*',
        element: <NotFound />,
    }, 
]);


export default router;