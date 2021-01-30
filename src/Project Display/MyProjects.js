import React, { useEffect } from "react";
import "./Projects.css";
import M from "materialize-css";
import pillUpPic from "../PicsandVids/maingamepicture.jpg";
import planetpanicPic from "../PicsandVids/Planet_Panic_MainPic.png";
import toDoList from "../PicsandVids/toDoList.png";
import pillupVid from "../PicsandVids/PillUpDemo.mp4";
import planetpanicVid from "../PicsandVids/PlanetPanicDemo.mp4";
import chatBotIcon from "../PicsandVids/ChatBotIcon.png";
import chatBotChat from "../PicsandVids/ChatBotChat.png";
import companiesDemo from "../PicsandVids/Companies.png";
import paymentDemo from "../PicsandVids/Payment.png";
import ProjectItem from "./ProjectItem";
import ProjectModal from "./ProjectModal";

const Projects = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
    elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
    var vid = document.getElementById("myVideo");
  });

  return (
    <div className="container section">
      <div className="row">
        <div
          class="grid-container"
          className="carousel col s12"
          // id="navigationText"
          id="appsNameText"
        >
          <ProjectItem
            className="picApps"
            logo={pillUpPic}
            title="Pill Up"
            modal="#PillUpModal"
          />
          <ProjectItem
            logo={chatBotIcon}
            title="Chat Bot"
            modal="#ChatBot"
          />
          <ProjectItem
            logo={companiesDemo}
            title="Employee-Use Software"
            modal="#LifcoSoftware"
          />
          <ProjectItem
            logo={planetpanicPic}
            title="Planet Panic"
            modal="#PlanetPanicModal"
          />
          <ProjectItem
            logo={toDoList}
            title="To-Do List"
            modal="#ToDoModal"
            alt="To Do Picture"
          />          
        </div>
      </div>

      <ProjectModal
        // className="regText"
        id="PillUpModal"
        title="Pill Up - Interactive Arcade Game"
        content={
          <>
            <p>
              Fun and addictive game made using Java in IntelliJ with JavaFX.
              The objective of the game is to survive as long as possible, by
              avoiding spikes, aging pills, and growth pills. This was a team
              project, and in addition to coding, I was responsible for the User
              Interface, User Experience Design, creating the graphics (made on
              Krita), and debugging. This was made at the 48-hour BC Game Jam.
            </p>
            <p>
              Use Left/Right/Up/Down arrows to move & SPACE bar to pause game
            </p>

            {/* <p>
              Source code: &nbsp;
              <a
                href="https://github.com/rezriazi/pillup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </p> */}
            <div className="row">
              <video
                controls
                src={pillupVid}
                className="responsive-vid"
                alt="Game Demo"
              />
            </div>
          </>
        }
      />

      <ProjectModal
        id="PlanetPanicModal"
        title="Planet Panic - Educational Kids Game"
        content={
          <>
            <p>
              At the Hacking For Humanity Hackathon hosted by Girls in Tech, I
              made the game “Planet-Panic”. The objective of the game is to
              collect different pieces of garbage and put it in the bin it
              belongs to, which educates kids about waste. I created all of the
              graphics and User Interface Design using photoshop environment,
              and the game was implemented in Python.
            </p>
            <div className="row">
              <video
                controls
                src={planetpanicVid}
                className="responsive-vid"
                alt="Game Demo"
              />
            </div>
          </>
        }
      />
      <ProjectModal
        className="regText"
        id="ToDoModal"
        title="To Do List"
        content={
          <>
            <p>
              Created a To-Do List Application using Java in IntelliJ IDEA with
              JUnit testing and GUI as an academic project. Specific abstract
              design implementations were used to ensure a coherent and cohesive
              structure. This includes subject-observer design, composite
              patterns, and advanced iteration.
            </p>
          </>
        }
      />
      <ProjectModal
        className="regText"
        id="ChatBot"
        title="Live Chat Bot"
        content={
          <>
            <p>
              Working as a Full Stack Software Developer at Lifco Hydraulics, 3 other Co-op students and I created a
              Live Chat Bot from scratch using C#, .Net, and Microsoft Azure Bot. The goal of the project was to create a 
              live connection between employees and customers. The team included 2 Back-End Developers, 1 Front-End
              Developer, and a Product Researcher/Database Developer. My role was being the Front-End Software Developer as 
              well as help developing some back-end tools such as passing the user's information (their URL, IP Address, etc.) 
              to the employee in the chat.
              </p>
              <div className="row">
              <img src={chatBotChat}/>
            </div>
          </>                  
        }
      />
      <ProjectModal
        className="regText"
        id="LifcoSoftware"
        title="Employee Software Tools"
        content={
          <>
            <p>
              As a Full Stack Software Developer Co-op at Lifco Hydraulics, I created many softwares for Sales
              employees to use. This includes a payment software for employees to enter clients' card details to 
              process sales, a Viewer for all of the companies that are registered customers, a Viewer that
              displays all recent Cash Receipts, etc. Technologies used were Javascript, HTML/CSS for developing the 
              website, C# as the programming language, and SQL and MongoDB as databases to retrieve and push data.
              </p><p>
              (Image Credit Card details are simulated)
              </p>
              <div className="row">
              <img src={paymentDemo}/>
            </div>
          </>                  
        }
      />
    </div>
  );
};

export default Projects;
