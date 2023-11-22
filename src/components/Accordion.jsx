import React, { useState } from "react";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((ele, index) => (
        <AccordionItem
          title={ele.title}
          text={ele.text}
          num={index}
          key={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
const AccordionItem = ({ title, text, num }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};
