import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Card from '../Card'

const BreadcrumbCard = styled(Card).attrs({
  mx: 8,
})(
  css({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'grays.0',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),
)

const Content = styled(Card.Content).attrs({ p: 3 })`
  text-align: center;
`

export default function Breadcrumb({ children }) {
  return (
    <BreadcrumbCard>
      <Content>{children}</Content>
    </BreadcrumbCard>
  )
}
