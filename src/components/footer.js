import React from "react";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";
import pin from "../img/pin-alt.svg";
import tel from "../img/phone.svg";
import clock from "../img/twitter.svg";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="container">
        <div>
          <h3>
            Sip, Savor, Smile. <span>It's coffee time!</span>
          </h3>
          <div id="socialNetworks">
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
          </div>
        </div>
        <div>
          <h4>Contact us</h4>
          <p>
            <img src={pin}></img>
            8558 Green Rd., LA
          </p>
          <p>
            <img src={tel}></img>
            +1 (603) 555-0123
          </p>
          <p>
            <img src={clock}></img>
            Mon-Sat: 9:00 AM - 23:00 PM
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
