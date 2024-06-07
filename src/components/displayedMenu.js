import React from "react";
import cofee1 from "../img/coffee-1.png";
import cofee2 from "../img/coffee-2.png";
import cofee3 from "../img/coffee-3.png";
import cofee4 from "../img/coffee-4.png";
import cofee5 from "../img/coffee-5.png";
import cofee6 from "../img/coffee-6.png";
import cofee7 from "../img/coffee-7.png";
import cofee8 from "../img/coffee-8.png";

class DisplayedMenu extends React.Component {
  constructor(props) {
    super(props);
    this.cofee = this.props.cofee;
    this.tea = this.props.tea;
    this.dessert = this.props.dessert;
  }
  render() {
    if (this.cofee) {
      return (
        <div id="menu" className="container">
          <div className="menuCard">
            <img src={cofee1}></img>
            <div className="menuInfo">
              <h3>Irish coffee</h3>
              <p>
                Fragrant black coffee with Jameson Irish whiskey and whipped
                milk
              </p>
              <h6>$7.00</h6>
            </div>
          </div>
          <div className="menuCard">
            <img src={cofee2}></img>
            <div className="menuInfo">
              <h3>Kahlua coffee</h3>
              <p>
                Classic coffee with milk and Kahlua liqueur under a cap of
                frothed milk
              </p>
              <h6>$7.00</h6>
            </div>
          </div>
          <div className="menuCard">
            <img src={cofee3}></img>
            <div className="menuInfo">
              <h3>Honey raf</h3>
              <p>Espresso with frothed milk, cream and aromatic honey</p>
              <h6>$5.50</h6>
            </div>
          </div>
          <div className="menuCard">
            <img src={cofee4}></img>
            <div className="menuInfo">
              <h3>Ice cappuccino</h3>
              <p>Cappuccino with soft thick foam in summer version with ice</p>
              <h6>$5.00</h6>
            </div>
          </div>
          <div className="menuCard">
            <img src={cofee5}></img>
            <div className="menuInfo">
              <h3>Espresso</h3>
              <p>Classic black coffee</p>
              <h6>$4.50</h6>
            </div>
          </div>
          <div className="menuCard">
            <img src={cofee6}></img>
            <div className="menuInfo">
              <h3>Latte</h3>
              <p>
                Espresso coffee with the addition of steamed milk and dense milk
                foam
              </p>
              <h6>$5.50</h6>
            </div>
          </div>
          <div className="menuCard">
            <img src={cofee7}></img>
            <div className="menuInfo">
              <h3>Latte macchiato</h3>
              <p>Espresso with frothed milk and chocolate</p>
              <h6>$5.50</h6>
            </div>
          </div>
          <div className="menuCard">
            <img src={cofee8}></img>
            <div className="menuInfo">
              <h3>Coffee with cognac</h3>
              <p>Fragrant black coffee with cognac and whipped cream</p>
              <h6>$6.50</h6>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DisplayedMenu;
