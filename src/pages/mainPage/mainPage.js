import React from "react";

import Hero from "../../components/hero";
import About from "../../components/about";
import Grid from "../../components/grid";
import Collection from "../../components/collection";
import Subscription from "../../components/subscription";
import Footer from "../../components/footer";

export default function MainPage() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Grid />
      <Collection />
      <Subscription />
      <Footer />
    </React.Fragment>
  );
}
