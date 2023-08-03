import React from "react";
import { ports } from "../../data/positions";

function Port() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {ports.map((port, index) => {
        return (
          <div key={index} className="w-[350px] h-[280px]">
            <img
              
              src={port.image}
              alt={port.name}
              className="mb-4"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Port;
