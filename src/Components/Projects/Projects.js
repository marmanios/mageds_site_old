import React, { useState} from 'react';
import "./Projects.css";
import ProjectPopup from "./ProjectPopup";
import ProjectsData from '../../Data/ProjectsData';

const [EngProjects, SoftProjects] = ProjectsData;

const Projects = () => {
     const [projectsDisplayed, switchProject] = useState(EngProjects);
     const [projectType, setType] = useState("Engineering Projects");
     const [showingPopup, setShowingPopup] = useState(false);
     const [popupContent, setPopupContent] = useState("");

     const onClickHandler = (event) => {
          event.preventDefault();
          if (event.target.value === "Engineering") {
               setType("Engineering Projects");
               switchProject(EngProjects);
          }
          else if (event.target.value === "Software") {
               setType("Software Projects");
               switchProject(SoftProjects);
          };

     };
     
     const togglePop = (event) => {

          console.log(projectsDisplayed[parseInt(event.target.classList[1])])
          try {
               if ("url" in (projectsDisplayed[parseInt(event.target.classList[1])])){
                    window.open(projectsDisplayed[parseInt(event.target.classList[1])].url, '_blank', 'noopener,noreferrer');
               }
               else{
                    setPopupContent(projectsDisplayed[parseInt(event.target.classList[1])].popUpContent);
                    setShowingPopup(!showingPopup);
               }
          } catch (error) {
               console.log(error)
               setPopupContent(<div>Something went wrong</div>);
               setShowingPopup(!showingPopup);
          }
 
     }

     return (
          <div>
               <h1 className='Projects__Header'>My Projects</h1>
               <div className='Project__Button__Handler'>
                    <button className='Project__Button' onClick={onClickHandler} value="Engineering">Engineering Projects</button>
                    <button className='Project__Button' onClick={onClickHandler} value="Software">Software Projects</button>
               </div>
               <h1>{projectType}</h1>

               <div>
                    {projectsDisplayed.map(project => (
                         <div className={"Project__Container " + project.key} onClick={togglePop}>
                              <h2 className={"Project__Title " + project.key}>{project.name}</h2>
                         </div>
                    ))}
               </div>

               {showingPopup && <ProjectPopup content={
                    <div>
                         {popupContent}
                    </div>

               } handleClose={togglePop}></ProjectPopup>}

          </div>
     );
     //<ShowProjects projects={projectsDisplayed} ></ShowProjects>
};

export default Projects;