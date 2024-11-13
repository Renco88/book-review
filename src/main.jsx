import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import Listedbooks from './Components/Listedbooks/Listedbooks';
import Pagestoread from './Components/Pagestoread/Pagestoread';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Listedbooks",
        element:<Listedbooks></Listedbooks>
      },
      {
        path: "/Pagestoread",
        element:<Pagestoread></Pagestoread>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)