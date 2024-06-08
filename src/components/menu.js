import React from "react";
import Header from "./header";
import Footer from "./footer";
import DisplayedMenu from "./displayedMenu";
import MenuSelector from "./menuSelector";
import "../css/index.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cofee: true,
      tea: false,
      dessert: false,
    };
  }
  handleMenuChange = (cofee, tea, dessert) => {
    this.setState({ cofee, tea, dessert });
  };
  render() {
    return (
      <div className="menuPage">
        <header>
          <Header />
        </header>
        <main>
          <h1>
            Behind each of our cups hides an <span>amazing surprise</span>
          </h1>
          <MenuSelector onMenuChange={this.handleMenuChange} />
          <DisplayedMenu {...this.state} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Menu;
