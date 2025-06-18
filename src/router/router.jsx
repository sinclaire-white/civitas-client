import { createBrowserRouter } from "react-router";
import Root from "../pages/root/root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Join from "../pages/joinEvent/Join";
import Create from "../pages/createEvent/Create";
import Manage from "../pages/manageEvents/Manage";
import PrivateRoute from "./PrivateRoute";
import Upcoming from "../pages/upcomingEvents/Upcoming";
import EventDetails from "../pages/joinEvent/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/join-events",
        element: (
          <PrivateRoute>
            <Join></Join>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-events",
        element: (
          <PrivateRoute>
            <Create></Create>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoute>
            <Manage></Manage>
          </PrivateRoute>
        ),
      },
      {
        path: "/upcoming-events",
        Component: Upcoming,
        loader: () => fetch("http://localhost:3000/events"),
      },
     {
                path: '/events/event-details/:eventId',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
            },
    ],
  },
]);

export default router;
