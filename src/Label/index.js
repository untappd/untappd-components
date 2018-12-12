import styled, { css } from 'styled-components'

import Base from '../Base'
import { getColor } from '../utils'

const primary = css`
  background-color: ${getColor('blue')};
`

const alert = css`
  background-color: ${getColor('red')};
`

const success = css`
  background-color: ${getColor('green')};
`

const warning = css`
  background-color: ${getColor('yellow')};
  color: ${getColor('black')};
`

const colorTypes = ({ color }) => {
  const colors = {
    primary,
    alert,
    success,
    warning,
  }

  return colors[color]
}

const Label = styled(Base)`
  color: ${getColor('white')};
  border-radius: 10px;
  line-height: 1.25;
  min-width: 4rem;
  padding: 0.15rem 0.5rem;

  ${colorTypes};
`

Label.defaultProps = {
  display: 'inline-block',
  m: 0,
  fontSize: 1,
  textAlign: 'center',
  fontWeight: 1,
}

export default Label
