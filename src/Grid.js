import React from 'react'
import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  fontSize,
  fontWeight,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  flex,
  order,
  alignSelf,
  borders,
  borderColor,
  size,
  borderRadius,
} from 'styled-system'

import Base from './Base'

export const Box = styled(Base)(
  {
    boxSizing: 'border-box',
  },
  space,
  size,
  color,
  width,
  height,
  fontSize,
  fontWeight,
  flex,
  order,
  alignSelf,
  borders,
  borderColor,
  borderRadius,
  props => props.css,
)

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
}

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
}

export const Row = styled(Flex)``
export const Column = styled(Box)``
