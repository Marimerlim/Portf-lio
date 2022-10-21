import React from "react";
import * as S from "../styles/HomeStyle";
import Me from "../img/mama.jpg";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Div>
        <S.H1>Mariana</S.H1>
      </S.Div>
      <S.Foto>
        <S.Me src={Me} alt="Mariana Merlim" />
      </S.Foto>
    </S.Container>
  );
}
