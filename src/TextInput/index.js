import React from 'react'
import styled, { css } from 'styled-components'

import Base, { BaseInput } from '../Base'
import { getSpace, getColor } from '../utils'

const errorState = ({ error }) =>
  error &&
  css`
    border: 1px solid ${getColor('red')};
    background-color: ${getColor('lightRed')};

    &:focus {
      border: 1px solid ${getColor('red')};
    }
  `

const StyledTextInput = styled(BaseInput)`
  width: 100%;
  background-clip: padding-box;
  min-height: ${getSpace(7)};
  border: 1px solid ${getColor('grays.2')};
  appearance: textfield;

  &:focus {
    outline: none;
    border: 1px solid ${getColor('grays.3')};
  }

  &:disabled {
    background-color: ${getColor('grays.2')};
    border-color: ${getColor('grays.3')};
    cursor: not-allowed;
    opacity: 0.25;
  }

  ${errorState};
`

StyledTextInput.defaultProps = {
  px: 3,
  fontSize: 2,
  borderRadius: 0,
  backgroundColor: 'white',
  display: 'block',
  lineHeight: 0,
}

const InputError = styled(Base)``

InputError.defaultProps = {
  fontWeight: 1,
  mt: 1,
  fontSize: 1,
  color: 'red',
}

function TextInput({ error, ...props }) {
  return (
    <>
      <StyledTextInput {...props} error={error} />
      {error && <InputError>{error}</InputError>}
    </>
  )
}

export default styled(TextInput)``
