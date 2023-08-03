import React from "react";
import Cards from "../Cards/Cards";
import Title from "../Title/Title";

function Passions() {
  return (
    <div id="passions" className="mb-40  w-[70%] lg:w-[80%] mx-auto">
      <Title title="Additional" subtitle="passions" />
      <Cards />
    </div>
  );
}

export default Passions;
