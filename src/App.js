import "./App.scss";
// import Container from "../src/components/container";
import Hero from "../src/components/hero";
import Footer from "../src/components/footer";
import Subscription from "./components/subscription";
import Collection from "./components/collection";
function App() {
  return (
    <>
      <Hero />
      <Collection />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
