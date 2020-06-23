import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import about from "../about.module.css";

function About() {
  return (
    <div className={about.aboutWrapper}>
      <h1>This is About.jsx</h1>
      <div>
        const <span>yannieYeung</span> = a{" "}
        <span>software engineer, full stack developer</span> who loves creating
        beautiful, functional, professional websites;
      </div>
      <div>
        <p>
          function <span>yannie( )</span>
          {`{`}
        </p>
        <dd>HTML / CSS;</dd>
        <dd>javascript;</dd>
        <dd>React;</dd>
        <dd>Node;</dd>
        <dd>Express;</dd>
        <dd>Postgres;</dd>
        <dd>Ruby;</dd>
        <dd>illustrator;</dd>
        <dd>photoshop;</dd>
        <dd>after effects;</dd>
        <p>
          {`}
          `}{" "}
        </p>
      </div>
      <Link to={"/contact"}>
        <button>Find me</button>
      </Link>
    </div>
  );
}

export default About;
