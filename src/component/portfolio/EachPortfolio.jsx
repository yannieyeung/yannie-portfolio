import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import portfolioDetails from "../../portfolioDetails";

function EachPortfolio() {
  var allPortfolio = portfolioDetails.portfolioDetails;
  var eachPortfolio = allPortfolio.map((portfolioDetail) => {
    return (
      <div>
        <h3>{portfolioDetail.name}</h3>
        <a href={portfolioDetail.url}>
          <p>Click here</p>
        </a>
        <p>{portfolioDetail.description}</p>
      </div>
    );
  });
  return <div className="each-portfolio-wrapper">{eachPortfolio}</div>;
}

export default EachPortfolio;
