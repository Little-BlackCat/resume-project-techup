import React from "react";
import profile from "../../assets/profile.png";

function Header() {
  return (
    <div id="about" className="w-[70%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-col lg:grid grid-cols-2 items-center justify-items-end gap-16 mb-28">
      <div className="mb-16">
        <p className="text-[#002265] font-normal text-2xl sm:text-4xl leading-loose sm:mb-8">Hi!</p>
        <h1 className="font-semibold text-3xl sm:text-5xl leading-tight mb-8">
          I'm Banyawat Yaisingson, <br /> a Fullstack Developer.
        </h1>
        <p className="text-[#082032] text-2xl font-normal mb-8">
          Highly motivated and dedicated entry-level back-end developer with a
          passion for coding and problem-solving. While lacking a formal degree,
          I have honed my expertise through self-learning and hands-on projects,
          consistently delivering high-quality solutions.
        </p>
        <button>Download Resume</button>
      </div>

      <div className="max-w-[500px]">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
