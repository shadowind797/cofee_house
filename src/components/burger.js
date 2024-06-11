import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import vectorLeft from "../img/Vector-left.svg";
import vectorRight from "../img/Vector-right.svg";
import cofeeHouse from "../img/CoffeeHouse.svg";
import ellipse from "../img/Ellipse4.svg";
import resourse from "../img/Resource.svg";
import cofeeCup from "../img/coffee-cup.svg";

class Burger extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <Modal
          {...this.props}
          className={this.props.className}
          size="fullscreen"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <div id="burgerHeader">
              <Link to="/">
                <div>
                  <img className="cofeeHouse" src={cofeeHouse} alt=""></img>
                  <img className="ellipse" src={ellipse} alt=""></img>
                  <img className="resourse" src={resourse} alt=""></img>
                </div>
              </Link>
              <div id="burgerClose" onClick={this.props.onHide}>
                <img src={vectorLeft}></img>
                <img src={vectorRight}></img>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div id="burgerMain">
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
          </Modal.Body>
        </Modal>
      );
    }
  }
}

export default Burger;
