import React from 'react'
import styled from 'styled-components'

import Card from '../Card'
import { getColor } from '../utils'

const BreadcrumbCard = styled(Card).attrs({
  mx: 8,
})`
  border-bottom: 1px solid ${getColor('grays.0')};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

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
