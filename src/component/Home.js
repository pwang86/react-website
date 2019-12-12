import React from "react";
import "./Home.css";
import BgImg from "../images/test.jpg";

const homeImg = {
  backgroundImage: "url(" + BgImg + ")"
};

function Home() {
  return (
    <div className="home" style={homeImg}>
      <span>Home</span>
    </div>
  );
}

export default Home;
