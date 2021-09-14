import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Resume from "./components/Resume";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
