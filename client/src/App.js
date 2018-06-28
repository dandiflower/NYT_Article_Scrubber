import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SearchCard from "./components/SearchCard";
import Jumbotron from "./components/Jumbotron";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Articles" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
