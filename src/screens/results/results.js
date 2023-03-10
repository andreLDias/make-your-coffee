import React from 'react'
import Lottie from 'react-lottie'
import coffeeAnimatedJSON from '../../assets/coffee-brewing.json'
import PowderAmount from './powderAmount'
import * as S from './results.style'
import WaterAmount from './waterAmount'

const Results = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coffeeAnimatedJSON,
    renderer: 'svg',
  }
  return (
    <S.Wrapper>
      <S.Title>Chegou a melhor hora!</S.Title>
      <Lottie options={defaultOptions} height={250} width={250} />
      <WaterAmount amount={111} />
      <PowderAmount amount={222} />
    </S.Wrapper>
  )
}

export default Results
