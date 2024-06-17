import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/animals",
        element: <Animals></Animals>
      },
      {
        path: "/animals/:animalId",
        element: <Animal></Animal>
      }
    ],
    errorElement: <NotFound></NotFound>
  }
])