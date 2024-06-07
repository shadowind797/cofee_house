import React from "react";
import Header from "./header";
import Footer from "./footer";
import DisplayedMenu from "./displayedMenu"
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
          <div id="menu-type-div"></div>
          <DisplayedMenu cofee={this.state.cofee}/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Menu;
