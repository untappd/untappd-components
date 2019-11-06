import styled from 'styled-components'
import {
  compose,
  flexbox,
  layout,
  border,
  space,
  color,
  typography,
} from 'styled-system'
import css from '@styled-system/css'

import zIndex from '../zIndex'

const styleProps = compose(
  color,
  flexbox,
  layout,
  border,
  space,
  typography,
  zIndex,
)

const Base = styled.div(
  css({
    color: 'black',
    fontFamily: 'default',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  }),
  styleProps,
)

const BaseBox = styled(Base)(flexbox)

const BaseButton = styled(Base).attrs({
  as: 'button',
  type: 'button',
})``

const BaseLabel = styled(Base).attrs({
  as: 'label',
})``

const BaseHeading = styled(Base).attrs({
  as: 'h1',
})``

const BaseInput = styled(Base).attrs({
  as: 'input',
  type: 'text',
})``

export { BaseBox, BaseLabel, BaseButton, BaseHeading, BaseInput }

export default Base
