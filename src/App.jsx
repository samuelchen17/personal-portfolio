import React, { Suspense, lazy, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreLoader from "./components/PreLoader.jsx";
import { NavModalProvider } from "./context/NavModalContext.jsx";
import { LoadedProvider } from "./context/LoadedContext.jsx";

// import HomePage from "./pages/HomePage.jsx";
// import Resume from "./pages/Resume.jsx";
// import ErrorPage from "./pages/ErrorPage.jsx";

const HomePage = lazy(() => import("./pages/HomePage"));
const Resume = lazy(() => import("./pages/Resume"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <LoadedProvider>
        <NavModalProvider>
          <RouterProvider router={router} />
        </NavModalProvider>
      </LoadedProvider>
    </Suspense>
  );
};

export default App;
