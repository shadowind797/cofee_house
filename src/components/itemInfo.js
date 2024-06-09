import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import varningImg from "../img/infoVarning.svg";

class ItemInfo extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div id="modal">
            <div>
              <img src={this.props.img}></img>
            </div>
            <div id="info">
              <h4>{this.props.header}</h4>
              <p>{this.props.description}</p>
              <h5>Size</h5>
              <div id="selector">
                <button>
                  <div>
                    <h6>S</h6>
                  </div>
                  <p>200 ml</p>
                </button>
                <button>
                  <div>
                    <h6>M</h6>
                  </div>
                  <p>300 ml</p>
                </button>
                <button>
                  <div>
                    <h6>L</h6>
                  </div>
                  <p>400 ml</p>
                </button>
              </div>
              <h5>Additives</h5>
              <div id="selector">
                <button>
                  <div>
                    <h6>1</h6>
                  </div>
                  <p>Sugar</p>
                </button>
                <button>
                  <div>
                    <h6>2</h6>
                  </div>
                  <p>Cinnamon</p>
                </button>
                <button>
                  <div>
                    <h6>3</h6>
                  </div>
                  <p>Syrup</p>
                </button>
              </div>
              <div id="price">
                <h4>Total:</h4>
                <h4>$7.00</h4>
              </div>
              <div id="varning">
                <img src={varningImg}></img>
                <p>
                  The cost is not final. Download our mobile app to see the
                  final price and place your order. Earn loyalty points and
                  enjoy your favorite coffee with up to 20% discount.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button id="close" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ItemInfo;
