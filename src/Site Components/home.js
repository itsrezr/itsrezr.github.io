import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "./components.css";
import "./home.css";
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
      el: ".home-page-background",
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
      <div className="home-page-background" ref={this.vantaRef}>
        <div className="home-text">
          <Container>
            <Row>
              <Col md={{ offset: 4 }}>
                <header>
                  <b>REZ RIAZI</b>
                </header>
                <br />
                <br />
                <TextLoop>
                  <span id="loop-text"> Software Engineer.</span>
                  <span id="loop-text"> Creator.</span>
                </TextLoop>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
