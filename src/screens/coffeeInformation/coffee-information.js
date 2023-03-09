import React, { useState } from 'react'
import coffeeAnimatedJSON from '../../coffee-animated.json'
import { Coffee, Grain } from '@mui/icons-material'
import * as S from './coffee-information.style'
import {
  Input,
  MenuItem,
  Select,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
} from '@mui/material'
import Lottie from 'react-lottie'

const CoffeeInformation = () => {
  const [selectedInitialMeasure, setSelectedInitialMeasure] =
    useState('milliliters')
  const [expectedAmount, setExpectedAmount] = useState(0)
  const [coffeeMeasure, setCoffeeMeasure] = useState(0)
  const [roastType, setRoastType] = useState('')

  const proportionsFromGrains = {
    'light-roast': 17,
    'medium-roast': 15,
    'dark-roast': 14,
  }

  const handleSubmit = () => {
    if (selectedInitialMeasure === 'milliliters') {
      console.log({ coffeeMeasure, a: proportionsFromGrains[roastType] })
      const waterAmount = coffeeMeasure / proportionsFromGrains[roastType]
      alert(waterAmount)
    }
    if (selectedInitialMeasure === 'grains') {
      const waterAmount = coffeeMeasure * proportionsFromGrains[roastType]
      alert(waterAmount)
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coffeeAnimatedJSON,
    renderer: 'svg',
  }

  return (
    <S.Wrapper>
      <S.Title>Hora do café!</S.Title>
      <Lottie options={defaultOptions} height={500} width={500} />

      <ToggleButtonGroup
        value={selectedInitialMeasure}
        exclusive
        onChange={(_, item) => setSelectedInitialMeasure(item)}
        aria-label="escolher a partir de mililitros ou gramas"
      >
        <ToggleButton value="milliliters" aria-label="mililitros">
          <Tooltip title="Mililitros">
            <Coffee />
          </Tooltip>
        </ToggleButton>
        <ToggleButton value="grains" aria-label="grãos">
          <Tooltip title="Pó">
            <Grain />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>

      <S.SubTitle>
        {selectedInitialMeasure === 'milliliters'
          ? `Quantos mls de café? ☕️`
          : `Quantos gramas de pó? 🫘`}
      </S.SubTitle>
      <Input
        color="primary"
        onChange={(event) => setCoffeeMeasure(parseFloat(event.target.value))}
      />
      <S.SubTitle>Qual a torra?</S.SubTitle>
      <Select
        value={roastType}
        filed
        onChange={(event) => setRoastType(event.target.value)}
        sx={{ width: '200px' }}
      >
        <MenuItem value="light-roast">Clara</MenuItem>
        <MenuItem value="medium-roast">Media</MenuItem>
        <MenuItem value="dark-roast">Escura</MenuItem>
      </Select>
      <Button
        variant="contained"
        size="large"
        sx={{ marginTop: '10px', marginBottom: '10px' }}
        onClick={() => handleSubmit()}
      >
        Vamos lá!
      </Button>
    </S.Wrapper>
  )
}

export default CoffeeInformation
