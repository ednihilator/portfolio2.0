import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Header from "./Header";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainContainer">
      <div>
        <Header>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Header>

        {renderPage()}
      </div>
      <Footer></Footer>
    </div>
  );
}
