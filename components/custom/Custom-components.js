import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import PortfolioComponent from "./sections/portfoliocomponent";
import TeamComponent from "./sections/teamcomponent";
import ContactComponent from "./sections/contactcomponent";
import About from "./sections/about"


const CustomComponents = () => {
  return (
    <div>
      <Banner2 />
      <About/>
      <PortfolioComponent />
      <TeamComponent />
      <ContactComponent />
    </div>
  );
};

export default CustomComponents;
