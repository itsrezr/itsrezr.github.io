import React from "react";
import DeepMindLogo from "../../Pictures and Videos/Work Experience Logos/DeepMind.png";
import EastSideGamesLogo from "../../Pictures and Videos/Work Experience Logos/EastSideGames.png";
import LifcoHydraulicLogo from "../../Pictures and Videos/Work Experience Logos/LifcoHydraulics.png";
import "../../Page Sections CSS/WorkExperiencePage.css";

const WorkExperience = () => {
  return (
    
      <div id="job-table">
        
        <div className="section-container">
            <div className="logo"><img src={DeepMindLogo} /></div>
            <div className="job-description1">
                <p class="job-description"><b>Software Engineer Intern, <i>Jun -- Sep 2022</i></b></p>
                <p class="job-description"><b>DeepMind, London UK</b></p>
                <p class="job-description"> • Developed a tool that converts tasks for AI agents to JSON scripts </p>
                <p class="job-description"> • Worked with 8 users, consistently conducting user studies, and getting feedback </p>
                <p class="job-description"> • Improved tedious workflow of manually writing scripts for dozens of DeepMind
                                                researchers such as designers, engineers, technical artists, QA </p>
                <p class="job-description"> • Conducted bi-weekly presentations to the team </p>
                <p class="job-description"> • Responsible for both determining and implementing features as it was a solo project </p>
            </div>
        </div>


        <table>
            <div class="job-block">
            <tr>
                <td ><img src={DeepMindLogo} /></td>
                <td>
                    <p class="job-description"><b>Software Engineer Intern, <i>Jun -- Sep 2022</i></b></p>
                    <p class="job-description"><b>DeepMind, London UK</b></p>
                    <p class="job-description"> • Developed a tool that converts tasks for AI agents to JSON scripts </p>
                    <p class="job-description"> • Worked with 8 users, consistently conducting user studies, and getting feedback </p>
                    <p class="job-description"> • Improved tedious workflow of manually writing scripts for dozens of DeepMind
                                                  researchers such as designers, engineers, technical artists, QA </p>
                    <p class="job-description"> • Conducted bi-weekly presentations to the team </p>
                    <p class="job-description"> • Responsible for both determining and implementing features as it was a solo project </p>
                </td>
            </tr>
            </div>
            <tr>
                <td>
                    <p class="job-description"><b>Software Engineer Intern, <i>Jan -- Sep 2021</i></b></p>
                    <p class="job-description"><b>East Side Games, Vancouver CA</b></p>
                    <p class="job-description"> • Developed the official mobile game for the TV show The Office, in collaboration with 
                                                  NBC and Universal Studios, available in Apple Store and Play Store </p>
                    <p class="job-description"> • Implemented all audio (background and SFX), through an Audio Service and Database </p>
                    <p class="job-description"> • Created service classes, load phases, unit tests, ‘saving data’ architecture </p>
                    <p class="job-description"> • Independently created the Ascension feature with full autonomy </p>
                    <p class="job-description"> • Reviewed and approved Senior Engineers’ code, as well as helped plan sprints </p>
                    <p class="job-description"> • Collaborated consistently with production, artists, designers, story writers, UX, QA, etc </p>
                </td>
                <td><img src={EastSideGamesLogo} /></td>
            </tr>
            <tr>
                <td colspan="2"><img src={LifcoHydraulicLogo}/></td>
                <td colspan="4">
                    <p class="job-description"><b>Software Developer Intern, <i>Sep -- Dec 2020</i></b></p>
                    <p class="job-description"><b>Lifco Hydraulics, Niagara Region CA</b></p>
                    <p class="job-description"> • Created a chatbot for employees and customers to interact with, with 3 other interns </p>
                    <p class="job-description"> • Improved a credit card transaction software to make large purchases for clients</p>
                    <p class="job-description"> • Created web pages for creating and modifying clients, companies, and purchase orders </p>
                    <p class="job-description"> • Managed both inventory and client information through SQL and MongoDB databases </p>
                </td>
            </tr>
    </table>
     </div>
  );
};

export default WorkExperience;