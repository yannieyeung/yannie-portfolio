import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import contact from "../contact.module.scss";

function Contact() {
  return (
    <div className={contact.wrapper}>
      <div className={contact.textWrapper}>
        <p>
          {`<a href="`}
          <span className={contact.email}>yannieyty@gmail.com</span>
          {`">`}
        </p>
      </div>
      <a
        href="https://www.linkedin.com/in/yannie-yeung"
        target="_blank"
        className={contact.linkedinWrapper}
      >
        <div>
          <p>
            {`<a href="`}
            <span className={contact.linkedin}>
              https://www.linkedin.com/in/yannie-yeung
            </span>
            {`">`}
          </p>
        </div>
      </a>
      <Link to={"/"} className={contact.back}>
        <button className={contact.button}>Back Home</button>
      </Link>
    </div>
  );
}

export default Contact;
