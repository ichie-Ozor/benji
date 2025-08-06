import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import PageLoader from '../component/loader/PageLoader';
import ErrorBoundary from './ErrorBoundary';
import HomeLayout from './HomeLayout';
import Home from '../component/Home';
// import Signin from '../component/Signin';


// const Event = lazy(() => import('../component/Event'));
// const Manual = lazy(() => import('../component/Manual'))
// const CreateBio = lazy(() => import('../component/CreateBio'))

const isAuthenticated = () => {
    return !!localStorage.getItem('token')
}

const router = createBrowserRouter(
    [
        // {
        //     path: '/',
        //     // element: <Signin />,
        //     errorElement: <ErrorBoundary />,
        // },
        {
            // path: '/home',
            path: '/',
            element: <HomeLayout />,
            errorElement: <ErrorBoundary />,
            // loader: () => {
            //     if (!isAuthenticated()) {
            //         throw new Response('Unauthorized', { status: 401 })
            //     }
            //     return null;
            // },
            children: [
                // { path: 'create-bio', element: <CreateBio /> },
                { path: 'home', element: <Home /> },
                // { path: 'event', element: <Event /> },
                // { path: 'manual', element: <Manual /> },
                { index: true, element: <Navigate to='home' replace /> },
                { path: '*', element: <Navigate to='/' replace /> }
            ]
        }]
)

const AppRouters = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default AppRouters;