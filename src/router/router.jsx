import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root.jsx"
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Join from "../pages/joinEvent/Join";
import UserProfile from "../pages/user/UserProfile.jsx"
import Create from "../pages/createEvent/Create";
import Manage from "../pages/manageEvents/Manage";
import PrivateRoute from "./PrivateRoute";
import Upcoming from "../pages/upcomingEvents/Upcoming";
import EventDetails from "../pages/joinEvent/EventDetails";
import About from "../Components/About";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>, 
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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
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
      },
      {
        path: "/events/event-details/:eventId",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
          path: "/about",
        Component: About,
      },
        {path: "/faq",
        Component: Faq,},
        {
            path: "/contact",
        Component: Contact,
        }
    ],
  },
]);

export default router;
