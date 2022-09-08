import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import MainPage from "./pages/mainPage";
import PhotoPage from "./pages/photoPage";

function App() {
  return (
    <Switch>
      <Suspense fallback={"Loading"}>
        <Route exact path="/photos">
          <MainPage />
        </Route>
        <Route exact path="/photos/:photoID">
          <PhotoPage />
        </Route>
      </Suspense>
    </Switch>
  );
}

export default App;
