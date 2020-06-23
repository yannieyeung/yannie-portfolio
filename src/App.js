import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import About from "./component/About";
import Home from "./component/Home";
import AllPortfolio from "./component/portfolio/AllPortfolio";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolios" component={AllPortfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
