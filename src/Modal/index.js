import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import IconButton from '../IconButton'
import Card from '../Card'
import Heading from '../Heading'
import { getBreakpoint } from '../utils'

function ReactModalAdapter({ className, ...props }) {
  const contentClassName = `${className}__content`
  const overlayClassName = `${className}__overlay`
  const portalClassName = `${className}__portal`

  return (
    <ReactModal
      portalClassName={portalClassName}
      className={{
        base: contentClassName,
        afterOpen: `${className}__isOpen`,
        beforeClose: `${className}__beforeClose`,
      }}
      overlayClassName={{
        base: overlayClassName,
        afterOpen: `${className}__isOpen`,
        beforeClose: `${className}__beforeClose`,
      }}
      {...props}
    />
  )
}

export const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 4;
  }

  &__content ${Card} {
    border: none;
    min-width: 500px;
    max-width: 800px;
  }

  &__content {
    border: 0;
    bottom: auto;
    left: 50%;
    position: fixed;
    right: auto;
    top: ${({ isVerticallyCentered }) =>
      isVerticallyCentered ? '50%' : '40%'};

    box-shadow: ${themeGet('shadows.2')};
    background: ${themeGet('colors.white')};
    outline: none;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${getBreakpoint(0)}) {
    &__content {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: none;
    }

    &__content ${Card} {
      min-width: 100%;
      max-width: 100%;
      box-shadow: none;
    }
  }
`

function Modal({ children, title, onRequestClose, ...props }) {
  return (
    <StyledModal {...props} onRequestClose={onRequestClose}>
      <Card>
        <Card.Header>
          <Heading>{title}</Heading>
          <IconButton icon="Close" onClick={onRequestClose} />
        </Card.Header>
        {children}
      </Card>
    </StyledModal>
  )
}

export default styled(Modal)``
