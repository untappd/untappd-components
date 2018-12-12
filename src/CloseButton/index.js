import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Icons from '../Icons'
import { getColor } from '../utils'

const StyledButton = styled(Button)`
  text-decoration: none;

  &:hover {
    color: ${getColor('darkBlue')};
  }

  border: none;
  outline: none;
  background: transparent;
  padding-right: 0;

  &:active {
    box-shadow: none;
  }

  &:hover {
    background: transparent;

    svg path {
      fill: ${getColor('grays.4')};
    }
  }
`

export default function CloseButton({ iconStyle = {}, ...props }) {
  return (
    <StyledButton {...props}>
      <Icons.CloseCircle style={iconStyle} />
    </StyledButton>
  )
}
