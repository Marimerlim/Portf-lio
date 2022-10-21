import styled, { createGlobalStyle } from "styled-components";
import background from "../img/backg1.jpg";
export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 320px) and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 150vh;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 33vh;

  @media screen and (min-width: 320px) and (max-width: 800px) {
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
  display: flex;
  justify-content: center;
  margin-top: -50vh;
  font-family: "Send Flowers";
  width: 70%;

  @media screen and (min-width: 320px) and (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 100%;
    left: 15%;
    margin-bottom: 58vh;
  }
`;

export const P = styled.p`
  height: 30vh;
  width: 95%;
  margin: 0 auto;
  text-align: justify;
  font-size: 1.5rem;
  @media screen and (min-width: 319px) and (max-width: 800px) {
    width: 95%;
    height: 58vh;
    padding: 3px;
    position: relative;
    bottom: -53vh;
    font-size: 1.2rem;
  }
`;
