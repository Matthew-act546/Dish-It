import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import PageNotFound from './components/PageNotFound.jsx';
import Favorites from './components/Favorites.jsx';
import BrowseDish from './components/BrowseDish.jsx';
import CountryDish from './components/CountryDish.jsx';

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound/>
  },
  {
    path: '/Favorites',
    element: <Favorites />,
  },
  {
    path: '/CountryDish',
    element: <Favorites />,
  },
  {
    path: '/BrowseDish',
    element: <Favorites />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
