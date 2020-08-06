import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Saved from "./pages/SavedBooks";
import Search from "./pages/Books";
import NoMatch from "./pages/NoMatch";

function App() {
  return ( 
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/SavedBooks" component={Saved} />
          <Route exact path="/SearchBooks" component={Search} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
