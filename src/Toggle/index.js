import React from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'
import Base from '../Base'
import { getColor } from '../utils'

const StyledToggle = styled(Base)`
  .active .react-switch-bg {
    box-sizing: border-box;
    border 1px solid ${getColor('darkBlue')};
    background: rgba(30, 145, 234, 0.14) !important;
  }

  .active .react-switch-handle {
    background: ${getColor('darkBlue')} !important;
  }

  .not-active .react-switch-bg {
    box-sizing: border-box;
    border 1px solid ${getColor('grays.3')};
    background: ${getColor('grays.2')} !important;
  }

  .not-active .react-switch-handle {
    background: ${getColor('grays.3')} !important;
  }
`
export default function Toggle({ className, checked, ...props }) {
  return (
    <StyledToggle>
      <Switch
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        className={`${className} ${checked ? 'active' : 'not-active'}`}
        {...props}
      />
    </StyledToggle>
  )
}
