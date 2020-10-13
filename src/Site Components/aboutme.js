import React, { Component } from "react";
import "../App.css";
import "./aboutme.css";
import M from "materialize-css";
import aboutMePic from "../PicsandVids/AboutMePic.jpeg";
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
      <div className="AboutMePage" id="aboutme">
        <FadeUp>
          <h1 id="aboutmeText">
            ABOUT ME
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <div
          // className="col l6 m6 pull-l1 valign-wrapper center-align hide-on-med-and-down"
          id="aboutMeSection"
        >
          <img
            src={aboutMePic}
            // src="https://media-exp1.licdn.com/dms/image/C5603AQFmr7Usskq8Hg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=g0TJ58iFnq4U7MLRz9yECSkD2dQJEKV0kE7atqaQo4E"
            className="circle responsive-img"
            id="AboutPicture"
            alt="ProfilePic"
          />
          <div>
            <div className="bodyText">
              <p id="aboutMeWritten">
                Who am I? I'm a Full Stack Developer and a student at the
                University of British Columbia studying Computer Science. Most
                people know me for my creativity. I've been creating projects
                from a young age in different platforms. From the age of 9, I
                created and ran my own blog on WordPress, made a YouTube channel
                of lyric videos which would reach 50,000 views, created my own
                cartoon series using GoAnimate, wrote a mini book series, and
                have composed a dozen songs on the piano. In the recent years,
                my creativity has been focused on making my own apps and games
                using object-orientated programming as well as creating projects
                such as websites through scripting and front-end development.
              </p>
            </div>
            <div id="CollapseSection">
              <ul class="collapsible expandable">
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">build</i>Technical Skills
                  </div>
                  <div class="collapsible-body">
                    <span>
                      My technical skills include language proficiency in Java,
                      C#, C++, JavaScript, CSS, and HTML. Knowledge in
                      frameworks and libraries include React and .NET, and I
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
                      throughout the years has taught me to be very comfortable
                      in collaborative settings and being a team player. My
                      leadership skills are evident through being a supervisor
                      and training new employees at my job as a Wine Sales
                      Representative.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">create</i>About This Website
                  </div>
                  <div class="collapsible-body">
                    <span>
                      I coded this website using React with languages
                      JavaScript, HTML, and CSS. It is implemented through
                      Node.js in Microsoft Visual Studio Code, and Github.io
                      used to host the site's URL online.
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
