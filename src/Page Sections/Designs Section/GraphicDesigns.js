import React, { useEffect } from "react";
import M from "materialize-css";
import ProjectItem from "../Projects Section/ProjectItem";
import pillUpPic from "../../Pictures and Videos/maingamepicture.jpg";
import rezsMix from "../../Pictures and Videos/rezzmix.JPG";
import ubcTalent from "../../Pictures and Videos/ubctalentsized.jpg";
import planetpanicPic from "../../Pictures and Videos/Planet_Panic_MainPic.png";
import portraitLogo from "../../Pictures and Videos/portrait_logo_rez_with_paint1.png";
import womenInScience from "../../Pictures and Videos/ubcwomeninsciencelogo_byRez.jpg";
import heavyDataCorpLogo from "../../Pictures and Videos/heavydatacorplogo.png";

const GraphicDesigns = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
    elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  });

  return (
    <div className="display-items-center">
      <div className="container section">
        <div className="row">
          <div className="carousel col s12">
          <ProjectItem logo={heavyDataCorpLogo} />
            <ProjectItem logo={ubcTalent} />
            <ProjectItem logo={rezsMix} />
            <ProjectItem logo={womenInScience}/>
            <ProjectItem logo={planetpanicPic}  />
            <ProjectItem logo={pillUpPic} />
            <ProjectItem logo={portraitLogo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigns;
