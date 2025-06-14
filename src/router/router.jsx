

import {
  createBrowserRouter
} from "react-router";
import Root from "../pages/root/root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/login',
            Component: Login
        },
        {
            
        }
    ]
  },
]);

export default router;