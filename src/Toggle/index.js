import React from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'
import Base from '../Base'
import { getColor } from '../utils'

const StyledToggle = styled(Base)`
  .active .react-switch-bg {
    box-shadow: 0px 0px 0px 1px ${getColor('darkBlue')};
    background: rgba(30, 145, 234, 0.14) !important;
  }

  .active .react-switch-handle {
    background: ${getColor('darkBlue')} !important;
    box-shadow: 0px 0px 0px 1px ${getColor('darkBlue')};
  }

  .not-active .react-switch-bg {
    box-shadow: 0px 0px 0px 1px ${getColor('grays.3')};
    background: ${getColor('grays.2')} !important;
  }

  .not-active .react-switch-handle {
    background: ${getColor('grays.3')} !important;
    box-shadow: 0px 0px 0px 1px ${getColor('grays.3')};
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
