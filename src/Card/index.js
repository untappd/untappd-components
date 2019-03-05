import styled from 'styled-components'

import { BaseBox } from '../Base'

const Card = styled(BaseBox)``

Card.defaultProps = {
  flex: 1,
  bg: 'white',
  boxShadow: 0,
  borderRadius: 0,
}

const Header = styled(BaseBox)``

Header.defaultProps = {
  borderBottom: '1px solid',
  borderColor: 'grays.2',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 5,
  minHeight: 11,
}

const Content = styled(BaseBox)``

Content.defaultProps = {
  p: 5,
  lineHeight: 0,
}

const Footer = styled(BaseBox)``

Footer.defaultProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid',
  borderColor: 'grays.2',
  px: 5,
  py: 5,
  minHeight: 12,
}

const Stacked = styled(BaseBox)``

Stacked.defaultProps = {
  py: 5,
}

Card.Header = Header
Card.Content = Content
Card.Footer = Footer
Card.Stacked = Stacked

export default Card
