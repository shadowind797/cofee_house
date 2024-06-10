import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import varningImg from "../img/infoVarning.svg";

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sugar: false,
      cinnamon: false,
      syrup: false,
      activeSize: "200ml",
      activeVeight: "50g",
    };
  }
  handleSizeChange = (size) => {
    this.setState({ activeSize: size });
  };
  handleVeightChange = (veight) => {
    this.setState({ activeVeight: veight });
  };
  totalCounter = () => {
    let total = this.props.cost;
    if (this.state.activeSize === "ml200") {
      total *= 1;
    } else if (this.state.activeSize === "ml300") {
      total *= 1.4;
    } else if (this.state.activeSize === "ml400") {
      total *= 1.7;
    }
    if (this.state.activeVeight === "50g") {
      total *= 1;
    } else if (this.state.activeVeight === "100g") {
      total *= 1.8;
    } else if (this.state.activeVeight === "200g") {
      total *= 3.4;
    }
    if (this.state.sugar) {
      total += 1;
    }
    if (this.state.cinnamon) {
      total += 2.3;
    }
    if (this.state.syrup) {
      total += 1.2;
    }
    return total.toFixed(2);
  };
  render() {
    const { activeSize } = this.state;
    const { activeVeight } = this.state;
    if (this.props.type === "cofee") {
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
                  <button
                    onClick={() => {
                      this.handleSizeChange("ml200");
                    }}
                    style={
                      activeSize === "ml200"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeSize === "ml200"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        S
                      </h6>
                    </div>
                    <p>200 ml</p>
                  </button>
                  <button
                    onClick={() => {
                      this.handleSizeChange("ml300");
                    }}
                    style={
                      activeSize === "ml300"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeSize === "ml300"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        M
                      </h6>
                    </div>
                    <p>300 ml</p>
                  </button>
                  <button
                    onClick={() => {
                      this.handleSizeChange("ml400");
                    }}
                    style={
                      activeSize === "ml400"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeSize === "ml400"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        L
                      </h6>
                    </div>
                    <p>400 ml</p>
                  </button>
                </div>
                <h5>Additives</h5>
                <div id="selector">
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        sugar: !prevState.sugar,
                      }));
                    }}
                    style={
                      this.state.sugar
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.sugar
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        1
                      </h6>
                    </div>
                    <p>Sugar</p>
                  </button>
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        cinnamon: !prevState.cinnamon,
                      }));
                    }}
                    style={
                      this.state.cinnamon
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.cinnamon
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        2
                      </h6>
                    </div>
                    <p>Cinnamon</p>
                  </button>
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        syrup: !prevState.syrup,
                      }));
                    }}
                    style={
                      this.state.syrup
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.syrup
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        3
                      </h6>
                    </div>
                    <p>Syrup</p>
                  </button>
                </div>
                <div id="price">
                  <h4>Total:</h4>
                  <h4>${this.totalCounter()}</h4>
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
            <Button id="close" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.type === "tea") {
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
                  <button
                    onClick={() => {
                      this.handleSizeChange("ml200");
                    }}
                    style={
                      activeSize === "ml200"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeSize === "ml200"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        S
                      </h6>
                    </div>
                    <p>200 ml</p>
                  </button>
                  <button
                    onClick={() => {
                      this.handleSizeChange("ml300");
                    }}
                    style={
                      activeSize === "ml300"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeSize === "ml300"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        M
                      </h6>
                    </div>
                    <p>300 ml</p>
                  </button>
                  <button
                    onClick={() => {
                      this.handleSizeChange("ml400");
                    }}
                    style={
                      activeSize === "ml400"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeSize === "ml400"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        L
                      </h6>
                    </div>
                    <p>400 ml</p>
                  </button>
                </div>
                <h5>Additives</h5>
                <div id="selector">
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        sugar: !prevState.sugar,
                      }));
                    }}
                    style={
                      this.state.sugar
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.sugar
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        1
                      </h6>
                    </div>
                    <p>Sugar</p>
                  </button>
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        cinnamon: !prevState.cinnamon,
                      }));
                    }}
                    style={
                      this.state.cinnamon
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.cinnamon
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        2
                      </h6>
                    </div>
                    <p>Lemon</p>
                  </button>
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        syrup: !prevState.syrup,
                      }));
                    }}
                    style={
                      this.state.syrup
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.syrup
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        3
                      </h6>
                    </div>
                    <p>Syrup</p>
                  </button>
                </div>
                <div id="price">
                  <h4>Total:</h4>
                  <h4>${this.totalCounter()}</h4>
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
            <Button id="close" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    } else if (this.props.type === "dessert") {
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
                  <button
                    onClick={() => {
                      this.handleVeightChange("50g");
                    }}
                    style={
                      activeVeight === "50g"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeVeight === "50g"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        S
                      </h6>
                    </div>
                    <p>50 g</p>
                  </button>
                  <button
                    onClick={() => {
                      this.handleVeightChange("100g");
                    }}
                    style={
                      activeVeight === "100g"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeVeight === "100g"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        M
                      </h6>
                    </div>
                    <p>100 g</p>
                  </button>
                  <button
                    onClick={() => {
                      this.handleVeightChange("200g");
                    }}
                    style={
                      activeVeight === "200g"
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          activeVeight === "200g"
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        L
                      </h6>
                    </div>
                    <p>200 g</p>
                  </button>
                </div>
                <h5>Additives</h5>
                <div id="selector">
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        sugar: !prevState.sugar,
                      }));
                    }}
                    style={
                      this.state.sugar
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.sugar
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        1
                      </h6>
                    </div>
                    <p>Berries</p>
                  </button>
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        cinnamon: !prevState.cinnamon,
                      }));
                    }}
                    style={
                      this.state.cinnamon
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.cinnamon
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        2
                      </h6>
                    </div>
                    <p>Nuts</p>
                  </button>
                  <button
                    onClick={() => {
                      this.setState((prevState) => ({
                        syrup: !prevState.syrup,
                      }));
                    }}
                    style={
                      this.state.syrup
                        ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                        : {}
                    }
                  >
                    <div>
                      <h6
                        id="selectorImg"
                        style={
                          this.state.syrup
                            ? { backgroundColor: "#E1D4C9", color: "#665f55" }
                            : {}
                        }
                      >
                        3
                      </h6>
                    </div>
                    <p>Jam</p>
                  </button>
                </div>
                <div id="price">
                  <h4>Total:</h4>
                  <h4>${this.totalCounter()}</h4>
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
            <Button id="close" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
}

export default ItemInfo;
