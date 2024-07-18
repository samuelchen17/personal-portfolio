import React, { Suspense, lazy, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreLoader from "./components/PreLoader.jsx";
import { NavModalProvider } from "./NavModalContext.jsx";
import useImgLoader from "./components/hooks/ useImgLoader.jsx";

// import HomePage from "./pages/HomePage.jsx";
// import Resume from "./pages/Resume.jsx";
// import ErrorPage from "./pages/ErrorPage.jsx";

const HomePage = lazy(() => import("./pages/HomePage"));
const Resume = lazy(() => import("./pages/Resume"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const bgImgPath = "./assets/background/heroBg.jpg";

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

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  // const loading = useImgLoader(bgImgPath);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <Suspense fallback={<PreLoader />}>
      <NavModalProvider>
        <RouterProvider router={router} />
      </NavModalProvider>
    </Suspense>
  );
};

export default App;
