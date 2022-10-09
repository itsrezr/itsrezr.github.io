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
              &nbsp;CONNECT WITH ME
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
              I'm a new Computer Science graduate from the University of British Columbia (May 2023), with 16 months of
              internship experience as a Software engineer. Most recently, intern at DeepMind in London, UK.
              </p>
              <p  id="aboutMeWritten"> I've worked as a Software Engineer in a variety of industries - artificial
              intelligence, mobile games, and web development. In addition, I have a strong UI/UX background with
              a big interest in digital graphic designing.
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
                      My technical skills include language proficiency in 
                      C#, Java, Python, JavaScript, and CSS/HTML. Knowledge in
                      technologies and frameworks include Unity, .NET and React. I
                      have experience in databases such as SQL and NoSQL
                      (MongoDB). My design experience is very strong, evident
                      through being the UI, UX, and Graphic Designer for all of
                      my individual and collaborative projects.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">person</i>Personal Strengths
                  </div>
                  <div class="collapsible-body">
                    <span>  
                    My most notable skill is my creativity. I've been creating projects from a 
                    young age such as composing songs on the piano, creating cartoons, videos 
                    and blogs.
                    <br/><br/>
                    My strengths include my strong problem-solving skills, my
                    attention to detail, as well as being a fast learner.
                    Being on competitive volleyball and softball teams
                    throughout the years, and working in 3 different tech companies,
                    I'm quite comfortable in collaborative settings and being a team player.
                    My leadership skills are evident through doing project 
                    management roles in projects with my peers, as well as 
                    being a supervisor and training new employees as a Wine Sales
                    Representative.
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
