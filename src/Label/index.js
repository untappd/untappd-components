import styled from 'styled-components'
import css from '@styled-system/css'

import Base from '../Base'

const primary = css({
  backgroundColor: 'blue',
})

const alert = css({
  backgroundColor: 'red',
})

const success = css({
  backgroundColor: 'green',
})

const warning = css({
  backgroundColor: 'yellow',
  color: 'black',
})

const colorTypes = ({ color }) => {
  const colors = {
    primary,
    alert,
    success,
    warning,
  }

  return colors[color]
}

const Label = styled(Base)(
  css({
    color: 'white',
    borderRadius: '10px',
    lineHeight: '1.25',
    minWidth: '4rem',
    padding: '0.15rem 0.5rem',
  }),
  colorTypes,
)

Label.defaultProps = {
  display: 'inline-block',
  m: 0,
  fontSize: 1,
  textAlign: 'center',
  fontWeight: 1,
}

export default Label
