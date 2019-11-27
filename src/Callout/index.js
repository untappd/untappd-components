import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'

import { BaseBox } from '../Base'

const colorVariants = variant({
  prop: 'color',
  variants: {
    red: {
      borderColor: 'red',
      backgroundColor: 'lightRed',
    },

    yellow: {
      borderColor: 'yellow',
      backgroundColor: 'lightYellow',
    },

    green: {
      borderColor: 'green',
      backgroundColor: 'lightGreen',
    },
  },
})

const Callout = styled(BaseBox)(
  css({
    color: 'black',
  }),
  colorVariants,
)

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
