import React from 'react'
import ReactSelect from 'react-select'
import ReactAsyncSelect from 'react-select/lib/Async'
import styled, { css } from 'styled-components'
import { themeGet as t } from 'styled-system'

import { getSpace, getColor } from '../utils'

const sharedStyle = css`
  .ut-select__control {
    min-height: ${getSpace(7)};
  }

  .ut-select__control,
  .ut-select__menu {
    border-color: ${t('colors.grays.2')};
  }

  .ut-select__menu {
    z-index: 10000000;
  }

  .ut-select__control--is-focused {
    border-color: ${getColor('grays.3')};
    box-shadow: none;

    &:hover {
      border-color: ${getColor('grays.4')};
    }
  }

  .ut-select__control--is-disabled {
    background-color: ${getColor('grays.2')};
    border-color: ${getColor('grays.3')};
    opacity: 0.25;
  }

  .ut-select__single-value {
    color: ${t('colors.black')};
  }

  .ut-select__option {
    border-left: 2px solid transparent;
  }

  .ut-select__option--is-focused {
    background-color: ${t('colors.grays.0')};

    &:active {
      background-color: ${t('colors.grays.2')};
    }
  }

  .ut-select__option--is-selected {
    background-color: ${getColor('white')};
    color: ${getColor('blue')};
    font-weight: 600;
    border-left: 2px solid ${getColor('blue')};

    &:hover {
      background-color: ${t('colors.grays.0')};
    }
  }
`

function BaseSelect({ className, ...props }) {
  return (
    <ReactSelect {...props} className={className} classNamePrefix="ut-select" />
  )
}

function BaseAsyncSelect({ className, ...props }) {
  return (
    <ReactAsyncSelect
      {...props}
      className={className}
      classNamePrefix="ut-select"
    />
  )
}

const Select = styled(BaseSelect)`
  ${sharedStyle}
`

const AsyncSelect = styled(BaseAsyncSelect)`
  ${sharedStyle}
`

export { Select, AsyncSelect }
