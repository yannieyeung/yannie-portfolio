import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import portfolioDetails from "../../portfolioDetails";

import eachPort from "./eachPort.module.scss";

import Animation from "./Animation";

function EachPortfolio() {
  var allPortfolio = portfolioDetails.portfolioDetails;
  var eachPortfolio = allPortfolio.map((portfolioDetail) => {
    return (
      <div className={eachPort.eachWrapper}>
        <a href={portfolioDetail.url} className={eachPort.link}>
          <div>
            <h3 className={eachPort.title}>{portfolioDetail.name}</h3>
            {/* <a href={portfolioDetail.url}>
            <button className={eachPort.button}>Click here</button>
          </a> */}
            <Animation anim={portfolioDetail.animUrl} />
            <div className={eachPort.description}>
              <p>{portfolioDetail.description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });
  return <div className={eachPort.allWrapper}>{eachPortfolio}</div>;
}

export default EachPortfolio;
