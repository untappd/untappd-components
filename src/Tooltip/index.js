import React from 'react'
import styled from 'styled-components'
import Tippy from '@tippy.js/react'

import { Box } from '../Grid'
import { getColor, getFontSize, p } from '../utils'

function Tooltip({ ...props }) {
  return <Tippy arrow animation="fade" duration={0} {...props} />
}

const StyledTooltip = styled(Tooltip)`
  & .tippy-tooltip {
    font-size: ${getFontSize(1)};
  }

  & .tippy-content {
    ${p(1)};
  }

  ${Box} {
    color: ${getColor('white')};
  }
`

export default StyledTooltip
