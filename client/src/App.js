import React from "react";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardHeader from "./components/CardHeader";
import SearchCard from "./components/SearchCard";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <CardHeader />
      <SearchCard />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Articles" component={Home} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
