import React, { Component } from "react";
import "../App.css";
import "../Page Sections CSS/HomePage.css";
import TextLoop from "react-text-loop";
import { Container, Row, Col } from "react-bootstrap";
import HALO from "vanta/dist/vanta.halo.min.js";

class Home extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = HALO({
      el: "#home-page-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      baseColor: 0x3663,
      xOffset: -0.18,
      size: 1.3,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
       <div id="home-page-background">
        <div id="name-title">
          <Row>
            <header>
              REZ&nbsp;RIAZI
            </header>
            <br />
            <br />
            <TextLoop>
              <span id="loop-text"> Software Engineer.</span>
              <span id="loop-text"> Creator.</span>
            </TextLoop>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
