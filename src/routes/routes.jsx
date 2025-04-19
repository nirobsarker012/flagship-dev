import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import { Children } from "react";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading Data ......</p>,
        loader: () => fetch(`phones.json`),
      },
      {
        path: "/favourites",
        Component: Favourites,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/phoneDetails",
        Component: PhoneDetails,
      },
    ],
  },
]);
