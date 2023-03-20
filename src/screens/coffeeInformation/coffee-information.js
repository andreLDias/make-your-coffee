import React, { useState } from 'react'
import coffeeAnimatedJSON from '../../assets/coffee-animated.json'
import loadingCoffeeAnimatedJSON from '../../assets/coffee-loading.json'
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
import { useNavigate } from 'react-router-dom'

const CoffeeInformation = () => {
  const navigate = useNavigate()

  const [selectedInitialMeasure, setSelectedInitialMeasure] =
    useState('milliliters')
  const [waterAmount, setWaterAmount] = useState(0)
  const [coffeeAmount, setCoffeeAmount] = useState(0)
  const [roastType, setRoastType] = useState('')
  const [isLoading, setIsLoading] = useState('')

  const proportionsFromGrains = {
    'light-roast': 17,
    'medium-roast': 15,
    'dark-roast': 14,
  }

  const handleSubmit = () => {
    if (selectedInitialMeasure === 'milliliters') {
      const powderAmount = waterAmount / (proportionsFromGrains[roastType] - 1)
      const coffeeAmount = Number(powderAmount.toFixed(2))
      const resultWaterAmount =
        parseFloat(waterAmount) + parseFloat(coffeeAmount)

      setIsLoading(true)
      setTimeout(() => {
        navigate(`/resultado/${coffeeAmount}/${resultWaterAmount}`)
      }, 1500)
    }
    if (selectedInitialMeasure === 'grains') {
      const tempWaterAmount = coffeeAmount * proportionsFromGrains[roastType]
      const waterAmount = Number(tempWaterAmount.toFixed(2))

      setIsLoading(true)
      setTimeout(() => {
        navigate(`/resultado/${coffeeAmount}/${waterAmount}`)
      }, 1500)
    }
  }

  const lottieOptions = (isLoading) => ({
    loop: true,
    autoplay: true,
    animationData: isLoading ? loadingCoffeeAnimatedJSON : coffeeAnimatedJSON,
    renderer: 'svg',
  })

  const handleChangeBrewInitialType = (item) => {
    if (!item) return
    setSelectedInitialMeasure(item)
    setCoffeeAmount(null)
    setWaterAmount(null)
  }

  if (isLoading) return <Lottie options={lottieOptions(true)} height={300} />

  return (
    <S.Wrapper>
      <S.Title>Hora do café!</S.Title>
      <Lottie options={lottieOptions(false)} height={300} />
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
        onChange={(event) => {
          selectedInitialMeasure === 'milliliters'
            ? setWaterAmount(event.target.value)
            : setCoffeeAmount(event.target.value)
        }}
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
        disabled={!Boolean(roastType && (waterAmount || coffeeAmount))}
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
