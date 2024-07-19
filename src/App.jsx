import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreLoader from "./components/PreLoader.jsx";
import { NavModalProvider } from "./components/hooks/NavModalContext.jsx";

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
      <NavModalProvider>
        <RouterProvider router={router} />
      </NavModalProvider>
    </Suspense>
  );
};

export default App;
