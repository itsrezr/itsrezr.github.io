import React, { useEffect } from "react";
import "./Projects.css";
import M from "materialize-css";
import ProjectItem from "./ProjectItem";
import pillUpPic from "../PicsandVids/maingamepicture.jpg";
import rezsMix from "../PicsandVids/rezzmix.JPG";
import ubcTalent from "../PicsandVids/ubctalentsized.jpg";
import planetpanicPic from "../PicsandVids/Planet_Panic_MainPic.png";
import portraitLogo from "../PicsandVids/portrait_logo_rez(new).png";
import womenInScience from "../PicsandVids/ubcwomeninsciencelogo_byRez.jpg";

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
            <ProjectItem logo={ubcTalent} modal="#modalUBCGotTalent" />
            <ProjectItem logo={rezsMix} modal="#modalRezsMix" />
            <ProjectItem logo={womenInScience} modal="#modalWIS" />
            <ProjectItem logo={planetpanicPic} modal="#modalPlanetPanic" />
            <ProjectItem logo={pillUpPic} modal="#modalPillUp" />
            <ProjectItem logo={portraitLogo} modal="#modalPortrait" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigns;
