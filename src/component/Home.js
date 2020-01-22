import React from "react";
import "./Home.css";
import BgImg from "../images/test.jpg";
import { withNamespaces } from "react-i18next";

const homeImg = {
  backgroundImage: "url(" + BgImg + ")"
};

function Home({ t }) {
  return (
    <div className="home" style={homeImg}>
      <p className="animated fadeInDown delay-2s text layer1">Joni's</p>
      <h3 className="animated fadeInLeft delay-3s text layer2">{t("ds")}</h3>
    </div>
  );
}

export default withNamespaces()(Home);
