import React from "react";
import "./Projectss.css";
import weatherImage from "../Images/weather.png";
import youtubeImage from "../Images/youtube clone.png";
import portfolioImage from "../Images/portfolio.png";
import auraImage from "../Images/aura.png";
import capstoneImage from "../Images/capstone.png";

const Projectss = () => {
  return (
    <div>
         <div className="project-head">
           <h1 className="animate__animated  animate__bounce  home-content">
            Projects
                   </h1>
          </div>
      
        
        
        <div className="project-content">
        <h1>Countries& Weather</h1>
          <img src={weatherImage} alt="project-name" />
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
          <h1>Youtube Clone</h1>
          <img src={youtubeImage} alt="project-name" />
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
          <h1>Aura air</h1>
          <img src={auraImage} alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/Muralitharan171/aura-air"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code
            </a>
            <a
              href={"https://aura-air.vercel.app/"}
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
          <img src={portfolioImage} alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/Muralitharan171/my-portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code
            </a>
            <a
              href={"https://my-portfolio-558c.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-site"
            >
              Live Site
            </a>
            
          </div>
        </div>

        <div className="project-content">
          <h1>capstone project</h1>
          <img src={capstoneImage} alt="project-name" />
          <div className="btn-group">
            <a
              href={"https://github.com/Muralitharan171/capstone-project-front-end"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Front-End Source code
            </a>
            <a
              href={"https://github.com/Muralitharan171/capstone-back-end"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              Back-End Source code
            </a>

            <a
              href={"https://capstone-front-end-nu.vercel.app/"}
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