import React from "react";
import about_1 from "../img/about-1.png";
import about_2 from "../img/about-2.png";
import about_3 from "../img/about-3.png";
import about_4 from "../img/about-4.png";

class MainImages extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col">
          <img className="about-1" src={about_1} alt=""></img>
          <img className="about-2" src={about_2} alt=""></img>
        </div>
        <div className="col">
          <img className="about-3" src={about_3} alt=""></img>
          <img className="about-4" src={about_4} alt=""></img>
        </div>
      </div>
    );
  }
}

export default MainImages;
