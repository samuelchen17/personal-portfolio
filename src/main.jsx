import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

import HomePage from "./pages/HomePage.jsx";
import Resume from "./pages/Resume.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollToHashElement behavior="smooth" block="start" inline="start" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
