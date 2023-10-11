import React from "react";
import projectImage from "../../img/me.jpg";

export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img className="aboutImage" src={projectImage} />
      <p>
        Hello, my name is Edward Chang. I'm currently a poker dealer at MGM
        National Harbor. I graduated from George Mason University with a BFA in
        Computer Game design. I'm currently studying to become a web developer.
      </p>
    </div>
  );
}
