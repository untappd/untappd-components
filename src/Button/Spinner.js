import styled, { keyframes } from 'styled-components'

import { getColor } from '../utils'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  border: 4px solid ${getColor('white')};
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);

  opacity: 0.8;
  border-radius: 50%;
  animation: ${spin} 0.7s infinite linear;
`

export default Spinner
