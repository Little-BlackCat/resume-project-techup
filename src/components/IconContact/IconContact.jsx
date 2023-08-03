import React from "react";
import { icons } from "../../data/positions";
import bg from "../../assets/icons/bgicon.png";

function IconContact() {
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center mb-72">
      {icons.map((icon, index) => {
        return (
          <div key={index} className="flex flex-col items-center mb-16">
            <a href={icon.contact} target="_blank" className="hover:scale-110 hover:transition-all">
              <div
                className="w-[166px] h-[166px] mb-14 flex items-center justify-center bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <img className="max-w-[84px]" src={icon.icon} alt={icon.name} />
              </div>
              <div className="text-4xl text-[#3F3D56] font-medium tracking-[0.055em]">
                {icon.name}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default IconContact;
