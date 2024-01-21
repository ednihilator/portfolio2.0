import React from "react";
import pet from "../../img/pet.png";
import movie from "../../img/movie-giphy.png";
import rateit from "../../img/rateit.png";
import project1 from "../../img/project-image-1.webp";

export default function Portfolio() {
  const projectArray = [
    {
      link: "https://uwlryoung.github.io/movie-giphy/",
      image: movie,
      title: "MovieGiphy",
    },
    {
      link: "https://rateit-e0014fad4ba9.herokuapp.com/",
      image: rateit,
      title: "RateIt",
    },
    {
      link: "https://shielded-beach-29867-5efce834725b.herokuapp.com/listings",
      image: pet,
      title: "Pet Spot",
    },
  ];
  return (
    <div>
      <div className="projectAllContainer">
        {projectArray.map((project) => (
          <div className="project1container">
            <p className="projectTitle">{project.title}</p>
            <a href={project.link} target="_blank">
              <img className="projectImage" src={project.image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
