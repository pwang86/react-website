import React from "react";
import "./Service.scss";
import { withNamespaces } from "react-i18next";

function Service({t}) {
  return (
    <div>
      <li>Driving Test</li>
      <li>Refresh</li>
      <li>Moving to NSW</li>
    </div>
);
}



export default withNamespaces()(Service);