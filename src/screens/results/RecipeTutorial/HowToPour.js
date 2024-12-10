import React from 'react'
import * as S from './HowToPour.style'

const HowToPour = ({ water, powder }) => {
  return (
    <S.Wrapper>
      <S.Item>
        Escalde o filtro! Isso evita resíduos de papel no seu café!
      </S.Item>
      <S.Item>Adicione todo o pó de café no filtro</S.Item>
      <S.Item>
        Despeje <span>{3 * powder}ml</span> de água sobre o café, lentamente e
        em movimentos circulares
      </S.Item>
      <S.Item>Aguarde entre 1 e 2 minutos!</S.Item>
      <S.Item>
        Despeje o restante de água (<span>{water - 3 * powder}ml</span>)
        lentamente (8ml/s) e em movimentos circulares{' '}
      </S.Item>
      <S.Item>Aprecie o cheiro maravilhoso do seu café!</S.Item>
      <S.Item>Sirva!</S.Item>
    </S.Wrapper>
  )
}

export default HowToPour
