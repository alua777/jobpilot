import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import FindJob from './pages/FindJob/FindJob';
import JobDetails from './pages/JobDetails/JobDetails';

const router = createBrowserRouter([
    { 
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/findjob',
                element: <FindJob/>
            },
            {
                path: `/findjob/job/:jobId`,
                element: <JobDetails/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


