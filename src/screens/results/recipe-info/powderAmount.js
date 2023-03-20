import React from 'react'
import * as S from './recipe-info.style'

const PowderAmount = ({ amount }) => {
  return (
    <S.Item>
      Café moído: <span>{amount}g</span>
    </S.Item>
  )
}

export default PowderAmount
