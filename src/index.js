import React from "react";
import Header from "./components/header";
import MainImages from "./components/mainImags";
import ReactDOMClient from "react-dom/client";
import Slider from "./components/slider";
import Footer from "./components/footer";
import DownloadBtns from "./components/downloadBtns";
import Img from "./components/imgs";
import sliderImg_1 from "./img/coffee-slider-1.png";
import appStoreImg from "./img/appStore.svg";
import googlePlayImg from "./img/googlePlay.svg";
import iphoneImg from "./img/mobile-screens.png";
import googlePlay_hover from "./img/googlePlay_hover.svg";
import appStore_hover from "./img/googlePlay_hover.svg";
import "./css/index.css";
import "./css/chief-slider.css";
import { queryAllByRole } from "@testing-library/react";

const headerId = document.getElementById("header");
const logo = ReactDOMClient.createRoot(headerId);
logo.render(<Header />);

const $slider = document.getElementById("slider");
const slider = new Slider($slider, {
  loop: true, // whether to enable infinity loop (default: true)
  autoplay: false, // whether to enable autoplay (default: false)
  interval: 5000, // autoplay interval in milliseconds (default: 5000)
  pauseOnHover: true, // whether to stop autoplay while a slider is hovered
  refresh: true, // should the slider be updated when the viewport is resized
  swipe: true, // enable swiping
});

const sliderId_1 = document.getElementById("slider-img-1");
const sliderRoot_1 = ReactDOMClient.createRoot(sliderId_1);
sliderRoot_1.render(<Img img={sliderImg_1} />);

const iphoneId = document.getElementById("iphoneImg");
const iphoneRoot = ReactDOMClient.createRoot(iphoneId);
iphoneRoot.render(<Img img={iphoneImg} />);

const imagesId = document.getElementById("images");
const images = ReactDOMClient.createRoot(imagesId);
images.render(<MainImages />);

const downloadBtnsId = document.getElementById("download");
const downloadBtns = ReactDOMClient.createRoot(downloadBtnsId);
downloadBtns.render(<DownloadBtns />);

const footerId = document.getElementById("ftPlace");
const footer = ReactDOMClient.createRoot(footerId);
footer.render(<Footer />);
