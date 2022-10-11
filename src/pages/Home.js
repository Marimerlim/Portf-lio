import React from "react";
import Header from "../components/header/Header";
import * as S from './StyleHome'

export default function Home() {
  return (
    <>
      <Header />
      <div>        
        <S.Foto></S.Foto>
        <S.H1>Mariana Merlim Rodrigues</S.H1>
      </div>
    </>
  );
}