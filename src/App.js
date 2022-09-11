import React, { useEffect, useRef, useState } from "react";
import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Loader from "./components/loader";

const MainPage = lazy(() => import("./pages/mainPage"));
const PhotoPage = lazy(() => import("./pages/photoPage"));
const GalleryPage = lazy(() => import("./pages/galleryPage"));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsPageLoaded(true);
    }
  }, [isLoaded]);

  return (
    <Switch>
      {isPageLoaded ? (
        <Suspense fallback={<Loader />}>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/photos">
            <GalleryPage />
          </Route>
          <Route exact path="/photos/:photoID">
            <PhotoPage />
          </Route>
        </Suspense>
      ) : (
        <Loader />
      )}
    </Switch>
  );
}

export default App;
