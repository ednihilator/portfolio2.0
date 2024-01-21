import React from "react";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <footer>
      <div className="footer_logo">
        <a href="/"></a>
      </div>
      <div className="footer_links">
        <a href="#">
          <i className="fa-brands fa-github"></i> Github
        </a>
        <a href="#">
          {" "}
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
    // <header style={styles.headerStyle} className="header">
    //   <h1 style={styles.headingStyle}>Footer</h1>
    // </header>
  );
}

export default Footer;
