import React from "react";

function CardDisplay({ image, tooltip }) {
  return (
    <div className="projectItem">
      <img src={image} className="bgImage" alt="" />
      <tool-tip role="tooltip">{tooltip}</tool-tip>
    </div>
  );
}

export default CardDisplay;
