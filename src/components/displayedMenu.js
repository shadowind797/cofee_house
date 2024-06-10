import React from "react";
import ItemInfo from "./itemInfo";
import cofee1 from "../img/coffee-1.png";
import cofee2 from "../img/coffee-2.png";
import cofee3 from "../img/coffee-3.png";
import cofee4 from "../img/coffee-4.png";
import cofee5 from "../img/coffee-5.png";
import cofee6 from "../img/coffee-6.png";
import cofee7 from "../img/coffee-7.png";
import cofee8 from "../img/coffee-8.png";
import tea1 from "../img/tea-1.png";
import tea2 from "../img/tea-2.png";
import tea3 from "../img/tea-3.png";
import tea4 from "../img/tea-4.png";
import dessert1 from "../img/dessert-1.png";
import dessert2 from "../img/dessert-2.png";
import dessert3 from "../img/dessert-3.png";
import dessert4 from "../img/dessert-4.png";
import dessert5 from "../img/dessert-5.png";
import dessert6 from "../img/dessert-6.png";
import dessert7 from "../img/dessert-7.png";
import dessert8 from "../img/dessert-8.png";

class DisplayedMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeModal: false };
    this.setModalShow = this.setModalShow.bind(this);
  }
  setModalShow(value) {
    this.setState({ activeModal: value });
  }
  render() {
    if (this.props.cofee) {
      return (
        <div id="menu" className="container">
          <div className="menuCard" onClick={() => this.setModalShow("cofee1")}>
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
          <div className="menuCard" onClick={() => this.setModalShow("cofee2")}>
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
          <div className="menuCard" onClick={() => this.setModalShow("cofee3")}>
            <img src={cofee3}></img>
            <div className="menuInfo">
              <h3>Honey raf</h3>
              <p>Espresso with frothed milk, cream and aromatic honey</p>
              <h6>$5.50</h6>
            </div>
          </div>
          <div className="menuCard" onClick={() => this.setModalShow("cofee4")}>
            <img src={cofee4}></img>
            <div className="menuInfo">
              <h3>Ice cappuccino</h3>
              <p>Cappuccino with soft thick foam in summer version with ice</p>
              <h6>$5.00</h6>
            </div>
          </div>
          <div className="menuCard" onClick={() => this.setModalShow("cofee5")}>
            <img src={cofee5}></img>
            <div className="menuInfo">
              <h3>Espresso</h3>
              <p>Classic black coffee</p>
              <h6>$4.50</h6>
            </div>
          </div>
          <div className="menuCard" onClick={() => this.setModalShow("cofee6")}>
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
          <div className="menuCard" onClick={() => this.setModalShow("cofee7")}>
            <img src={cofee7}></img>
            <div className="menuInfo">
              <h3>Latte macchiato</h3>
              <p>Espresso with frothed milk and chocolate</p>
              <h6>$5.50</h6>
            </div>
          </div>
          <div className="menuCard" onClick={() => this.setModalShow("cofee8")}>
            <img src={cofee8}></img>
            <div className="menuInfo">
              <h3>Coffee with cognac</h3>
              <p>Fragrant black coffee with cognac and whipped cream</p>
              <h6>$6.50</h6>
            </div>
          </div>
          <ItemInfo
            type="cofee"
            cost={7}
            show={this.state.activeModal === "cofee1"}
            img={cofee1}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="cofee"
            cost={7}
            show={this.state.activeModal === "cofee2"}
            onHide={() => this.setModalShow(null)}
            img={cofee2}
            header="Kahlua coffee"
            description="Classic coffee with milk and Kahlua liqueur under a cap of frothed milk"
          />
          <ItemInfo
            type="cofee"
            cost={5.5}
            show={this.state.activeModal === "cofee3"}
            onHide={() => this.setModalShow(null)}
            img={cofee3}
            header="Honey raf"
            description="Espresso with frothed milk, cream and aromatic honey"
          />
          <ItemInfo
            type="cofee"
            cost={5}
            show={this.state.activeModal === "cofee4"}
            onHide={() => this.setModalShow(null)}
            img={cofee4}
            header="Ice cappuccino"
            description="Cappuccino with soft thick foam in summer version with ice"
          />
          <ItemInfo
            type="cofee"
            cost={4.5}
            show={this.state.activeModal === "cofee5"}
            onHide={() => this.setModalShow(null)}
            img={cofee5}
            header="Espresso"
            description="Classic black coffee"
          />
          <ItemInfo
            type="cofee"
            cost={5.5}
            show={this.state.activeModal === "cofee6"}
            onHide={() => this.setModalShow(null)}
            img={cofee6}
            header="Latte"
            description="Espresso coffee with the addition of steamed milk and dense milk foam"
          />
          <ItemInfo
            type="cofee"
            cost={5.5}
            show={this.state.activeModal === "cofee7"}
            onHide={() => this.setModalShow(null)}
            img={cofee7}
            header="Latte macchiato"
            description="Espresso with frothed milk and chocolate"
          />
          <ItemInfo
            type="cofee"
            cost={6.5}
            show={this.state.activeModal === "cofee8"}
            onHide={() => this.setModalShow(null)}
            img={cofee8}
            header="Coffee with cognac"
            description="Fragrant black coffee with cognac and whipped cream"
          />
        </div>
      );
    } else if (this.props.tea) {
      return (
        <div id="menu" className="container">
          <div className="menuCard" onClick={() => this.setModalShow("tea1")}>
            <img src={tea1}></img>
            <div className="menuInfo">
              <h3>Moroccan</h3>
              <p>
                Fragrant black tea with the addition of tangerine, cinnamon,
                honey, lemon and mint
              </p>
              <h6>$4.50</h6>
            </div>
          </div>
          <div className="menuCard" onClick={() => this.setModalShow("tea2")}>
            <img src={tea2}></img>
            <div className="menuInfo">
              <h3>Ginger</h3>
              <p>Original black tea with fresh ginger, lemon and honey</p>
              <h6>$5.00</h6>
            </div>
          </div>
          <div className="menuCard" onClick={() => this.setModalShow("tea3")}>
            <img src={tea3}></img>
            <div className="menuInfo">
              <h3>Cranberry</h3>
              <p>Invigorating black tea with cranberry and honey</p>
              <h6>$5.00</h6>
            </div>
          </div>
          <div className="menuCard" onClick={() => this.setModalShow("tea4")}>
            <img src={tea4}></img>
            <div className="menuInfo">
              <h3>Sea buckthorn</h3>
              <p>
                Toning sweet black tea with sea buckthorn, fresh thyme and
                cinnamon
              </p>
              <h6>$5.50</h6>
            </div>
          </div>
          <ItemInfo
            type="tea"
            cost={4.5}
            show={this.state.activeModal === "tea1"}
            img={tea1}
            onHide={() => this.setModalShow(null)}
            header="Moroccan"
            description="Fragrant black tea with the addition of tangerine, cinnamon,
                honey, lemon and mint"
          />
          <ItemInfo
            type="tea"
            cost={5}
            show={this.state.activeModal === "tea2"}
            img={tea2}
            onHide={() => this.setModalShow(null)}
            header="Ginger"
            description="Original black tea with fresh ginger, lemon and honey"
          />
          <ItemInfo
            type="tea"
            cost={5}
            show={this.state.activeModal === "tea3"}
            img={tea3}
            onHide={() => this.setModalShow(null)}
            header="Cranberry"
            description="Invigorating black tea with cranberry and honey"
          />
          <ItemInfo
            type="tea"
            cost={5.5}
            show={this.state.activeModal === "tea4"}
            img={tea4}
            onHide={() => this.setModalShow(null)}
            header="Sea buckthorn"
            description="Toning sweet black tea with sea buckthorn, fresh thyme and
                cinnamon"
          />
        </div>
      );
    } else {
      return (
        <div id="menu" className="container">
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert1")}
          >
            <img src={dessert1}></img>
            <div className="menuInfo">
              <h3>Marble cheesecake</h3>
              <p>
                Philadelphia cheese with lemon zest on a light sponge cake and
                red currant jam
              </p>
              <h6>$3.50</h6>
            </div>
          </div>
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert2")}
          >
            <img src={dessert2}></img>
            <div className="menuInfo">
              <h3>Red velvet</h3>
              <p>Layer cake with cream cheese frosting</p>
              <h6>$4.00</h6>
            </div>
          </div>
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert3")}
          >
            <img src={dessert3}></img>
            <div className="menuInfo">
              <h3>Cheesecakes</h3>
              <p>
                Soft cottage cheese pancakes with sour cream and fresh berries
                and sprinkled with powdered sugar
              </p>
              <h6>$4.50</h6>
            </div>
          </div>
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert4")}
          >
            <img src={dessert4}></img>
            <div className="menuInfo">
              <h3>Creme brulee</h3>
              <p>
                Delicate creamy dessert in a caramel basket with wild berries
              </p>
              <h6>$4.00</h6>
            </div>
          </div>
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert5")}
          >
            <img src={dessert5}></img>
            <div className="menuInfo">
              <h3>Pancakes</h3>
              <p>Tender pancakes with strawberry jam and fresh strawberries</p>
              <h6>$4.50</h6>
            </div>
          </div>
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert6")}
          >
            <img src={dessert6}></img>
            <div className="menuInfo">
              <h3>Honey cake</h3>
              <p>Classic honey cake with delicate custard</p>
              <h6>$4.50</h6>
            </div>
          </div>
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert7")}
          >
            <img src={dessert7}></img>
            <div className="menuInfo">
              <h3>Chocolate cake</h3>
              <p>
                Cake with hot chocolate filling and nuts with dried apricots
              </p>
              <h6>$5.50</h6>
            </div>
          </div>
          <div
            className="menuCard"
            onClick={() => this.setModalShow("dessert8")}
          >
            <img src={dessert8}></img>
            <div className="menuInfo">
              <h3>Black forest</h3>
              <p>
                A combination of thin sponge cake with cherry jam and light
                chocolate mousse
              </p>
              <h6>$6.50</h6>
            </div>
          </div>
          <ItemInfo
            type="dessert"
            cost={3.5}
            show={this.state.activeModal === "dessert1"}
            img={dessert1}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="dessert"
            cost={4}
            show={this.state.activeModal === "dessert2"}
            img={dessert2}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="dessert"
            cost={4.5}
            show={this.state.activeModal === "dessert3"}
            img={dessert3}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="dessert"
            cost={4}
            show={this.state.activeModal === "dessert4"}
            img={dessert4}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="dessert"
            cost={4.5}
            show={this.state.activeModal === "dessert5"}
            img={dessert5}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="dessert"
            cost={4.5}
            show={this.state.activeModal === "dessert6"}
            img={dessert6}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="dessert"
            cost={5.5}
            show={this.state.activeModal === "dessert7"}
            img={dessert7}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
          <ItemInfo
            type="dessert"
            cost={6.5}
            show={this.state.activeModal === "dessert8"}
            img={dessert8}
            onHide={() => this.setModalShow(null)}
            header="Irish coffee"
            description="Fragrant black coffee with Jameson Irish whiskey and whipped milk"
          />
        </div>
      );
    }
  }
}

export default DisplayedMenu;
