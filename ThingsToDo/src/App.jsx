import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThingsToDo } from "./screens/ThingsToDo";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ThingsToDo />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
