import React from "react";
import cofeeHouse from "../img/CoffeeHouse.svg";
import ellipse from "../img/Ellipse4.svg";
import resourse from "../img/Resource.svg";
import cofeeCup from "../img/coffee-cup.svg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Link to="/">
            <div>
              <img className="cofeeHouse" src={cofeeHouse} alt=""></img>
              <img className="ellipse" src={ellipse} alt=""></img>
              <img className="resourse" src={resourse} alt=""></img>
            </div>
          </Link>
          <nav>
            <ul class="menu">
              <li>
                <a href="#">Favorite cofee</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Mobile app</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
          <Link to="/menu">
            <div className="copy">
              <p>Menu</p>
              <img src={cofeeCup}></img>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
