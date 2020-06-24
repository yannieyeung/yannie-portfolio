import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import about from "../about.module.scss";

function About() {
  return (
    <div className={about.aboutWrapper}>
      <div className={about.textWrapper}>
        <div>
          const <span className={about.yannieYeung}>yannieYeung</span> = a{" "}
          <span className={about.software}>
            software engineer, full stack developer
          </span>{" "}
          who loves creating beautiful, functional, professional websites;
        </div>
        <div className={about.functionContainer}>
          <p className={about.functionP}>
            function <span className={about.function}>yannie( )</span>
            {`{`}
          </p>
          <div className={about.functionWrapper}>
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
          </div>
          <p className={about.closeB}>
            {`}
          `}{" "}
          </p>
        </div>
      </div>
      <Link to={"/contact"} target="_blank">
        <button className={about.button}>Find me</button>
      </Link>
    </div>
  );
}

export default About;
