import React, { useState } from "react";
import appStore from "../img/appStore.svg";
import googlePlay from "../img/googlePlay.svg";
import appStore_hoverImg from "../img/appStore_hover.svg";
import googlePlay_hoverImg from "../img/googlePlay_hover.svg";
import Img from "./imgs";

class DownloadBtns extends React.Component {
  render() {
    return (
      <div id="downloadBtns">
        <button id="appStore">
          <div id="butImg"></div>
          <div>
            <p>Available on the</p>
            <h6>App Store</h6>
          </div>
        </button>
        <button id="googlePlay">
          <div id="butImg2"></div>
          <div>
            <p>Available on</p>
            <h6>Google Play</h6>
          </div>
        </button>
      </div>
    );
  }
}

export default DownloadBtns;
