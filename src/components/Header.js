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
  );
}

export default Header;
