import React, { Suspense, lazy, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PreLoader from "./components/PreLoader.jsx";
import { NavModalProvider } from "./context/NavModalContext.jsx";
import { LoadedProvider, useIsLoaded } from "./context/LoadedContext.jsx";

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
  // const { loaded, setIsLoaded } = useIsLoaded();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // });

  // if (loading) {
  //   return <PreLoader />;
  // }

  return (
    <Suspense fallback={<PreLoader />}>
      <NavModalProvider>
        <RouterProvider router={router} />
      </NavModalProvider>
    </Suspense>
  );
};

// const App = () => (
//   <LoadedProvider>
//     <AppContent />
//   </LoadedProvider>
// );

export default App;
