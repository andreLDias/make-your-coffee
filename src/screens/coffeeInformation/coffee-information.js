import React, { useState } from 'react'
import coffeeAnimatedJSON from '../../assets/coffee-animated.json'
import { Coffee, Grain } from '@mui/icons-material'
import * as S from './coffee-information.style'
import {
  MenuItem,
  Select,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
  OutlinedInput,
  InputAdornment,
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
      const waterAmount = (coffeeMeasure + 1) / proportionsFromGrains[roastType]
      setExpectedAmount(Number(waterAmount.toFixed(2)))
    }
    if (selectedInitialMeasure === 'grains') {
      const waterAmount = coffeeMeasure * proportionsFromGrains[roastType]
      setExpectedAmount(Number(waterAmount.toFixed(2)))
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coffeeAnimatedJSON,
    renderer: 'svg',
  }

  const handleChangeBrewInitialType = (item) => {
    if (!item) return
    setSelectedInitialMeasure(item)
    setExpectedAmount(null)
  }

  return (
    <S.Wrapper>
      <S.Title>Hora do café!</S.Title>
      <Lottie options={defaultOptions} height={500} width={500} />
      <ToggleButtonGroup
        value={selectedInitialMeasure}
        exclusive
        onChange={(_, item) => handleChangeBrewInitialType(item)}
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
      <OutlinedInput
        id={`initial-measure-input-${selectedInitialMeasure}`}
        variant="filled"
        endAdornment={
          <InputAdornment position="end">
            {selectedInitialMeasure === 'milliliters' ? 'ml' : 'g'}
          </InputAdornment>
        }
        aria-describedby={`initial-measure-input-${selectedInitialMeasure}`}
        inputProps={{
          'aria-label': `${
            selectedInitialMeasure === 'milliliters' ? 'ml' : 'g'
          }`,
        }}
        onChange={(event) => setCoffeeMeasure(parseFloat(event.target.value))}
        type="number"
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
      {Boolean(expectedAmount) && (
        <div>
          {expectedAmount}
          {selectedInitialMeasure === 'milliliters'
            ? ' gramas de café'
            : ' ml de água'}
        </div>
      )}
    </S.Wrapper>
  )
}

export default CoffeeInformation
