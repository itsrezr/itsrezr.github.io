import React, { Component } from "react";
import "../../Page Sections CSS/Projects/ProjectsPage.css";
import Projects from "./MyProjects";
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import NET from "vanta/dist/vanta.net.min.js";

class Apps extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: "#Projects",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: 9.0,
      maxDistance: 23.0,
      spacing: 20.0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    const FadeUp = styled.div`
      animation: 3s ${keyframes`${fadeInUp}`};
    `;
    return (
      <div className="sectionPage" id="Projects" ref={this.vantaRef}>
        <FadeUp>
          <h1 id="projects-title">PROJECTS</h1>
        </FadeUp>
        <Projects />
      </div>
    );
  }
}

export default Apps;
