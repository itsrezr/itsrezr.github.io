import React, { Component } from "react";
import "./App.css";
import { Navigation, Header } from "react-mdl";
import Home from "./Page Sections/HomePage.js";
import Apps from "./Page Sections/Projects Section/ProjectsPage";
import Designs from "./Page Sections/Designs Section/DesignsPage.js";
import AboutMe from "./Page Sections/AboutMePage.js";

class App extends Component {
  componentDidMount() {
    this.prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
      var currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById("header-row").style.top = "0";
      } else {
        document.getElementById("header-row").style.top = "-50px";
      }
      this.prevScrollpos = currentScrollPos;
    }

  render() {
    return (
      <div>
        <Header className="regText" id="header-row" transparent title=" ">
          <ul transparent>
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
        <Apps />
        <Designs />
        <AboutMe />
      </div>
    );
  }
}

export default App;