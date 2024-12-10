import React from 'react'
import * as S from './RecipeInfo.style'
import PowderAmount from './PowderAmount'
import WaterAmount from './WaterAmount'

const YouWillNeed = ({ water, powder }) => {
  return (
    <S.Wrapper>
      Para fazer essa receita, você vai precisar de:
      <WaterAmount amount={water} />
      <PowderAmount amount={powder} />
    </S.Wrapper>
  )
}

export default YouWillNeed
