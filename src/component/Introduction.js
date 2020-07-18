import React from "react";
import { withNamespaces } from "react-i18next";
import "./Introduction.scss";
import feature1 from "../images/mug.jpg";
import feature2 from "../images/board.jpg";
import feature3 from "../images/penguin.jpg";

function Introduction({ t }) {
  return (
    <div className="introduction">
      <h1 className="text-center intro--header">{t("why")}</h1>
      <section className="feature left">
        <a href="#" className="feature-image">
          <img src={feature1} alt="book" />
        </a>
        <div className="feature-content">
          <h4>{t("interactive")}</h4>
          <p>{t("interactive-info")}</p>
        </div>
      </section>
      <section className="feature right">
        <a href="#" className="feature-image">
          <img src={feature2} alt="penguin" />
        </a>
        <div className="feature-content">
          <h4>{t("details")}</h4>
          <p>{t("details-info")}</p>
        </div>
      </section>
      <section className="feature left">
        <a href="#" className="feature-image">
          <img src={feature3} alt="town" />
        </a>
        <div className="feature-content">
          <h4>{t("profession")}</h4>
          <p>{t("profession-info")}</p>
        </div>
      </section>
    </div>
  );
}

export default withNamespaces()(Introduction);
