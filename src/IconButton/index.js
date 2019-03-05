import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Icons from '../Icons'
import { getColor } from '../utils'

const StyledButton = styled(Button)`
  text-decoration: none;

  border: none;
  outline: none;
  background: transparent;
  padding-right: 0;

  &:active {
    box-shadow: none;
  }

  &:hover {
    color: ${getColor('darkBlue')};
    background: transparent;

    svg path {
      fill: ${getColor('grays.4')};
    }
  }
`

StyledButton.defaultProps = {
  ...Button.defaultProps,
}

export default function IconButton({ icon = 'Info', ...props }) {
  const IconComponent = Icons[icon]
  return (
    <StyledButton {...props}>
      <IconComponent />
    </StyledButton>
  )
}
