import React from 'react'
import styled, { css } from 'styled-components'

import { BaseButton } from '../Base'
import { getColor, getFontSize, py, px, mr, ml } from '../utils'
import Spinner from './Spinner'

const blue = css`
  background-color: ${getColor('blue')};
  border-color: ${getColor('blue')};

  &:hover {
    background-color: ${getColor('darkBlue')};
    border-color: ${getColor('darkBlue')};
  }
`

const red = css`
  background-color: ${getColor('red')};
  border-color: ${getColor('red')};

  &:hover {
    border-color: ${getColor('darkRed')};
    background-color: ${getColor('darkRed')};
  }
`

const green = css`
  background-color: ${getColor('green')};
  border-color: ${getColor('green')};

  &:hover {
    background-color: ${getColor('darkGreen')};
    border-color: ${getColor('darkGreen')};
  }
`

const white = css`
  color: ${getColor('blue')};
  background-color: ${getColor('white')};
  border-color: ${getColor('grays.2')};

  &:hover {
    border-color: ${getColor('grays.2')};
    background-color: ${getColor('grays.1')};
  }
`

const clear = css`
  color: ${getColor('blue')};
  border-color: transparent;

  &:hover {
    color: ${getColor('darkBlue')};
    border-color: transparent;
    background-color: transparent;
  }
`

const colors = {
  white,
  blue,
  red,
  green,
  clear,
}

const sizes = {
  small: css`
    font-size: ${getFontSize(0)};

    ${px(2)};
    ${py(1)};
  `,

  normal: css`
    font-size: ${getFontSize(2)};

    ${px(4)};
    ${py(2)};

    ${Spinner} {
      width: 16px;
      height: 16px;
    }
  `,

  large: css`
    font-size: ${getFontSize(3)};

    ${px(4)};
    ${py(2)};

    ${Spinner} {
      width: 22px;
      height: 22px;
    }
  `,
}

const sizeVariants = ({ size = 'normal' }) => sizes[size]
const expandedButton = ({ expand }) => expand && { width: '100%' }
const colorVariants = ({ color = 'white' }) => colors[color]

const buttonReset = css`
  white-space: nowrap;
  appearance: none !important;
  max-width: 100%;
  vertical-align: middle;
  border: 1px solid transparent;
  cursor: pointer;
`

const StyledButton = styled(BaseButton)`
  color: ${getColor('white')};

  ${buttonReset};
  ${colorVariants};
  ${sizeVariants};
  ${expandedButton};

  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: inset 0 1px 1px 0 rgba(0, 5, 5, 0.25);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  ${({ iconAfter }) =>
    iconAfter &&
    css`
      padding-right: 10px;
    `};

  ${({ iconBefore }) =>
    iconBefore &&
    css`
      padding-left: 10px;
    `};
`

StyledButton.defaultProps = {
  borderRadius: 0,
  fontWeight: 1,
  lineHeight: 0,
}

const ButtonIcon = styled.span`
  align-self: center;
  display: flex;
  flex-shrink: 0;
  line-height: 0;
  font-size: 0px;
  user-select: none;
`

const IconBefore = styled(ButtonIcon)(mr(2))

function Button({ children, isLoading, iconBefore, iconAfter, ...props }) {
  const { href } = props
  const allProps = {
    ...props,
    as: href ? 'a' : 'button',
  }

  return (
    <StyledButton iconBefore={iconBefore} iconAfter={iconAfter} {...allProps}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
          {children}
        </>
      )}
    </StyledButton>
  )
}

export default styled(Button)``
