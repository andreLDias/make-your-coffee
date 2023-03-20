import React from 'react'
import * as S from './recipe-info.style'
import PowderAmount from './powderAmount'
import WaterAmount from './waterAmount'

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
