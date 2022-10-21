import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
`;
export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 98%;
  height: 0vh;
  margin-left: 2vw;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    width: 98%;
  }
`;
export const Nav = styled.nav`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 80%;
  height: 10vh;
  margin-top: 28vh;
  z-index: 3;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: center;
    margin-left: 6vw;
    position: absolute;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  height: 8vh;
  width: 90%;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

export const Li = styled.li`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13vw;

  transform: scale(1.5, 1.65) rotate(-5deg) skewY(-6deg) translateZ(0);
  font-family: Impact, sans-serif;
  font-weight: 700;
  color: transparent;
  background: linear-gradient(#ffff00, #cb00cc);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.03em black;
  -webkit-background-clip: text;
  background-clip: text;
  &::before {
    @include pseudo;
    z-index: -1;
    -webkit-text-stroke: transparent;
    text-shadow: 0.094em 0.063em #adadff;
  }
  @media screen and (min-width: 320px) and (max-width: 800px) {
    font-size: 15px;
    width: 100%;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    font-size: 10px;
  }
`;
