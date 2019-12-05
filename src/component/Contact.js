import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <header>
        <h2>Contact Me</h2>
      </header>
      <form>
        <div className="from-group row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputName" palceholder="Name" />
          </div>
        </div>
        <div className="from-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" palceholder="Email" />
          </div>
        </div>
        <div className="from-group row">
          <label htmlFor="inputSubject" className="col-sm-2 col-form-label">Subject</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputSubject" palceholder="Subject" />
          </div>
        </div>
        <div className="from-group row">
          <label htmlFor="inputMessage" className="col-sm-2 col-form-label">Message</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="inputMessage" rows="4" palceholder="Message" />
          </div>
        </div>
        <div className="from-group row d-flex justify-content-center">
          <div className="clo-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;