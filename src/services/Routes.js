import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";

export default function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Router>
    </>
  );
}
