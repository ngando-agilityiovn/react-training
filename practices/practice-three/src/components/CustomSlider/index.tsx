import { useState } from 'react'

import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderMark,
  Badge,
  Box
} from '@chakra-ui/react'

interface SliderCustomProps {
  onSliderChange?: (value: number) => void
}

const CustomSlider = ({ onSliderChange }: SliderCustomProps) => {
  const [sliderValue, setSliderValue] = useState(0)

  const handleSetValue = (value: number) => {
    setSliderValue(value)
    onSliderChange?.(value)
  }

  return (
    <Box paddingTop={5}>
      <Box position="relative">
        <Slider
          aria-label="slider-ex-1"
          defaultValue={100}
          min={0}
          max={2000}
          step={100}
          onChange={handleSetValue}
        >
          {sliderValue !== 0 && sliderValue !== 2000 && (
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-30"
              ml="-5"
              w="12"
            >
              ${sliderValue}
            </SliderMark>
          )}
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Badge
          variant="outline"
          colorScheme="green"
          position="absolute"
          left={-2}
          top={5}
        >
          0
        </Badge>
        <Badge
          variant="outline"
          colorScheme="green"
          position="absolute"
          right={-2}
          top={5}
        >
          2000
        </Badge>
      </Box>
    </Box>
  )
}

export default CustomSlider
