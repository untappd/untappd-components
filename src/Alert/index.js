import React from 'react'
import styled, { css } from 'styled-components'
import { themeGet } from 'styled-system'

import { BaseBox } from '../Base'
import { Flex } from '../Grid'
import Icons from '../Icons'
import ListItem from '../ListItem'
import { getSpace, getColor } from '../utils'

const colorVariants = ({ color, theme: { colors } }) =>
  ({
    red: {
      borderLeftColor: colors.red,
    },

    brand: {
      borderLeftColor: colors.brand,
    },

    blue: {
      borderLeftColor: colors.blue,
    },

    green: {
      borderLeftColor: colors.green,
    },
  }[color])

const listItemSpacing = css`
  ${ListItem.Heading} + ${ListItem.Info} {
    padding-top: ${getSpace(1)};
  }
`

const StyledAlert = styled(BaseBox)`
  color: ${getColor('black')};
  background-color: ${getColor('white')};
  border-left-width: 3px;
  pointer-events: all;
  ${colorVariants};
  ${listItemSpacing};

  &:hover {
  }
`

StyledAlert.defaultProps = {
  mb: 1,
  px: 0,
  lineHeight: 0,
  borderRadius: 0,
  border: '1px solid',
  borderColor: 'grays.2',
  backgroundColor: 'white',
  boxShadow: 1,
}

const AlertButton = styled.div`
  white-space: nowrap;
  appearance: none;
  max-width: 100%;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${getSpace(5)};
  height: ${getSpace(5)};
  border-radius: ${themeGet('radii.0')}px;

  &:hover {
    background-color: ${getColor('grays.0')};
  }
`

const Title = styled.div``

Title.defaultProps = {
  fontWeight: 1,
}

const Wrapper = styled(Flex)``

Wrapper.defaultProps = {
  display: 'flex',
  justifyContent: 'space-between',
}

const IconContainer = styled(Flex)``

export default function Alert({
  title,
  children,
  onRemove,
  hasIcon,
  color,
  ...props
}) {
  const icon = {
    green: <Icons.Checked />,
    red: <Icons.Alert />,
    blue: <Icons.Info />,
  }

  const iconPadding = hasIcon ? '12px' : '24px'

  return (
    <StyledAlert color={color} {...props}>
      <Wrapper>
        {hasIcon && (
          <IconContainer py={4} pl={5} ml={-2}>
            {icon[color]}
          </IconContainer>
        )}

        <ListItem.Content paddingLeft={iconPadding} alignSelf="flex-start">
          {title && <ListItem.Heading>{title}</ListItem.Heading>}
          {children && <ListItem.Info pt={0}>{children}</ListItem.Info>}
        </ListItem.Content>

        {onRemove && (
          <IconContainer py={4} pr={5} pl={3} mr={-2}>
            <AlertButton onClick={onRemove}>
              <Icons.Close style={{ height: 18, width: 18 }} />
            </AlertButton>
          </IconContainer>
        )}
      </Wrapper>
    </StyledAlert>
  )
}
