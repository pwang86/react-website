import React from "react";
import "./Service.scss";
import { withNamespaces } from "react-i18next";

function Service({t}) {
  return (
    <div className="service text-center">
      <h1 className="service-header">{t("service")}</h1>
      <div className="card-deck">
        <div className="card">
          <div className="card-body card-body-custom">
            <h5 className="card-title card-title-custom text-white">{t("service1")}</h5>
            <p className="card-text card-text-custom">{t("service1-info")} Bankstown and Silverwater.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card-body-custom">
            <h5 className="card-title card-title-custom text-white">{t("service2")}</h5>
            <p className="card-text card-text-custom">{t("service2-info")}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card-body-custom">
            <h5 className="card-title card-title-custom text-white">{t("service3")}</h5>
            <p className="card-text card-text-custom">{t("service3-info")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withNamespaces()(Service);