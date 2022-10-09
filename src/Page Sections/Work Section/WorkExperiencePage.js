import React, { Component } from "react";
import MyWorkExperience from "./WorkExperience";
import "../../Page Sections CSS/WorkExperiencePage.css";

class WorkExperiencePage extends Component {
  render() {
    return (
        <div className="sectionPage" id="WorkExperience">
          <h1 id="projects-title">WORK EXPERIENCE</h1>
          <MyWorkExperience />
        </div>
    );
  }
}

export default WorkExperiencePage;