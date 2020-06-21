import React from "react";
import NavBar from "../component/NavBar";
import Contact from "../component/Contact";
// import Home from "../component/Home";
import Introduction from "../component/Introduction";
import Footer from "../component/Footer";
import Slider from "../component/Slider";

function App() {
  return (
    <div>
      <NavBar />
      <Slider />
      <Introduction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
