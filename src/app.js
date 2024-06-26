import React, { useEffect } from "react";
import Home from "./components/home";
import Menu from "./components/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
