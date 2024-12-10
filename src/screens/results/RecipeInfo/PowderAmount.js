import React from 'react'
import * as S from './RecipeInfo.style'

const PowderAmount = ({ amount }) => {
  return (
    <S.Item>
      Café moído: <span>{amount}g</span>
    </S.Item>
  )
}

export default PowderAmount
