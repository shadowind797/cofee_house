import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

class Burger extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Link to="/">
            <div>
              <img className="cofeeHouse" src={cofeeHouse} alt=""></img>
              <img className="ellipse" src={ellipse} alt=""></img>
              <img className="resourse" src={resourse} alt=""></img>
            </div>
          </Link>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    );
  }
}

export default Burger;
