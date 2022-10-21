import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./styles/NavStyle";

import Onu from "./pages/Onu";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Works";

export default function App() {
  return (
    <Router>
      <S.GlobalStyle />
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Link href="/">
              <S.Li>Home</S.Li>
            </S.Link>
            <S.Link href="/about">
              <S.Li>About</S.Li>
            </S.Link>
            <S.Link href="/Work">
              <S.Li>Work</S.Li>
            </S.Link>
            <S.Link href="/Onu">
              <S.Li>Page Onu</S.Li>
            </S.Link>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/onu" element={<Onu />} />
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />]
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
