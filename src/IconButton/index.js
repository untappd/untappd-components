import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Button from '../Button'
import Icons from '../Icons'

const StyledButton = styled(Button)(
  css({
    textDecoration: 'none',

    border: 'none',
    outline: 'none',
    background: 'transparent',
    paddingRight: 0,

    '&:active': {
      boxShadow: 'none',
    },

    '&:hover': {
      color: 'darkBlue',
      background: 'transparent',

      'svg path': {
        fill: 'grays.4',
      },
    },
  }),
)

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
