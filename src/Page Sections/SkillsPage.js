import React, { Component } from "react";
import "../Page Sections CSS/SkillsPage.css";
import {Row, Col, Container} from 'react-bootstrap';

class TechSkills extends Component {
  render() {
    return (
      // <div className="sectionPage" >
        <div>
        <h1 className="headerText">TECHNICAL SKILLS</h1>

        <Container>
  <Row className="rows">
    <Col className="columns">Languages</Col>
    <Col className="columns">Frameworks</Col>
    <Col className="columns">Databases</Col>
  </Row>
  <Row className="rows">
  <Col className="columns">Languages</Col>
  <Col className="columns">Frameworks</Col>
  <Col className="columns">Databases</Col>
  </Row>
</Container>
        {/* <div style={{ width: "80%", margin: "auto" }}>
          <Grid className="demo-grid-1">
            <Cell col={4}>Java</Cell>
            <Cell col={4}>C++</Cell>
            <Cell col={4}>JavaScript</Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell col={6}>HTML</Cell>
            <Cell col={6}>CSS</Cell>
          </Grid>
          <Grid className="demo-grid-2">
            <Cell col={6}>6</Cell>
            <Cell col={4}>4</Cell>
            <Cell col={2}>2</Cell>
          </Grid>
          <Grid className="demo-grid-3">
            <Cell col={6} tablet={8}>
              6 (8 tablet)
            </Cell>
            <Cell col={4} tablet={6}>
              4 (6 tablet)
            </Cell>
            <Cell col={2} phone={4}>
              2 (4 phone)
            </Cell>
          </Grid>
        </div> */}
      </div>
    );
  }
}

export default TechSkills;
