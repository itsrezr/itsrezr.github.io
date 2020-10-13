import React, { Component } from "react";
import "./components.css";
import { Cell, Grid } from "react-mdl";
import "./techskills.css";
import pillUpPic from "../PicsandVids/maingamepicture.jpg";
import rezsMix from "../PicsandVids/rezzmix.JPG";
import ubcTalent from "../PicsandVids/ubctalentsized.jpg";
import planetpanicPic from "../PicsandVids/Planet_Panic_MainPic.png";
import portraitLogo from "../PicsandVids/portrait_logo_rez(new).png";

class TechSkills extends Component {
  render() {
    return (
      <div className="sectionPage" id=" ">
        <h1 className="headerText">TECHNICAL SKILLS</h1>
        <div style={{ width: "80%", margin: "auto" }}>
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
        </div>
      </div>
    );
  }
}

export default TechSkills;
