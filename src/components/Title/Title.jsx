import React from "react";

function Title({ title, subtitle }) {
  return (
    <div className="text-2xl sm:text-4xl tracking-[0.055em] mb-14 text-center">
      <span className="text-[#14279B] font-normal">{title} </span>
      <span className="text-[#002265] font-semibold">{subtitle}</span>
    </div>
  );
}

export default Title;
