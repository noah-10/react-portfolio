import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const router = createBrowserRouter([
    {
        //Defining router
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'portfolio',
                element: <Portfolio />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
