import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Error404 from './components/Pages/Error404';
import Home from './components/Pages/Home';
import Statistics from './components/Pages/Statistics';
import Dashboard from './components/Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement : <Error404/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/statistics",
        element: <Statistics/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
