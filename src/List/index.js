import styled from 'styled-components'
import css from '@styled-system/css'

import { getColor } from '../utils'
import Base from '../Base'
import ListItem from '../ListItem'

const List = styled(Base)`
  ${ListItem}:not(:first-child) {
    border-top: 1px solid ${getColor('grays.1')};
  }
`

// const List = styled(Base)(
//   css({
//     '${ListItem}:not(:first-child)': {
//       borderTopStyle: 'solid',
//       borderTopWidth: '1px',
//       borderTopColor: 'grays.1',
//     },
//   }),
// )

export default List
