import React from "react";
import Base from "./containers/Base/Base";
import { withRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Search from "./containers/Search/Search";
import Property from "./containers/Property/Property";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/search" exact component={Search} />
        <Route path="/:id" exact component={Property} />
        <Route path="/" exact component={Base} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
