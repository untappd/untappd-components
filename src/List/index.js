import styled from 'styled-components'

import { getColor } from '../utils'
import Base from '../Base'
import ListItem from '../ListItem'

const List = styled(Base)`
  ${ListItem}:not(:first-child) {
    border-top: 1px solid ${getColor('grays.1')};
  }
`

export default List
