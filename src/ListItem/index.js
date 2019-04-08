import styled, { css } from 'styled-components'

import { BaseBox } from '../Base'
import HoverActions from '../HoverActions'
import { getColor } from '../utils'

const hover = css`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
`

const px = 5
const py = 4

const ListItem = styled(BaseBox)`
  transition: box-shadow 0.1s;
  width: 100%;

  &:hover {
    & ${HoverActions} {
      display: block;
    }
    ${({ onClick }) => typeof onClick !== 'undefined' && hover};
  }
`

ListItem.defaultProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 66,
}

const Heading = styled(BaseBox)``

Heading.defaultProps = {
  fontSize: 2,
  fontWeight: 1,
}

const Info = styled(BaseBox)``

Info.defaultProps = {
  pt: 1,
  color: 'grays.4',
}

const Right = styled(BaseBox)``

Right.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  py,
  px,
}

const Left = styled(BaseBox)``

Left.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Column = styled(BaseBox)``

Column.defaultProps = {
  display: 'inline-block',
  alignItems: 'center',
  justifyContent: 'center',
}

const Link = styled(BaseBox)`
  &:hover {
    background-color: ${getColor('grays.0')};
  }
`

Link.defaultProps = {
  alignItems: 'center',
  borderColor: 'grays.2',
  borderLeft: '1px solid',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  px,
  py,
}

const Content = styled(BaseBox)`
  ${({ href, to }) =>
    (href || to) &&
    css`
      text-decoration: none;
      ${Heading}:hover {
        color: ${getColor('blue')};
      }
    `}
`

Content.defaultProps = {
  name: 'Content',
  flex: 1,
  py,
  px,
}

const Actions = styled(BaseBox).attrs({
  px,
  py,
})`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  > ${HoverActions}:only-child {
    margin-left: auto;
  }
`

ListItem.Heading = Heading
ListItem.Info = Info
ListItem.Content = Content
ListItem.Actions = Actions
ListItem.Right = Right
ListItem.Left = Left
ListItem.Column = Column
ListItem.Link = Link

export default ListItem
