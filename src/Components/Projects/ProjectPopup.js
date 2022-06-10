import React from "react";
import "./ProjectPopup.css"
const ProjectPopup = props => {
  return (
    <div className="popup-box" onClick={props.handleClose}>
      <div className="box">
        {props.content}
      </div>
    </div>
  );
};
 
export default ProjectPopup;