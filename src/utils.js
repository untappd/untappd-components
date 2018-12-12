import { css } from 'styled-components'
import { themeGet } from 'styled-system'

const unit = 'px'

export const getSpace = space => props =>
  themeGet(`space.${space}`)(props) + unit

export const getColor = color => themeGet(`colors.${color}`)

export const getHeight = height => props =>
  themeGet(`heights.${height}`)(props) + unit

export const getBreakpoint = breakpoint => props =>
  themeGet(`breakpoints.${breakpoint}`)(props)

export const getFontSize = size => props =>
  themeGet(`fontSizes.${size}`)(props) + unit

export const p = size => () => css`
  padding: ${getSpace(size)};
`

export const px = size => () => css`
  padding-left: ${getSpace(size)};
  padding-right: ${getSpace(size)};
`

export const py = size => () => css`
  padding-top: ${getSpace(size)};
  padding-bottom: ${getSpace(size)};
`

export const mb = size => () => css`
  margin-bottom: ${getSpace(size)};
`

export const mr = size => () => css`
  margin-right: ${getSpace(size)};
`

export const ml = size => () => css`
  margin-left: ${getSpace(size)};
`
