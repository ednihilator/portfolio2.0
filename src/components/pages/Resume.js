import React from "react";
import ResumePDF from "./resume.pdf";
// import { EmbedPDF } from "@simplepdf/react-embed-pdf";


export default function Resume() {
  return (
    <div className="resume">
      <a
        // href="https://drive.google.com/file/d/1NnYlM2lqI4tKo_aESPZiHk1RW5_N-vy_/view"
        rel="noreferrer noopener"
        href={ResumePDF}
        // download="resume.pdf"
        className="resumeBtn"
        target="_blank"
      >
        Download Resume
      </a>
    </div>
  );
}
