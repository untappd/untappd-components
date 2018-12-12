import styled from 'styled-components'

import { BaseHeading } from '../Base'

const Heading = styled(BaseHeading)`
  ${({ uppercase }) => uppercase && `text-transform: uppercase`}
`

Heading.defaultProps = {
  m: 0,
  fontSize: 4,
  fontWeight: 1,
}

export default Heading
