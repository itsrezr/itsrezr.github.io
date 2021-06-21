import React from "react";

const ProjectItem = (props) => {
  return (
    <a class="carousel-item modal-trigger" href={props.modal}>
      {props.title}
      <img src={props.logo} alt="" />
    </a>
  );
};

export default ProjectItem;
