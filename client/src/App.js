import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Jumbotron from "./components/Jumbotron";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Jumbotron />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
