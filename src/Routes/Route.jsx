import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import EventPage from "../Pages/EventPage";
import MainLayouts from "./../Layouts/MainLayouts";
import MyEvent from "../Pages/MyEvent";
import Add_Events from "../Pages/Add_Events";
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
      {
        path: "/myEvents",
        element: <MyEvent></MyEvent>,
      },
      {
        path: "/addEvents",
        element: <Add_Events></Add_Events>,
      },
    ],
  },
]);
