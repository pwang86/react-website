import React from "react";
import NavBar from "../component/NavBar";
import Contact from "../component/Contact";
// import Home from "../component/Home";
import Service from "../component/Service";
import Introduction from "../component/Introduction";
import Footer from "../component/Footer";
import Slider from "../component/Slider2";
import s1 from "../images/L.jpg";
import s2 from "../images/window.jpg";
import s3 from "../images/mirror.jpg";

function App() {

  const imgs = [s1, s2, s3];
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
