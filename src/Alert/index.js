import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'

import { BaseBox } from '../Base'
import { Flex } from '../Grid'
import Icons from '../Icons'
import ListItem from '../ListItem'

const colorVariants = variant({
  variants: {
    red: {
      borderLeftColor: 'red',
    },
    brand: {
      borderLeftColor: 'brand',
    },

    blue: {
      borderLeftColor: 'blue',
    },

    green: {
      borderLeftColor: 'green',
    },
  },
})

const listItemSpacing = css({
  'ListItem.Heading + ListItem.Info': {
    paddingTop: 'xSmall',
  },
})

const StyledAlert = styled(BaseBox)(
  css({
    color: 'black',
    backgroundColor: 'white',
    borderLeftWidth: '3px',
    pointerEvents: 'all',
    listItemSpacing,
    '&:hover': {},
  }),
  colorVariants,
)

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

const AlertButton = styled.div(
  css({
    whiteSpace: 'nowrap',
    appearance: 'none',
    maxWidth: '100%',
    verticalAlign: 'middle',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'medium',
    height: 'medium',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: 'grays.0',
    },
  }),
)

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
  const closeIconPadding = onRemove ? '0' : '24px'

  return (
    <StyledAlert variant={color} {...props}>
      <Wrapper>
        {hasIcon && (
          <IconContainer py={4} pl={5} ml={-2}>
            {icon[color]}
          </IconContainer>
        )}

        <ListItem.Content
          paddingLeft={iconPadding}
          paddingRight={closeIconPadding}
          alignSelf="flex-start"
        >
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
