import React from 'react'
import styled, { css } from 'styled-components'

import Base, { BaseLabel, BaseInput } from '../Base'
import { getColor } from '../utils'

const size = '22px'
const checkboxWidth = '2px'

const ControlIndicator = styled(Base)`
  position: absolute;
  border: 1px solid ${getColor('grays.2')};
  height: ${size};
  width: ${size};
  left: 0;
  top: -1px;
  transition: background-color 0.3s ease;

  &:after {
    position: relative;
    display: none;
    width: 5px;
    height: 11px;
    left: 6px;
    top: 2px;

    transform: rotate(45deg);
    border: solid ${getColor('white')};
    border-width: 0 ${checkboxWidth} ${checkboxWidth} 0;
    content: '';
  }
`

ControlIndicator.defaultProps = {
  borderRadius: 0,
}

const Control = styled(BaseLabel)`
  position: relative;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`

Control.defaultProps = {
  fontWeight: 1,
  pl: 6,
}

const Input = styled(BaseInput).attrs({
  type: 'checkbox',
})`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked ~ ${ControlIndicator} {
    background: ${getColor('blue')};
    border-color: ${getColor('blue')};

    &:after {
      display: block;
    }
  }

  &:hover ~ ${ControlIndicator} {
    background: ${getColor('grays.1')};
  }

  &:hover:checked:not(:disabled) ~ ${ControlIndicator} {
    background: ${getColor('blue')};
  }

  &:disabled:checked ~ ${ControlIndicator} {
    &:after {
      border-color: ${getColor('grays.2')};
    }
  }

  &:disabled ~ ${ControlIndicator} {
    pointer-events: none;
    background: ${getColor('grays.1')};
    border-color: ${getColor('grays.2')};
  }
`

export default function Checkbox({ children, controlProps, ...props }) {
  const { disabled } = props

  return (
    <Control disabled={disabled} {...controlProps}>
      {children}
      <Input {...props} />
      <ControlIndicator />
    </Control>
  )
}
