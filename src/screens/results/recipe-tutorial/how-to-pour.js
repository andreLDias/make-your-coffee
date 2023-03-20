import React from 'react'

const HowToPour = ({ water, powder }) => {
  return (
    <div>
      <div>Escalde o filtro! Isso evita resíduos de papel no seu café!</div>
      <div>Adicione todo o pó de café no filtro</div>
      <div>
        Despeje {3 * powder}ml de água sobre o café, lentamente e em movimentos
        circulares
      </div>
      <div>Aguarde entre 1 e 2 minutos!</div>
      <div>
        Despeje o restante de água ({water - 3 * powder}ml) lentamente (8ml/s) e
        em movimentos circulares{' '}
      </div>
      <div>Aprecie o cheiro maravilhoso do seu café!</div>
      <div>Sirva!</div>
    </div>
  )
}

export default HowToPour
