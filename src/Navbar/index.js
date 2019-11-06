import styled, { css } from 'styled-components'

import { BaseBox } from '../Base'
import Link from '../Link'
import { getColor, getSpace, getHeight } from '../utils'

const NAVBAR_HEIGHT = 12 // Pulled from theme (80px currently)

const Navbar = styled(BaseBox)`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
`

Navbar.defaultProps = {
  height: NAVBAR_HEIGHT,
  display: 'flex',
  bg: 'white',
}

const Content = styled(BaseBox)``

Content.defaultProps = {
  p: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}

const activeItem = ({ active }) =>
  active &&
  css`
    border-bottom: 4px solid ${getColor('brandDark')};
  `

const activeLink = ({ active }) =>
  active &&
  css`
    font-weight: 700;
    color: ${getColor('black')};
  `

const NavItemBase = styled(BaseBox).attrs({ as: 'li' })``

Navbar.NavItem = styled(NavItemBase)`
  margin-right: ${getSpace(3)};
  height: ${getHeight(NAVBAR_HEIGHT)};
  display: flex;
  align-items: center;
  border-bottom: 4px solid transparent;

  ${activeItem};

  ${Link} {
    margin-top: ${getSpace(1)};
    padding-left: ${getSpace(3)};
    padding-right: ${getSpace(3)};
    height: ${getHeight(NAVBAR_HEIGHT)};
    color: 'grays.4';
    display: flex;
    align-items: center;

    ${activeLink};
  }
`

Navbar.Nav = styled(BaseBox).attrs({ as: 'ul' })`
  list-style-type: none;
  display: inline-flex;
  align-items: center;
`

Navbar.Content = Content

export default Navbar
