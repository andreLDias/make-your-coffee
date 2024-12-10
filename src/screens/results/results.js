import React from 'react'
import Lottie from 'react-lottie'
import coffeeAnimatedJSON from '../../assets/coffee-brewing.json'
import * as S from './Results.style'
import HowToPour from './RecipeTutorial'
import YouWillNeed from './RecipeInfo'
import { useParams } from 'react-router-dom'

const Results = () => {
  const { water, coffee } = useParams()

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
      <YouWillNeed water={water} powder={coffee} />
      <HowToPour water={water} powder={coffee} />
    </S.Wrapper>
  )
}

export default Results
