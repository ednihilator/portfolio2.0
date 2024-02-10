import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer_links">
        <a href="https://github.com/ednihilator" target="_blank">
          <FaGithub></FaGithub> Github
        </a>
        <a
          href="https://www.linkedin.com/in/edward-chang-65677617a"
          target="_blank"
        >
          {" "}
          <FaLinkedin></FaLinkedin> LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
