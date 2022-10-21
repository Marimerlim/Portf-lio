import styled, { createGlobalStyle } from "styled-components";
import background from "../img/backg2.jpg";
import mancha from "../img/manchaRosa.png";

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
    background-repeat: repeat;
  }
`;

export const Div = styled.div`
  left: 5%;
  top: 20vh;
  position: absolute;
  display: flex;
  width: 50%;
  height: 73vh;
  align-items: center;
  justify-content: center;

  background-image: url(${mancha});
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 320px) and (min-width: 320px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    width: 80%;
    height: 40%;
    top: 20vh;
    align-items: center;
    justify-content: center;
  }
`;
export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: 3rem;
  height: 39vh;
  font-family: "Send Flowers";
  @font-face {
    font-family: "Send Flowers";
    font-style: normal;
    font-weight: 400;
    src: local(""),
      url("../fonts/send-flowers-v2-latin-regular.woff2") format("woff2"),
      url("../fonts/send-flowers-v2-latin-regular.woff") format("woff");
  }

  @media screen and (min-width: 320px) and (max-width: 800px) {
    align-items: center;
    width: 100%;
    font-size: 2rem;
  }
`;

export const Foto = styled.div`
  margin-left: 95vh;
  margin-top: 10vh;

  @media screen and (min-width: 320px) and (max-width: 800px) {
    margin-bottom: -65vh;
    margin-left: 0;
  }
`;
export const Me = styled.img`
  height: 44vh;
  display: flex;
  justify-content: left;
  border-radius: 50% 0px;
  box-shadow: 2px 2px 0px 0px;
  transform: rotate(-10deg);
  @media screen and (min-width: 320px) and (max-width: 800px) {
    height: 50vh;
  }
`;
