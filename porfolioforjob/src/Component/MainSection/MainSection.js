import React from "react";
import "./MainSection.css";
function MainSection() {
  return (
    <div className="flexbox">
      <div className="flexbox1">
        <h1 className="heading">Hello,</h1>
        <p className="bio">
          Welcome to my digital space! I'm Abhishek Verma, a developer who
          transforms ideas into engaging web solutions.
        </p>
      </div>
      <div className="imageContainer">
        <img className="image" src="img001.png" />
      </div>
    </div>
  );
}

export default MainSection;
