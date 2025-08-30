import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import PageNotFound from './components/PageNotFound.jsx';

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound/>
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
