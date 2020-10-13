import React, { Component } from "react";
import "./App.css";
import { Navigation, Header } from "react-mdl";
import Home from "./Site Components/home.js";
import Apps from "./Site Components/apps.js";
import Designs from "./Site Components/designs.js";
import AboutMe from "./Site Components/aboutme.js";
import TechSkills from "./Site Components/techskills";

class App extends Component {
  render() {
    return (
      <div
        className="everything"
        id="everything"
        // style={{ display: "flex", flexDirection: "column" }}
      >
        <Header className="regText" id="header-row" transparent title=" ">
          <ul
            transparent
            // id="nav-mobile" class="right"
          >
            <Navigation transparent>
              <li>
                <a id="navigationText" href="">
                  HOME
                </a>
              </li>
              <li>
                <a id="navigationText" href="#apps">
                  APPS & GAMES
                </a>
              </li>
              <li>
                <a id="navigationText" href="#designs">
                  DESIGNS
                </a>
              </li>
              <li>
                <a id="navigationText" href="#aboutme">
                  ABOUT ME
                </a>
              </li>
            </Navigation>
          </ul>
        </Header>
        <Home />
        {/* <TechSkills /> */}
        <Apps />
        <Designs />
        <AboutMe />
      </div>
    );
  }
}

export default App;
