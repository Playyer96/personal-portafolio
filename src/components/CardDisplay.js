import React from "react";

function CardDisplay({ image }) {
  return (
    <div className="projectItem">
      <img src={image} className="bgImage" alt="" />
    </div>
  );
}

export default CardDisplay;
