import styled from 'styled-components'
import css from '@styled-system/css'

import { BaseHeading } from '../Base'

const Heading = styled(BaseHeading)(
  ({ uppercase }) =>
    uppercase &&
    css({
      textTransform: 'uppercase',
    }),
)

Heading.defaultProps = {
  fontSize: 4,
  fontWeight: 1,
}

export default Heading
