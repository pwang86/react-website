import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import * as yup from "yup";
import { pick } from "lodash/object";
import { getValidationErrors } from "../common/helper";
import classnames from "classnames";
import "./Contact.css";

const schema = yup.object().shape({
  name: yup.string().label("Name").required(),
  email: yup.string().email().label("Email").required(),
  subject: yup.string().label("Subject").required(),
  message: yup.string().label("message").required(),
});

function Contact({ t }) {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    setValidationErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = pick(contactInfo, [
      "name",
      "email",
      "subject",
      "message",
    ]);
    try {
      await schema.validate(userInput, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrs = getValidationErrors(err);
      setValidationErrors(validationErrs);
    }
  };

  return (
    <div className="contact text-center">
      <section className="contact--content">
        <header className="contact--header">
          <h1>{t("title")}</h1>
        </header>
        <form className="contact--form" onSubmit={handleSubmit}>
          <div className="row contact--row">
            <div className="col-md-6">
              <div className="row-margin">
                <input
                  name="name"
                  type="text"
                  className={classnames(
                    "form-control contact--field field--font",
                    {
                      "border border-danger": !!validationErrors["name"],
                    }
                  )}
                  placeholder={t("name")}
                  onChange={handleChange}
                  value={contactInfo.name}
                />
                {validationErrors["name"] && (
                  <p className="error text-danger text-left">
                    {validationErrors["name"]}
                  </p>
                )}
              </div>
              <div className="row-margin">
                <input
                  name="email"
                  type="email"
                  className={classnames(
                    "form-control contact--field field--font",
                    { "border border-danger": !!validationErrors["email"] }
                  )}
                  placeholder={t("email")}
                  onChange={handleChange}
                  value={contactInfo.email}
                />
                {validationErrors["email"] && (
                  <p className="error text-danger text-left">
                    {validationErrors["email"]}
                  </p>
                )}
              </div>
              <div className="row-margin">
                <input
                  name="subject"
                  type="text"
                  className={classnames(
                    "form-control contact--field field--font",
                    { "border border-danger": !!validationErrors["subject"] }
                  )}
                  placeholder={t("subject")}
                  onChange={handleChange}
                  value={contactInfo.subject}
                />
                {validationErrors["subject"] && (
                  <p className="error text-danger text-left">
                    {validationErrors["subject"]}
                  </p>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <textarea
                name="message"
                className={classnames(
                  "form-control field--font contact--textarea",
                  { "border border-danger": !!validationErrors["message"] }
                )}
                rows={validationErrors["message"] ? 9 : 7}
                placeholder={t("message")}
                onChange={handleChange}
                value={contactInfo.message}
              />
              {validationErrors["message"] && (
                <p className="error error--textarea text-danger text-left">
                  {validationErrors["message"]}
                </p>
              )}
            </div>
          </div>
          <div className="row d-flex justify-content-center contact--button">
            <button type="submit" className="btn btn-primary">
              {t("send")}
            </button>
          </div>
        </form>
      </section>
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
