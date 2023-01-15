import React, { useEffect } from "react";
import M from "materialize-css";
import "../../Page Sections CSS/Projects/ProjectModal.css";
import theOfficeGamePic from "../../Pictures and Videos/TheOffice_MainArt.png";
import theOfficeCollectCash from "../../Pictures and Videos/TheOffice_CollectCash.png";
import theOfficeReliveMoments from "../../Pictures and Videos/TheOffice_ReliveMoments.png";
import pillUpPic from "../../Pictures and Videos/maingamepicture.jpg";
import planetpanicPic from "../../Pictures and Videos/Planet_Panic_MainPic.png";
import toDoList from "../../Pictures and Videos/toDoList.png";
import pillupVid from "../../Pictures and Videos/PillUpDemo.mp4";
import planetpanicVid from "../../Pictures and Videos/PlanetPanicDemo.mp4";
import graphicDesignsPic from "../../Pictures and Videos/Graphic Designs.png";
import websiteIcon from "../../Pictures and Videos/website-icon.png";
import chatBotIcon from "../../Pictures and Videos/ChatBotIcon.png";
import chatBotChat from "../../Pictures and Videos/ChatBotChat.png";
import companiesDemo from "../../Pictures and Videos/Companies.png";
import paymentDemo from "../../Pictures and Videos/Payment.png";
import ProjectItem from "./ProjectItem";
import ProjectModal from "./ProjectModal";
// designs:
import csEmblemPic from "../../Pictures and Videos/CSEmblem.png";
import ubcTalent from "../../Pictures and Videos/ubctalentsized.jpg";
import womenInScience from "../../Pictures and Videos/ubcwomeninsciencelogo_byRez.jpg";
import heavyDataCorpLogo from "../../Pictures and Videos/heavydatacorplogo.png";

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
          id="project-title-text"
        >
          <ProjectItem
            logo={theOfficeGamePic}
            title="The Office: Official Game"
            modal="#TheOfficeGame"
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
            logo={websiteIcon}
            title="This Website"
            modal="#WebsiteModal"
          />
          <ProjectItem
            className="picApps"
            logo={pillUpPic}
            title="Pill Up"
            modal="#PillUpModal"
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
          <ProjectItem
            logo={graphicDesignsPic}
            title="Designs"
            modal="#Designs"
          />
        </div>
      </div>

      <ProjectModal
        id="TheOfficeGame"
        title="The Office: Somehow We Manage"
        content={
          <>
            <p>East Side Games, Jan - Sept 2021</p>
            <p>
            I joined as the third <b>Software Engineer</b> during the pre-production 
            of the game for the show <b>The Office</b>, in collaboration with NBC and Universal Studios. I was 
            one of eight developers to create the mobile game <b>The Office: Somehow We Manage.</b>
            </p>
            <p>
            I was responsible for <b>implementing all audio</b> in the game (music, 
            sound effects, ambience, stings, etc.). I was also given <b>my own 
            feature</b> in the game in which I created with full autonomy. I also developed the ascension 
            feature (The Boss Challenge: a mini game after an episode is completed) of the game with full autonomy.
            </p>
            <p>
            Mainly developed in <b>C#</b> and <b>Unity</b>, I created service classes, load phases, algorithms, and 
            helped develop a "saving data" architecture.
            </p>
            <p>
            Responsibilities include helping <b>plan sprints, managing my own features</b>, and <b>reviewing and approving
            other Engineers' codes</b>. In consistent collaboration with production, story writers, UI/UX, artists, game designers, QA, etc. 
            </p>
            <p>
              The game is available on iOS/Android, with 1M+ downloads.&nbsp;
              <a
                href="https://play.google.com/store/apps/details?id=com.eastsidegames.theofficeswm&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Link to game]
              </a>
            </p>
            <div className="row">
                <img id="img-row-2" src={theOfficeCollectCash}/>
                <img id="img-row-2" src={theOfficeReliveMoments}/>
            </div>
          </>
        }
      />
      <ProjectModal
        id="WebsiteModal"
        title="www.rezriazi.com"
        content={
          <>
            <p>May 2020.</p>
            <p>
              I coded this website using <b>React</b> with languages <b>JavaScript, 
              HTML, and CSS</b>. It is implemented through <b>Node.js</b> in <b>Microsoft 
              Visual Studio Code</b>, and Github.io used to host the site's URL online. I 
              used a few front-end libraries, notably <b>Materialize-css</b> and <b>Bootstrap</b>.
            </p>
          </>
        }
      />
      <ProjectModal
        id="PillUpModal"
        title="Pill Up - Interactive Arcade Game"
        content={
          <> 
            <p>48-hour BC Game Jam, Feb 2020</p>
            <p>
              Fun and addictive game made using Java in IntelliJ with JavaFX.
              The objective of the game is to survive as long as possible, by
              avoiding spikes, aging pills, and growth pills. This was a team
              project, and in addition to coding, I was responsible for the User
              Interface, User Experience Design, creating the graphics (made in
              Krita), and debugging.
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
            <p>Hacking For Humanity Hackathon, May 2019</p>
            <p>
              The objective of the game is to collect different pieces of garbage and put it
              in the bin it belongs to, which educates kids about waste. I created the
              graphics and User Interface Design using Photoshop, and the game was implemented in Python.
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
        id="Designs"
        title="Graphic Designs"
        content={
          <>
            <div className="row">
                <img id="img-row-2" src={heavyDataCorpLogo}/>
                <img id="img-row-2" src={csEmblemPic}/>
            </div>
            <div className="row">
                <img id="img-row-2" src={womenInScience}/>
                <img id="img-row-2" src={ubcTalent}/>
            </div>
          </>
        }
      />
      <ProjectModal
        id="ToDoModal"
        title="To Do List"
        content={
          <>
            <p>Nov 2019</p>
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
        id="ChatBot"
        title="Live Chat Bot"
        content={
          <>
            <p>Lifco Hydraulics, Sept - Dec 2020</p>
            <p>
              Working as a Full Stack Software Developer Co-op, 3 other Co-op students and I created a
              Live Chat Bot from scratch using C#, .Net, and Microsoft Azure Bot. The goal of the project was to create a 
              live connection between employees and customers. My role was more Front-End, but also helped develop some
              back-end API connecting user information to the employee, such as their URL, IP Address, etc.
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
            <p>Lifco Hydraulics, Sept - Dec 2020</p>
            <p>
              As a Full Stack Software Developer Co-op, I created many softwares for Sales
              employees to use. This includes a payment software for employees to enter clients' card details to 
              process sales, a Viewer for all of the companies that are registered customers, a Viewer that
              displays all recent Cash Receipts, etc. Technologies used were Javascript, HTML/CSS for developing the 
              website, C# as the programming language, and SQL and MongoDB as databases to retrieve and push data.
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
