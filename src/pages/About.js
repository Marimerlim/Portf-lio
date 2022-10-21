import React from "react";
import * as S from "../styles/AboutStyle";

export default function About() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.H1>Sobre mim</S.H1>
      <S.Div>
        <S.P>
          Me chamo Mariana Merlim Rodrigues, tenho 19 anos, moro em São Gonçalo,
          Rio de Janeiro. Sou Concursada na Prefeitura Municipal de São Gonçalo,
          trabalho como Inspetora numa escola na Comunidade do Salgueiro. Amo
          demais aquelas crianças. Estou cursando Matemática, licenciatura, pelo
          Consórcio Cecierj, no 3° período.
        </S.P>
        <S.P>
          Eu sou Desenvolvedora Front-End, formada pela Escola Vai na Web. Tenho
          curso de informática avançada, formada pela Microcamp. Portanto, eu
          sei usar programas do pacote Office e Adobe, além de HTML, CSS,
          Javascript e React. Eu sou extrovertida, proativa e faço o que posso
          sob pressão. Amo cachorros, fazer biscoitos e origami.
        </S.P>
      </S.Div>
    </S.Container>
  );
}
