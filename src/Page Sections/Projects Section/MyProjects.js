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
import websiteIcon from "../../Pictures and Videos/website-icon.png";
import chatBotIcon from "../../Pictures and Videos/ChatBotIcon.png";
import chatBotChat from "../../Pictures and Videos/ChatBotChat.png";
import companiesDemo from "../../Pictures and Videos/Companies.png";
import paymentDemo from "../../Pictures and Videos/Payment.png";
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
        </div>
      </div>

      <ProjectModal
        id="TheOfficeGame"
        title="The Office: Somehow We Manage"
        content={
          <>
            <p>
            In January 2021 I joined <b>East Side Games</b> as the third <b>Software Engineer</b> during the pre-production 
            of the game for the show <b>The Office</b>, in collaboration with NBC and Universal Studios. I was 
            one of eight developers to create the mobile game <b>The Office: Somehow We Manage</b>, 
            which is releasing in late 2021!
            </p>
            <p>
            I was independently responsible for <b>implementing all audio</b> in the game (music, 
            sound effects, ambience, stings, etc.). More notably, I was given <b>my own 
            feature</b> in the game in which I created with full autonomy. I developed the ascension 
            feature of the game -- a challenge the user plays after they complete an episode. Working 
            with <b>C#</b> and <b>Unity</b>, I created service classes, load phases, algorithms, and 
            helped develop a "saving data" architecture.
            </p>
            <p>
            As a co-op and youngest person on the team, I was treated and had the same responsibilities 
            as a normal software engineer. I helped <b>plan sprints, attended all engineer meetings, 
            managed my own features</b>, and most importantly, was part of the <b>code review process</b> where I 
            was responsible for <b>reviewing and approving other developer's code</b>. I was in consistent 
            collaboration and in sync with all disciplines of the team -- such as production, story 
            writers, UI/UX, artists, game designers, QA, etc. 
            </p>
            <p>
            I had an amazing experience and learned so much while creating a game for a show with such 
            a huge fan base! Download on iOS/Android later this year!
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
            <p>
              Fun and addictive game made using Java in IntelliJ with JavaFX.
              The objective of the game is to survive as long as possible, by
              avoiding spikes, aging pills, and growth pills. This was a team
              project, and in addition to coding, I was responsible for the User
              Interface, User Experience Design, creating the graphics (made in
              Krita), and debugging. This was made at the 48-hour BC Game Jam in 
              Febuary 2020.
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
              At the 2019 Hacking For Humanity Hackathon hosted by Girls in Tech, I
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
