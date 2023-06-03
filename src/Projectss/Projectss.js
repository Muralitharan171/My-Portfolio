import React from "react";
import "./Projectss.css";


const Projectss = () => {
  return (
    <div>
         <div className="project-head">
           <h1 className="animate__animated  animate__bounce  home-content">
            Projects
                   </h1>
          </div>
      
        
        
        <div className="project-content">
          <h1>All countries Wheather</h1>
          <img src='#' alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/Muralitharan171/Rest-countries-and-wheather-task"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code
            </a>
            <a
              href={"https://sunny-praline-bb71d1.netlify.app//"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            
          </div>
        </div>
        <div className="project-content">
          <h1>Youtube-Clone</h1>
          <img src='#' alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/Muralitharan171/Youtube-clone"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code
            </a>
            <a
              href={"https://warm-cheesecake-17404b.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            
          </div>
        </div>

        <div className="project-content">
          <h1>Portfolio</h1>
          <img src='#' alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/Muralitharan171/portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code
            </a>
            <a
              href={"https://warm-cheesecake-17404b.netlify.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            
          </div>
        </div>
      </div>
    
  );
};
export default Projectss;