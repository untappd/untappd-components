import React from 'react'
import styled from 'styled-components'

import { StyledModal } from '../Modal'
import Card from '../Card'
import Heading from '../Heading'
import CloseButton from '../CloseButton'
import { getBreakpoint } from '../utils'

const StyledSideModal = styled(StyledModal)`
  &__content ${Card} {
    box-shadow: none;
  }

  &__content {
    height: 100vh;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: auto;
    transform: none;
    width: 550px;
  }

  @media (max-width: ${getBreakpoint(0)}) {
    &__content {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: none;
      width: 100%;
    }

    &__content ${Card} {
      min-width: 100%;
      max-width: 100%;
      box-shadow: none;
    }
  }
`

export default function SideModal({
  children,
  title,
  onRequestClose,
  ...props
}) {
  return (
    <StyledSideModal {...props} onRequestClose={onRequestClose}>
      <Card>
        <Card.Header>
          <Heading>{title}</Heading>
          <CloseButton onClick={onRequestClose} />
        </Card.Header>
        {children}
      </Card>
    </StyledSideModal>
  )
}
