import React from 'react'
import * as S from './coffee-information.style'

const CoffeeInformation = () => {
  return (
    <S.Wrapper>
      <S.Title>Hora do café!</S.Title>
      {/*  TODO adicionar toggle para fazer a partir de ml ou gramas de pó */}
      <S.SubTitle>Quantos mls de café? ☕️</S.SubTitle>
      <S.Input />
      <S.SubTitle>Qual a torra?</S.SubTitle>
      <S.Select />
      <S.Button>Vamos lá!</S.Button>
    </S.Wrapper>
  )
}

export default CoffeeInformation
