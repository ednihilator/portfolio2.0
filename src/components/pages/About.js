import React from "react";
import projectImage from "../../img/me.jpg";

export default function About() {
  return (
    <div className="aboutContainer">
      <img className="aboutImage" src={projectImage} />
      <p className="aboutText">
        Hello, my name is Edward Chang. I'm currently a poker dealer at MGM
        National Harbor. I graduated from George Mason University with a BFA in
        Computer Game design. I've finished a full stack web development course
        from George Washington University to become a web developer.
      </p>
    </div>
  );
}
