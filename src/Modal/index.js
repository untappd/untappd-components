import React from 'react'
import ReactModal from 'react-modal'
import styled, { keyframes } from 'styled-components'
import { themeGet } from 'styled-system'

import CloseButton from '../CloseButton'
import Card from '../Card'
import Heading from '../Heading'
import { getBreakpoint } from '../utils'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`,
}

const ANIMATION_DURATION = 200

const openAnimation = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.8);
    opacity: 0;
  }
`

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
    opacity: 0;
    transition: opacity ${ANIMATION_DURATION}ms ease-in-out;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  &__isOpen {
    opacity: 1;
  }

  &__beforeClose {
    opacity: 0;
  }

  &__overlay > &__isOpen {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.deceleration} both;
  }

  &__overlay > &__beforeClose {
    animation: ${closeAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.acceleration} both;
  }

  &__content ${Card} {
    border: none;
  }

  &__content {
    min-width: 500px;
    max-width: 800px;
    border: 0;
    margin-top: 12vmin;
    margin-bottom: 12vmin;
    max-height: calc(100% - 24vmin);
    /*max-width: calc(100% - 32px);*/

    /*        bottom: auto;
    left: 50%;
    position: fixed;
    right: auto;*/
    /*top: 40%;*/
    box-shadow: ${themeGet('shadows.2')};
    background: ${themeGet('colors.white')};
    outline: none;

    /*transform: translate(-50%, -50%);*/
    /*
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;*/
    /*overflow: "auto",*/
    /*WebkitOverflowScrolling: "touch",*/
    /*borderRadius: "4px",*/
    /*outline: "none",*/
    /*padding: "20px"*/
  }

  @media (max-width: ${getBreakpoint(0)}) {
    &__content {
      position: fixed;
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

function Modal({ children, title, onRequestClose, ...props }) {
  return (
    <StyledModal
      {...props}
      onRequestClose={onRequestClose}
      closeTimeoutMS={ANIMATION_DURATION}
    >
      <Card>
        <Card.Header>
          <Heading>{title}</Heading>
          <CloseButton onClick={onRequestClose} />
        </Card.Header>
        {children}
      </Card>
    </StyledModal>
  )
}

export default styled(Modal)``
