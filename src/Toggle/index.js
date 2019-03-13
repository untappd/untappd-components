import React from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'
import { getColor } from '../utils'

const lightBlue = 'rgba(30, 145, 234, 0.14)'

function Toggle({ className, checked, ...props }) {
  return (
    <Switch
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      className={`${className} ${checked ? 'active' : 'not-active'}`}
      {...props}
    />
  )
}

const StyledToggle = styled(Toggle)`
  &.active .react-switch-bg {
    box-sizing: border-box;
    border: 1px solid ${getColor('blue')};
    background: ${lightBlue} !important;
  }

  &.active .react-switch-handle {
    background: ${getColor('blue')} !important;
  }

  &.not-active .react-switch-bg {
    box-sizing: border-box;
    border: 1px solid ${getColor('grays.3')};
    background: ${getColor('grays.2')} !important;
  }

  &.not-active .react-switch-handle {
    background: ${getColor('grays.3')} !important;
  }
`

export default StyledToggle
