import React from 'react'
import Downshift from 'downshift'
import { withTheme } from 'styled-components'

import List from '../List'
import Card from '../Card'
import ListItem from '../ListItem'
import SearchInput from '../SearchInput'
import FormLabel from '../FormLabel'

const Items = withTheme(
  ({ items, theme, getItemProps, highlightedIndex, renderItem }) =>
    items.map((item, index) => (
      <ListItem
        {...getItemProps({
          key: item.id,
          index,
          item,
          style: {
            backgroundColor:
              highlightedIndex === index
                ? theme.colors.grays[0]
                : theme.colors.white,
          },
        })}
      >
        {renderItem ? (
          renderItem(item)
        ) : (
          <ListItem.Content>
            <ListItem.Heading>{item.heading}</ListItem.Heading>
            <ListItem.Info>{item.info}</ListItem.Info>
          </ListItem.Content>
        )}
      </ListItem>
    )),
)

function Autocomplete({
  items,
  label,
  placeholder,
  renderItem,
  infoRender,
  theme,
  onBlur,
  ...props
}) {
  return (
    <Downshift {...props}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
      }) => (
        <div style={{ position: 'relative' }}>
          {label && <FormLabel {...getLabelProps()}>{label}</FormLabel>}

          <SearchInput
            {...getInputProps({
              placeholder,
              onBlur,
            })}
          />

          {(() => {
            if (!isOpen) {
              return null
            }

            if (!inputValue) {
              return null
            }

            return (
              <Card
                mt={2}
                {...getMenuProps({
                  style: {
                    position: 'absolute',
                    width: '100%',
                    zIndex: theme.zIndex[0],
                  },
                })}
              >
                <List>
                  <Items
                    items={items}
                    getItemProps={getItemProps}
                    highlightedIndex={highlightedIndex}
                    renderItem={renderItem}
                  />

                  {infoRender && infoRender}
                </List>
              </Card>
            )
          })()}
        </div>
      )}
    </Downshift>
  )
}

export default withTheme(Autocomplete)
