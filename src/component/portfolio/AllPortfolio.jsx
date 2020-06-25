import React from "react";
// import "./App.css";
import EachPortfolio from "./EachPortfolio";
import allPort from "./allPort.module.scss";

function AllPortfolio() {
  return (
    <div className={allPort.allPortfoliosContainer}>
      <EachPortfolio />
    </div>
  );
}

export default AllPortfolio;
