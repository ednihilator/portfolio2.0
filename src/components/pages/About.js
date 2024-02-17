import React from "react";
import projectImage from "../../img/me.jpg";
import ResumePDF from "./resume.pdf";


export default function About() {
  return (
    <div className="aboutContainer">
      <img className="aboutImage" src={projectImage} />
    <div className="aboutTextContainer">
<p className="aboutText">
    Hello, my name is Edward Chang. I'm currently a poker dealer at MGM
    National Harbor. I graduated from George Mason University with a BFA in
    Computer Game design in 2015. I'm certified from George Washington University in full stack web development.
</p>
<div>
      
      <a
        rel="noreferrer noopener"
        href={ResumePDF}
        className="resume"
        target="_blank"
      >
        Download Resume
      </a>
    </div>
    </div>
    </div>
    
  );
}
