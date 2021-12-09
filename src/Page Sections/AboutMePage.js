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
              I'm a 4th year Computer Science student at the University of British Columbia. 
              I've completed 12 months of full time Co-op work as a Software Engineer in 
              both game and web development.
              </p>
              <p id="aboutMeWritten">
              Most people know me for my creativity. I've been creating projects from a 
              young age such as composing songs on the piano, creating cartoons, videos 
              and blogs. One of my favorite pastimes is solving puzzles such as sudoku, 
              physical puzzles, backgammon, tetris and chess. Combining my passion for 
              creating as well as being logic driven is the reason why I decided to 
              pursue Computer Science and Software Development!
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
                      C#, Java, C++, JavaScript, and CSS/HTML. Knowledge in
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
                      My strengths include my strong problem-solving skills, my
                      attention to detail, as well as being a fast learner.
                      Being on competitive volleyball and softball teams
                      throughout the years, as well as working in company software 
                      development teams, has taught me to be very comfortable
                      in collaborative settings and being a team player. My
                      leadership skills are evident through doing project 
                      management in projects with my peers, as well as 
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
