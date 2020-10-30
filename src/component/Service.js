import React from "react";
import "./Service.scss";
import { withNamespaces } from "react-i18next";

function Service({t}) {
  return (
    <div className="service text-center">
      <h1 className="service-header">{t("service")}</h1>
      <div className="container">
        <div className="row service-row">
          <div className="col-sm-4">
            <div className="card service-card">
              <h5 className="card-header card-header--bg text-white">{t("service1")}</h5>
              <div className="card-body">
                <p className="card-text">{t("service1-info")}</p>
                <p>
                  <ul>
                    <li>Bankstown</li>
                    <li>Silverwater</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card service-card">
              <h5 className="card-header card-header--bg text-white">{t("service2")}</h5>
              <div className="card-body">
                <p className="card-text">{t("service2-info")}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card service-card">
              <h5 className="card-header card-header--bg text-white">{t("service3")}</h5>
              <div className="card-body">
                <p className="card-text">{t("service1-info")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}



export default withNamespaces()(Service);
/*

      */

      /*
      <div className="row">
        <div className="col-sm-4">
          <div className="card box-shadow">
            <h5 className="card-header">{t("service1")}</h5>
            <div className="card-body">
              <p className="card-text">{t("service1-info")}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card box-shadow">
            <h5 className="card-header">{t("service2")}</h5>
            <div className="card-body">
              <p className="card-text">{t("service1-info")}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card box-shadow">
            <h5 className="card-header">{t("service3")}</h5>
            <div className="card-body">
              <p className="card-text">{t("service1-info")}</p>
            </div>
          </div>
        </div>
      </div>
      */