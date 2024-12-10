import React from 'react'
import * as S from './RecipeInfo.style'

const WaterAmount = ({ amount }) => {
  return (
    <S.Item>
      Água: <span>{amount}ml</span>
    </S.Item>
  )
}

export default WaterAmount
