import React from "react";
import NavBar from "../component/NavBar";
import Contact from "../component/Contact";
// import Home from "../component/Home";
import Service from "../component/Service";
import Introduction from "../component/Introduction";
import Footer from "../component/Footer";
import Slider from "../component/Slider2";

function App() {
  const imgs = [
    '../images/L.jpg',
    '../images/window.jpg',
    '../images/mirror.jpg'
  ];
  return (
    <div>
      <NavBar />
      <Slider slides={imgs} />
      <Service />
      <Introduction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
