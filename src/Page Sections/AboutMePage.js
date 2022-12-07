import React, { Component } from "react";
import "../App.css";
import "../Page Sections CSS/AboutMePage.css";
import M from "materialize-css";
import aboutMePic from "../Pictures and Videos/AboutMePic.jpeg";
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

class AboutMe extends Component {
  componentDidMount() {
    var elem = document.querySelector(".collapsible.expandable");
    var instance = M.Collapsible.init(elem, {
      accordion: false,
    });
  }
  
  render() {
    const FadeUp = styled.div`
      animation: 3s ${keyframes`${fadeInUp}`};
    `;
    return (
      <div className="sectionPage" id="AboutMe">
        <FadeUp>
          <h1 id="about-me-title">
            ABOUT ME
            <a
              id="connect"
              href="https://www.linkedin.com/in/rezriazi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="material-icons">supervisor_account</i>
              &nbsp;LINKEDIN
            </a>
          </h1>
        </FadeUp>
        <div id="aboutMeSection">
          <img
            src={aboutMePic}
            className="circle responsive-img"
            id="AboutPicture"
            alt="ProfilePic"
          />
          <div>
            <div className="bodyText">
              <p id="aboutMeWritten">
              New Computer Science graduate from the University of British Columbia (May 2023), with 16 months of
              co-op/internship experience as a Software Engineer. Most recently, intern at Google DeepMind in London, UK.
              </p>
              <p  id="aboutMeWritten">Worked as a Software Engineer in a variety of tech industries such as
              artificial intelligence research, mobile games, and web development. 
              </p>
            </div>
            <div>
              <ul class="collapsible expandable">
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">build</i>Technical Skills
                  </div>
                  <div class="collapsible-body">
                    <span>
                    <p> Language proficiency in C#, Java, Python, C++, JavaScript, Typescript, and CSS/HTML.
                    </p> 
                    <p> Developed in frameworks such as Unity, .NET and React.
                    </p>
                    <p> Experience in databases using SQL, NoSQL (MongoDB), PHP, and Oracle.
                    </p>
                    <p> Design experience is strong, evident through being the UI, UX, and Graphic Designer for many of
                      my individual and collaborative projects.
                    </p>
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">person</i>Personal Strengths
                  </div>
                  <div class="collapsible-body">
                    <span>
                    My most notable strengths include my strong problem-solving skills, my
                    attention to detail, as well as being a fast learner.
                    <br/><br/>
                    I'm very comfortable in collaborative settings and am a very strong team player.
                    My leadership skills are evident through having project 
                    management roles in projects with my peers, as well as through having experience
                    being a supervisor and training new employees as a Wine Sales Representative. 
                    <br/><br/> 
                    I am a very creative individual, creating projects from a 
                    young age such as composing songs on the piano, creating cartoons, videos 
                    and writing blogs.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
