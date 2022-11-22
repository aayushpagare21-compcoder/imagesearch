import React from "react";
import "./Results.css";

function Results(props) {
  const image = `https://source.unsplash.com/600x400?${props.s}`;
  return (
    <>
      <div className="display-rs">
        <img src={image} alt="Aayush" />
      </div>
    </>
  );
}

export default Results;
