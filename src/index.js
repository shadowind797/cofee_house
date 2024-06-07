import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./app";
import "./css/index.css";
import "./css/chief-slider.css";
import Slider from "./components/slider";

const rootId = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootId);
root.render(<App />);
