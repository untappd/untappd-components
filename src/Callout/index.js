import styled from 'styled-components'

import { BaseBox } from '../Base'
import { getColor } from '../utils'

const colorVariants = ({ color, theme: { colors } }) =>
  ({
    red: {
      borderColor: colors.red,
      backgroundColor: colors.lightRed,
    },

    yellow: {
      borderColor: colors.yellow,
      backgroundColor: colors.lightYellow,
    },

    green: {
      borderColor: colors.green,
      backgroundColor: colors.lightGreen,
    },
  }[color])

const Callout = styled(BaseBox)`
  color: ${getColor('black')};
  ${colorVariants};
`

Callout.defaultProps = {
  mb: 5,
  px: 5,
  py: 4,
  lineHeight: 0,
  borderRadius: 0,
  border: '1px solid',
  borderColor: 'grays.2',
}

export default Callout
