import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import EventPage from "../Pages/EventPage";
import MainLayouts from "./../Layouts/MainLayouts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <EventPage></EventPage>,
      },
    ],
  },
]);
