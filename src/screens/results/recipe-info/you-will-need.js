import React from 'react'
import PowderAmount from './powderAmount'
import WaterAmount from './waterAmount'

const YouWillNeed = ({ water, powder }) => {
  return (
    <div>
      Para fazer essa receita, você vai precisar de:
      <WaterAmount amount={water} />
      <PowderAmount amount={powder} />
    </div>
  )
}

export default YouWillNeed
