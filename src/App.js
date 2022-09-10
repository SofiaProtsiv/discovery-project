import React from "react";
import { useEffect, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = lazy(() => import("./pages/mainPage"));
const PhotoPage = lazy(() => import("./pages/photoPage"));
const GalleryPage = lazy(() => import("./pages/galleryPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <Switch>
      <Suspense fallback={"Loading"}>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/photos">
          <GalleryPage />
        </Route>
        <Route exact path="/photos/:photoID">
          <PhotoPage />
        </Route>
        {/* <Route exact path="/register" restricted>

          hello
        </Route>
        <Route exact path="/login" redirectTo="/" restricted>

          login
        </Route> */}
      </Suspense>
    </Switch>
  );
}

export default App;
