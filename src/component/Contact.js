import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import "./Contact.css";

function Contact({ t }) {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = e =>
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setContactInfo({});
  };

  return (
    <div className="contact text-center">
      <div className="contact--content">
        <header className="contact--header">
          <h2>{t("title")}</h2>
        </header>
        <form className="contact--form" onSubmit={handleSubmit}>
          <div className="row contact--row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control contact--field"
                placeholder={t("name")}
                onChange={handleChange}
              />
              <input
                type="email"
                className="form-control contact--field"
                placeholder={t("email")}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control contact--field"
                placeholder={t("subject")}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <textarea
                className="form-control"
                rows="7"
                placeholder={t("message")}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row d-flex justify-content-center contact--button">
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
