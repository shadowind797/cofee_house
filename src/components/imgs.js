import React from "react";

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.img = this.props.img;
  }
  render() {
    return <img src={this.img}></img>;
  }
}

export default Img;
