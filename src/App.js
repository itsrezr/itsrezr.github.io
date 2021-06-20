import React, { Component } from "react";
import "./App.css";
import { Navigation, Header } from "react-mdl";
import Home from "./Page Sections/HomePage.js";
import Apps from "./Page Sections/ProjectsPage";
import Designs from "./Page Sections/DesignsPage.js";
import AboutMe from "./Page Sections/AboutMePage.js";
import TechSkills from "./Page Sections/SkillsPage";

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
                <a id="navigationText" href="#Projects">
                  PROJECTS
                </a>
              </li>
              <li>
                <a id="navigationText" href="#Designs">
                  DESIGNS
                </a>
              </li>
              <li>
                <a id="navigationText" href="#AboutMe">
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
