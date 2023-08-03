import React from "react";
import { positions } from "../../data/positions";

function Cards() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
      {positions.map((position, index) => {
        return (
          <div
            key={index}
            className="w-[350px] h-[280px] flex flex-col justify-center items-center rounded-xl shadow-2xl"
          >
            <img
              src={position.image}
              alt={position.position}
              className="mb-4"
            />
            <p className="text-2xl mb-1 tracking-[0.055em]">
              <span className="font-semibold">{position.position} </span>
              <span>{position.department}</span>
            </p>
            <p className="text-lg tracking-[0.055em] text-center">({position.tech})</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
