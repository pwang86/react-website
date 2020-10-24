import React from "react";
import "./Service.scss";
import { withNamespaces } from "react-i18next";

function Service({t}) {
  return (
    <div className="service">
      <h1 className="text-center">{t("service")}</h1>
      <li>Driving Test</li>
      <li>Refresh</li>
      <li>Moving to NSW</li>
    </div>
);
}



export default withNamespaces()(Service);