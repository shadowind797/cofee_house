import React from "react";

class MenuSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "cofee",
    };
  }
  handleButtonClick = (cofee, tea, dessert, buttonName) => {
    this.props.onMenuChange(cofee, tea, dessert);
    this.setState({ activeButton: buttonName });
  };
  render() {
    const { activeButton } = this.state;
    return (
      <div id="menu-type-div">
        <div>
          <button
            style={
              activeButton === "cofee"
                ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                : {}
            }
            onClick={() => {
              this.handleButtonClick(true, false, false, "cofee");
            }}
          >
            <div
              id="selectorImg"
              style={activeButton === "cofee" ? { backgroundColor: "#E1D4C9" } : {}}
            >
              ☕
            </div>
            <p>Cofee</p>
          </button>
        </div>
        <div>
          <button
            style={
              activeButton === "tea"
                ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                : {}
            }
            onClick={() => {
              this.handleButtonClick(false, true, false, "tea");
            }}
          >
            <div
              id="selectorImg"
              style={activeButton === "tea" ? { backgroundColor: "#E1D4C9" } : {}}
            >
              🫖
            </div>
            <p>Tea</p>
          </button>
        </div>
        <div>
          <button
            style={
              activeButton === "dessert"
                ? { backgroundColor: "#665f55", color: "#E1D4C9" }
                : {}
            }
            onClick={() => {
              this.handleButtonClick(false, false, true, "dessert");
            }}
          >
            <div
              id="selectorImg"
              style={activeButton === "dessert" ? { backgroundColor: "#E1D4C9" } : {}}
            >
              🍰
            </div>
            <p>Dessert</p>
          </button>
        </div>
      </div>
    );
  }
}

export default MenuSelector;
