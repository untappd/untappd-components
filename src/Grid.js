import React from 'react'
import styled from 'styled-components'
import {
  space,
  color,
  layout,
  typography,
  flexbox,
  border,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import Base from './Base'

export const Box = styled(Base)(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  typography,
  flexbox,
  border,
  props => props.css,
)

Box.displayName = 'Box'

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
}

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexbox,
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...propTypes.flexbox,
}

export const Row = styled(Flex)``
export const Column = styled(Box)``
