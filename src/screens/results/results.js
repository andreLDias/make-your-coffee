import React from 'react'
import Lottie from 'react-lottie'
import coffeeAnimatedJSON from '../../assets/coffee-brewing.json'
import * as S from './results.style'
import HowToPour from './recipe-tutorial'
import YouWillNeed from './recipe-info'

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
      <YouWillNeed water={375} powder={25} />
      <HowToPour water={375} powder={25} />
    </S.Wrapper>
  )
}

export default Results
