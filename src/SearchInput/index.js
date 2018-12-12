import React from 'react'
import styled from 'styled-components'

import Base from '../Base'
import TextInput from '../TextInput'
import Icons from '../Icons'
import { getColor, getSpace } from '../utils'

const SearchWrapper = styled.div`
  position: relative;
`

const SearchInput = styled(TextInput).attrs({
  type: 'search',
  fontSize: 2,
})`
  text-indent: ${getSpace(8)};
`

const Icon = styled(Base)`
  position: absolute;
  border-right: 1px solid ${getColor('grays.2')};
  height: ${getSpace(5)};
  width: ${getSpace(8)};
  display: flex;
  justify-content: center;
  top: ${getSpace(2)};
`

export default function Input({ children, ...props }) {
  return (
    <SearchWrapper>
      <Icon>
        <Icons.Search />
      </Icon>
      <SearchInput {...props} />
    </SearchWrapper>
  )
}
