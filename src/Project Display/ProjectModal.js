import React from "react";
import "../App.css";

const ProjectModal = (props) => {
  return (
    <div id={props.id} class="modal">
      <div id="popUpModal" class="modal-content center-align">
        <h4>{props.title}</h4>
        {props.content}
      </div>
    </div>
  );
};

export default ProjectModal;
