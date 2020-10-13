import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./home";
import AboutMe from "./aboutme";
import Apps from "./apps";
import Design from "./designs";
import Games from "./games";

const Main = () => (
  <Switch>
    <Route path="/#aboutme" component={AboutMe} />
  </Switch>
);

export default Main;
