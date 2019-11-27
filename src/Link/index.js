import styled from 'styled-components'
import css from '@styled-system/css'

import Base from '../Base'

const BaseLink = styled(Base).attrs({ as: 'a' })``

const Link = styled(BaseLink)(
  css({
    textDecoration: 'none',

    '&:hover': {
      color: 'darkBlue',
    },
  }),
)

Link.defaultProps = {
  fontWeight: 1,
  color: 'blue',
}

export default Link
