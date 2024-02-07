import React from "react";
import Resume from "resume.pdf";

export default function Resume() {
  return (
    <div className="resume">
      <a
        // href="https://drive.google.com/file/d/1NnYlM2lqI4tKo_aESPZiHk1RW5_N-vy_/view"
        rel="noreferrer noopener"
        href={Resume}
        download="resume.pdf"
        className="resumeBtn"
        target="_blank"
      >
        Download Resume
      </a>
    </div>
  );
}
