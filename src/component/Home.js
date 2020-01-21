import React from "react";
import "./Home.css";
import BgImg from "../images/test.jpg";

const homeImg = {
  backgroundImage: "url(" + BgImg + ")"
};

function Home() {
  return (
    <div className="home" style={homeImg}>
      <p className="animated fadeInDown delay-2s text layer1">Joni's</p>
      <h3 className="animated fadeInLeft delay-3s text layer2">
        Driving School
      </h3>
    </div>
  );
}

export default Home;
