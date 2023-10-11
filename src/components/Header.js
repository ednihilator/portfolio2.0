import React from "react";

const styles = {
  headerStyle: {
    background: "#0d1b2a",
  },
  headingStyle: {
    fontSize: "50px",
  },
};

// We use JSX curly braces to evaluate the style object

function Header({ children }) {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Edward Chang</h1>
      {children}
    </header>
    // USE THE ABOVE HEADER TEMPORARILY
    // <header>
    //   <div class="header_logo">
    //     <a href="/">
    //       <h1>Edward Chang</h1>
    //     </a>
    //   </div>

    //   <nav>
    //     <ul class="nav_list">
    //       <li class="nav_list_item">
    //         <a href="/index.html"> About Me </a>
    //       </li>
    //       <li class="nav_list_item">
    //         <a href="/contact-us.html"> Contact Us </a>
    //       </li>
    //       <li class="nav_list_item active">
    //         <a href="/about-me.html">Portfolio</a>
    //       </li>
    //       <li class="nav_list_item active">
    //         <a href="/about-me.html">Resume</a>
    //       </li>
    //     </ul>
    //     {children}
    //   </nav>
    // </header>
  );
}

export default Header;
