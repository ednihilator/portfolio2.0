import React from "react";
import project1 from "../../img/project-image-1.webp";

export default function Portfolio() {
  const projectArray = [
    {
      link: "https://github.com/uwlryoung/movie-giphy",
      image: project1,
      title: "MovieGiphy",
    },
    {
      link: "https://github.com/JimmyJr77/rateit",
      image: project1,
      title: "RateIt",
    },
  ];
  return (
    <div className="projectImageContainer">
      <h1>Portfolio</h1>
      <div className="projectAllContainer">
        {projectArray.map((project) => (
          <div className="project1container">
            <p>{project.title}</p>
            <a href={project.link} target="_blank">
              <img className="projectImage" src={project.image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
