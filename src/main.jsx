import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import AllProducts from "./pages/AllProducts/AllProducts";
import ViewCart from "./pages/ViewCart/ViewCart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "/cart",
        element: <ViewCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
