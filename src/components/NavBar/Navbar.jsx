import React, { useEffect, useState } from "react";
import menu from "../../assets/menu-icon.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState("hidden");

  // Function to handle smooth scrolling to a specific section by ID
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop;
      // Scroll to the section with a 100px offset from the top for better positioning
      window.scrollTo({
        top: offset - 100,
        behavior: "smooth",
      });
    }
  };
  const handleClick = (status) => {
    if (status === "flex") {
      setIsOpen("hidden");
    } else {
      setIsOpen("flex");
    }
    return isOpen;
  };

  const handleClose = (status) => {
    if (window.innerWidth <= 640) {
      if (status === "flex") {
        setIsOpen("hidden");
      } else {
        setIsOpen("flex");
      }
      return isOpen;
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsOpen("hidden");
    } else {
      setIsOpen("flex");
    }
  };

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isTopZero = scrollY === 0;

      // Set the isScrolled state based on whether the scroll position is at the top or not
      setIsScrolled(!isTopZero);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial isOpen state based on the window width
    handleResize();

    // Remove the scroll and resize event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-screen mt-4 flex justify-between items-center px-8 md:px-0 sm:mx-auto  sm:pt-6 sm:mt-6 pb-5 mb-5 md:justify-center gap-16 lg:justify-around sticky top-0 bg-white ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div id="logo">
        <h1
          onClick={() => handleScrollToSection("logo")}
          className="tracking-[.25em] hover:cursor-pointer hover:scale-150 transition-all"
        >
          <span className="text-[#002265] font-bold text-2xl">Black</span>
          <span className="text-[#14279B] font-normal text-2xl">Cat</span>
        </h1>
      </div>

      <div className="relative sm:flex items-center">
        <ul
          className={`absolute ${isOpen} top-10 -left-1 flex-col bg-slate-300 gap-12 p-8 rounded-2xl sm:flex-row sm:static sm:top-0 sm:left-0 sm:bg-white sm:gap-0 sm:p-0`}
        >
          <li onClick={() => {handleScrollToSection("about"); handleClose("flex")}}>About</li>
          <li onClick={() => {handleScrollToSection("passions"); handleClose("flex")}}>Passion</li>
          <li onClick={() => {handleScrollToSection("portfolio"); handleClose("flex")}}>Portfolio</li>
        </ul>

        <button
          onClick={() => handleScrollToSection("contact")}
          className="hidden md:block"
        >
          Contact Me
        </button>
      </div>
      <div className="hover:scale-110 transition-all hover:cursor-pointer md:hidden">
        <img onClick={() => handleClick(isOpen)} src={menu} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
