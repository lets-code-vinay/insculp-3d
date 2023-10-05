import React, { useState } from "react";
import LandingPage from "../LandingPage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Page2 from "../Page2";
import Page3 from "../Page3";
import Page4 from "../Page4";
import Page5 from "../Page5";
import Page6 from "../Page6";
import Page7 from "../Page7";
import Page8 from "../Page8";
import Page9 from "../Page9";
import Page10 from "../Page10";
import { AnimatePresence } from "framer-motion";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = 10;

  const handleDownArrow = () => {
    console.log("handleDownArrow");
    if (currentPage == totalPage) return true;

    setCurrentPage(currentPage + 1);
  };

  const handleUpArrow = () => {
    if (currentPage == 1) return true;

    setCurrentPage(currentPage - 1);
  };

  const getPageNo = () => {
    switch (currentPage) {
      case 1:
        return "01.10";

      case 2:
        return "02.10";

      case 3:
        return "03.10";

      case 4:
        return "04.10";

      case 5:
        return "05.10";

      case 6:
        return "06.10";

      case 7:
        return "07.10";

      case 8:
        return "08.10";

      case 9:
        return "09.10";

      case 10:
        return "10.10";

      default:
        return 1;
    }
  };
  return (
    <>
      <Header />
      <AnimatePresence>
        {currentPage == 1 && <LandingPage />}
        {currentPage == 2 && <Page2 />}
        {currentPage == 3 && <Page3 />}
        {currentPage == 4 && <Page4 />}
        {currentPage == 5 && <Page5 />}
        {currentPage == 6 && <Page6 />}
        {currentPage == 7 && <Page7 />}
        {currentPage == 8 && <Page8 />}
        {currentPage == 9 && <Page9 />}
        {currentPage == 10 && <Page10 />}
      </AnimatePresence>

      <Footer
        currentPage={getPageNo()}
        onDownArrow={handleDownArrow}
        onUpArrow={handleUpArrow}
        currentPageNo={currentPage}
      />
    </>
  );
};

export default Homepage;
