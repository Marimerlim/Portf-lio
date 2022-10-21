import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
 
}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100vh;
  }
`;

export const Div = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: column;
  width: 30%;
  height: 20vh;
  top: 20vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: column;
    width: 80%;
    height: 20vh;
    top: 20vh;
  }
`;

export const H1 = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  font-family: "Staatliches", cursive;
  letter-spacing: 0.2vw;
  width: 70%;
  left: 16%;
  bottom: 10vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    justify-content: center;
    font-family: "Staatliches", cursive;
    letter-spacing: 0.2vw;
    width: 100%;
    left: 15%;
    bottom: 12vh;
  }
`;

export const P = styled.p`
  position: absolute;
  display: flex;
  font-family: "Staatliches", cursive;
  bottom: 5vh;
  right: 40%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    font-family: "Staatliches", cursive;
    bottom: 8vh;
    right: 30%;
  }
`;
