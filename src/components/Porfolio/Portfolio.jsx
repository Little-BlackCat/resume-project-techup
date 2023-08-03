import React from "react";
import Title from "../Title/Title";
import Port from "../Cards/Port";

function Portfolio() {
  return (
    <div id="portfolio" className="mb-40 w-[70%] lg:w-[80%] mx-auto">
      <Title title="My" subtitle="Portfolio" />
      
        <Port />

    </div>
  );
}

export default Portfolio;
