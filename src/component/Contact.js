import React from "react";
import { withNamespaces } from "react-i18next";
import "./Contact.css";

function Contact({ t }) {
  return (
    <div className="contact text-center">
      <div className="contact--content">
        <header className="contact--header">
          <h2>{t("title")}</h2>
        </header>
        <form className="contact--form">
          <div className="row contact--row">
            <div className="col">
              <input
                type="text"
                className="form-control contact--field"
                placeholder={t("name")}
              />
              <input
                type="email"
                className="form-control contact--field"
                placeholder={t("email")}
              />
              <input
                type="text"
                className="form-control contact--field"
                placeholder={t("subject")}
              />
            </div>
            <div className="col">
              <textarea
                className="form-control"
                rows="7"
                placeholder={t("message")}
              />
            </div>
          </div>
          <div className="form-group row  d-flex justify-content-center contact--button">
            <button type="submit" className="btn btn-primary btn-lg">
              {t("submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withNamespaces()(Contact);
/* <form>
          <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputName" placeholder="Name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputSubject" className="col-sm-2 col-form-label">Subject</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputSubject" placeholder="Subject" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputMessage" className="col-sm-2 col-form-label">Message</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="inputMessage" rows="6" placeholder="Message" />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center">
            <div className="clo-sm-10">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form> */
