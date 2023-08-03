import React from "react";
import Title from "../Title/Title";
import IconContact from "../IconContact/IconContact";

function Contact() {
  return (
    <div id="contact" className="w-[70%] lg:w-[80%] mx-auto">
      <Title title="Contact" subtitle="Me" />
      <IconContact />
    </div>
  );
}

export default Contact;
