import styled from 'styled-components'
import {
  themeGet,
  flexDirection,
  display,
  flex,
  alignItems,
  flexWrap,
  borderColor,
  borders,
  space,
  color,
  lineHeight,
  borderRadius,
  justifyItems,
  justifyContent,
  order,
  flexBasis,
  alignSelf,
  justifySelf,
  fontSize,
  fontWeight,
  width,
  minWidth,
  height,
  minHeight,
  boxShadow,
} from 'styled-system'

import zIndex from '../zIndex'
import { getColor } from '../utils'

const Base = styled.div(
  props => ({
    color: getColor('black')(props),
    fontFamily: themeGet('fonts.default')(props),
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  }),
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  borders,
  borderColor,
  borderRadius,
  display,
  width,
  minWidth,
  height,
  minHeight,
  zIndex,
  props => props.css,
)

const BaseBox = styled(Base)(
  flex,
  flexDirection,
  justifyContent,
  justifyItems,
  alignItems,
  flexBasis,
  order,
  flexWrap,
  boxShadow,
  alignSelf,
  justifySelf,
)

const BaseButton = styled(Base).attrs({
  as: 'button',
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
