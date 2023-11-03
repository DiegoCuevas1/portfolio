import "./globals.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import 'tailwindcss/tailwind.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import Landing from "./components/Landing";


const router = createBrowserRouter([
  {
    path: "/",
    element: [<Landing />, <Root />,],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
