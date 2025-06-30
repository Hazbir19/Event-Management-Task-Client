import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import Home from "./Pages/Home.jsx";
import ContextApi from "./Context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <RouterProvider router={router}>
        <Home></Home>
      </RouterProvider>
    </ContextApi>
  </StrictMode>
);
