import styled, { css } from 'styled-components'

import { BaseBox } from '../Base'
import HoverActions from '../HoverActions'

const hover = css`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  & ${HoverActions} {
    display: block;
  }
`

const ListItem = styled(BaseBox)`
  transition: box-shadow 0.1s;

  &:hover {
    ${({ onClick }) => typeof onClick !== 'undefined' && hover};
  }
`

ListItem.defaultProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: 4,
  px: 5,
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

const Content = styled(BaseBox)``

Content.defaultProps = {
  name: 'Content',
  flex: 1,
}

const Actions = styled(BaseBox)`
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

export default ListItem
