import styled from 'styled-components'

import Base from '../Base'
import { getColor } from '../utils'

const BaseLink = styled(Base).attrs({ as: 'a' })``

const Link = styled(BaseLink)`
  text-decoration: none;

  &:hover {
    color: ${getColor('darkBlue')};
  }
`

Link.defaultProps = {
  fontWeight: 1,
  color: 'blue',
}

export default Link
