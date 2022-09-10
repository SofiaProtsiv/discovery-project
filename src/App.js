import React from "react";
import { useEffect, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.scss";
import PrivateRoute from "./components/routes/privateRoute";
import PublicRoute from "./components/routes/publicRoute";

const MainPage = lazy(() => import("./pages/mainPage"));
const PhotoPage = lazy(() => import("./pages/photoPage"));
const GalleryPage = lazy(() => import("./pages/galleryPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <Switch>
      <Suspense fallback={"Loading"}>
        <PublicRoute exact path="/">
          <MainPage />
        </PublicRoute>
        <PrivateRoute exact path="/photos">
          <GalleryPage />
        </PrivateRoute>
        <PrivateRoute exact path="/photos/:photoID">
          <PhotoPage />
        </PrivateRoute>
        <PublicRoute exact path="/register" restricted>
          {/* <RegisterView /> */}
          hello
        </PublicRoute>
        <PublicRoute exact path="/login" redirectTo="/" restricted>
          {/* <LoginView /> */}
          login
        </PublicRoute>
      </Suspense>
    </Switch>
  );
}

export default App;
