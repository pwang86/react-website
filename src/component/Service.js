import React from "react";
import "./Service.scss";
import { withNamespaces } from "react-i18next";

function Service({t}) {
  return (
    <div className="service">
      <h1 className="text-center">{t("service")}</h1>
      <li>{t("service1")}</li>
      <li>{t("service2")}</li>
      <li>{t("service3")}</li>
    </div>
);
}



export default withNamespaces()(Service);