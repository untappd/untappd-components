import React from 'react'
import ReactAsyncSelect from 'react-select/lib/Async'
import styled from 'styled-components'
import { themeGet as t } from 'styled-system'

import { getSpace, getColor } from '../utils'

function AsyncSelect({ className, ...props }) {
  return (
    <ReactAsyncSelect
      {...props}
      className={className}
      classNamePrefix="ut-select"
    />
  )
}

export default styled(AsyncSelect)`
  .ut-select__control {
    min-height: ${getSpace(7)};
  }

  .ut-select__control,
  .ut-select__menu {
    border-color: ${t('colors.grays.2')};
  }

  .ut-select__control--is-focused {
    border-color: ${getColor('grays.3')};
    box-shadow: none;

    &:hover {
      border-color: ${getColor('grays.4')};
    }
  }

  .ut-select__single-value {
    color: ${t('colors.black')};
  }

  .ut-select__option {
    border-left: 2px solid transparent;
  }

  .ut-select__option--is-focused {
    background-color: ${t('colors.grays.1')};

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
      background-color: ${t('colors.grays.1')};
    }
  }
`
