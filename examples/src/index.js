import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import styled from 'styled-components'

import {
  theme,
  utils,
  Alert,
  Autocomplete,
  Box,
  Button,
  Callout,
  Card,
  CloseButton,
  Column,
  DefaultTheme,
  Flex,
  FormLabel,
  Heading,
  HoverActions,
  Icons,
  Label,
  Link,
  List,
  ListItem,
  SideModal,
  Modal,
  Navbar,
  Right,
  Row,
  SearchInput,
  Select,
  AsyncSelect,
  Tabs,
  Text,
  TextInput,
  Toaster,
} from '@untappd/components'

import packageJSON from '../../package.json'

ReactModal.setAppElement('#root')

const ButtonExample = styled.div`
  ${Button} {
    ${utils.mr(2)};
    ${utils.mb(2)};
  }
`
function Example({ children, title, className }) {
  return (
    <Box mb={8} className={className}>
      <Heading fontSize={5} mb={5}>
        {title}
      </Heading>
      {children}
    </Box>
  )
}

function Color({ color }) {
  return <Box mr={3} size={96} bg={color} fontSize={2} mb={5} />
}

const ColumnWithColor = styled(Column)`
  &:nth-child(odd) {
    background-color: ${utils.getColor('grays.4')};
  }

  &:nth-child(even) {
    background-color: ${utils.getColor('grays.3')};
  }
`

ColumnWithColor.defaultProps = {
  p: 2,
  color: 'white',
  fontWeight: 1,
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const asyncOptions = [
  { value: 'amarillo', label: 'amarillo' },
  { value: 'citra', label: 'citra' },
  { value: 'cascade', label: 'cascade' },
  { value: 'el dorado', label: 'el dorade' },
  { value: 'mosaic', label: 'mosaic' },
  { value: 'motueka', label: 'motueka' },
]

const ITEMS = [
  { id: 1, heading: 'Miller Lite', info: 'Miller Brewing Company' },
  { id: 2, heading: 'Guinness Draught', info: 'Guinness' },
  { id: 3, heading: 'steez', info: 'New Anthem Beer Project' },
  { id: 4, heading: 'Neon God', info: 'New Anthem Beer Project' },
]

const filterAsyncOptions = inputValue => {
  if (inputValue) {
    return asyncOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    )
  }
  return asyncOptions
}

const loadAsyncOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterAsyncOptions(inputValue))
  }, 750)
}

class Examples extends Component {
  state = {
    isModalOpen: false,
    isFlexibleModalOpen: false,
    isLoading: false,
    items: ITEMS,
    asyncInputValue: '',
    selectedOption: null,
  }

  render() {
    const {
      isModalOpen,
      isFlexibleModalOpen,
      isLoading,
      selectedOption,
      asyncInputValue,
    } = this.state

    function handleAsyncInputChange(newValue) {
      const inputValue = newValue.replace(/\W/g, '')
      this.setState({
        asyncInputValue: inputValue,
      })
    }

    return (
      <>
        <Example title="Grid">
          <Heading mb={2} fontWeight={1} fontSize={3} zIndex={0}>
            Basic Grid
          </Heading>
          <Row mb={4} flexWrap="wrap">
            <ColumnWithColor width={[1 / 3]}>1 / 3</ColumnWithColor>
            <ColumnWithColor width={[1 / 3]}>1 / 3</ColumnWithColor>
            <ColumnWithColor width={[1 / 3]}>1 / 3</ColumnWithColor>
          </Row>

          <Heading mb={2} fontWeight={1} fontSize={3}>
            Flex box works (without flex-wrap)
          </Heading>
          <Row mb={4}>
            <ColumnWithColor width={1}>1</ColumnWithColor>
            <ColumnWithColor width={1}>1</ColumnWithColor>
            <ColumnWithColor width={1}>1</ColumnWithColor>
            <ColumnWithColor width={1}>1</ColumnWithColor>
            <ColumnWithColor width={1}>1</ColumnWithColor>
            <ColumnWithColor width={1}>1</ColumnWithColor>
          </Row>

          <Heading mb={2}>Responsive breakpoints</Heading>
          <Row mb={4} flexWrap="wrap" justifyContent="space-between">
            <ColumnWithColor width={[1, 1 / 6]}>1 / 6</ColumnWithColor>
            <ColumnWithColor width={[1, 1 / 6]}>1 / 6</ColumnWithColor>
            <ColumnWithColor width={[1, 1 / 6]}>1 / 6</ColumnWithColor>
            <ColumnWithColor width={[1, 3 / 6]}>3 / 6</ColumnWithColor>
          </Row>
        </Example>

        <Example title="Buttons">
          <ButtonExample>
            <Box my={3} mb={5}>
              <Button>Default</Button>
              <Button color="blue">Blue</Button>
              <Button color="red">Red</Button>
              <Button color="green">Green</Button>
              <Button
                minWidth={[100]}
                color="blue"
                isLoading={isLoading}
                disabled={isLoading}
                onClick={() => {
                  this.setState({
                    isLoading: true,
                  })
                  setTimeout(() => {
                    this.setState({
                      isLoading: false,
                    })
                  }, 2000)
                }}
              >
                API Call
              </Button>
              <Button iconBefore={<Icons.Close />}>Button Icon</Button>
              <Button color="clear">Clear Button</Button>
              <Button color="clear" iconBefore={<Icons.Close />}>
                Clear Button Icon
              </Button>
            </Box>
            <Box mb={4}>
              <Button size="small">Small Button</Button>
              <Button size="large">Large Button</Button>
              <Button
                minWidth={[120]}
                color="blue"
                size="large"
                isLoading={isLoading}
              >
                Large Button
              </Button>
            </Box>
            <Box width={[1]}>
              <Button color="blue" expand>
                Expanded
              </Button>
            </Box>
            <Link href="/">A Cool Link</Link>
            <br />
            <br />
            <Button href="/">A Cool Link</Button>
            <Button href="/" color="blue">
              A Cool Link
            </Button>
            <CloseButton />
          </ButtonExample>
        </Example>

        <Example title="Colors">
          <Flex flexDirection="row" flexWrap="wrap">
            {Object.keys(theme.colors).map(key =>
              Array.isArray(theme.colors[key]) ? (
                Object.keys(theme.colors[key]).map(k => (
                  <Color key={k} color={theme.colors[key][k]} />
                ))
              ) : (
                <Color key={key} color={key} />
              ),
            )}
          </Flex>
        </Example>

        <Example title="Alert">
          <Alert title="Title of Alert" mb={3} onRemove={() => alert('Close')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Alert>

          <Alert
            title="Title of Alert"
            color="blue"
            hasIcon
            mb={3}
            onRemove={() => alert('Close')}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Alert>

          <Alert title="Title of Alert" hasIcon color="green" mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Alert>

          <Alert title="Title of Alert" hasIcon color="red" mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliquaa
          </Alert>
          <Box width={1 / 6}>
            <Alert
              title="Title of Alert"
              color="blue"
              mb={3}
              hasIcon
              onRemove={() => alert('Close')}
            />
          </Box>
          <Alert title="Title of Alert" color="brand" mb={3} />

          <Alert color="blue" mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Alert>
        </Example>

        <Example title="Callouts">
          <Callout color="red">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Callout>
        </Example>

        <Example title="Inputs">
          <FormLabel htmlFor="text-input">Text Input</FormLabel>
          <TextInput id="text-input" defaultValue="<TextInput />" />
          <br />

          <TextInput disabled defaultValue="Disabled Text Input" />
          <br />

          <TextInput size="large" defaultValue="Large Input" />
          <br />

          <FormLabel htmlFor="email-input">Email Input</FormLabel>
          <TextInput
            id="email-input"
            defaultValue="cool@cool.com"
            type="email"
          />
          <br />

          <FormLabel>Form Error</FormLabel>
          <TextInput
            id="email-input"
            defaultValue="cool@cool.com"
            type="email"
            error="Error validating something"
          />
          <br />

          <FormLabel htmlFor="search-input">Search Input</FormLabel>
          <SearchInput id="search-input" defaultValue="A Search Term" />
          <br />

          <FormLabel htmlFor="select-box">Async Select Box</FormLabel>
          <AsyncSelect
            isClearable
            id="select-box"
            loadOptions={loadAsyncOptions}
            onInputChange={this.handleAsyncInputChange}
          />
          <br />

          <FormLabel htmlFor="select-box">Select Box</FormLabel>
          <Select
            id="select-box"
            value={selectedOption}
            options={options}
            onChange={value => {
              this.setState({
                selectedOption: value,
              })
            }}
          />

          <Text mt={1}>
            See <Link href="https://react-select.com/">React Select</Link> for
            documentation
          </Text>
        </Example>

        <Example title="Headings">
          <Heading mb={3}>Default</Heading>
          <Heading uppercase fontSize={0}>
            Uppercase
          </Heading>
        </Example>

        <Example title="Autocomplete">
          <Autocomplete
            onInputValueChange={value => {
              if (value.length >= 3) {
                this.setState({
                  items: this.state.items.slice(0, 2),
                })
              }

              if (value.length === 0) {
                this.setState({
                  items: ITEMS,
                })
              }
            }}
            items={this.state.items}
            label="Search For Something"
            placeholder="Please search for a fruit"
            onChange={selection => alert(`You selected ${selection.heading}`)}
            itemToString={item => (item ? item.heading : '')}
            infoRender={
              <ListItem py={3} bg="white" minHeight={0}>
                Powered By Untappd
              </ListItem>
            }
          />
        </Example>

        <Example title="Icons">
          <Icons.Disclosure />
          <Icons.Close />
          <Icons.CloseCircle />
          <Icons.Search />
          <Icons.Trashcan />
        </Example>

        <Example title="Cards">
          <Card mb={5}>
            <Card.Header>
              <Heading>Header</Heading>
            </Card.Header>

            <Card.Content>
              Basic card. Headers and Footers have heights and flex box already
              applied so you can add buttons, labels and icons easily.
            </Card.Content>
          </Card>

          <Card mb={5}>
            <Card.Header>
              <Heading>Card With Single Button</Heading>
              <Button type="secondary">Button</Button>
            </Card.Header>

            <Card.Content>
              For a single button you aren't required to wrap the button with
              any div!
            </Card.Content>
          </Card>

          <Card mb={5}>
            <Card.Header>
              <Heading>Card With Multiple Buttons</Heading>
              <Box>
                <Button mr={2}>Edit</Button>
                <Button color="red">Delete</Button>
              </Box>
            </Card.Header>
            <Card.Content>
              For multiple buttons, wrap the buttons in a Box or Flex component.
              Use the margin utilities to give some space based on the space
              definitions.
            </Card.Content>

            <Card.Footer>
              <Flex width={[1, 1 / 2]} flexDirection="column">
                <Text>
                  This is a footer. Somewhat complicated layouts with buttons
                  and text should be easily achievable with just the Flex
                  component and changing flex properties. No custom css should
                  be required.
                </Text>
                <br />
                <Text>
                  This is some random gnarly paragraph thing that Ryan will
                  probably design at some point, but it's all good because we
                  didn't need to write any css for it.
                </Text>
              </Flex>
              <Flex alignSelf="self-start">
                <Button mr={2} iconBefore={<Icons.Search />}>
                  Help
                </Button>
                <Button mr={2}>Previous</Button>
                <Button>Next</Button>
              </Flex>
            </Card.Footer>
          </Card>

          <Flex justifyContent="center" mt={5}>
            <Box width={[1, 1 / 2]}>
              <Card mb={2}>
                <Card.Header>
                  <Card.Stacked>
                    <Heading mb={4}>Card With Instructions</Heading>
                    <Text color="grays.4">
                      Extra information about what is going on in the card.
                      Everything should be fine when the sentence runs just a
                      little too long.
                    </Text>
                  </Card.Stacked>
                </Card.Header>
                <Card.Content>
                  For a single button you aren't required to wrap the button
                  with any div!
                </Card.Content>
                <Card.Footer>
                  <Button color="blue" expand>
                    Continue And Verify
                  </Button>
                </Card.Footer>
              </Card>
            </Box>
          </Flex>
        </Example>

        <Example title="Lists">
          <Card>
            <List>
              <ListItem
                onClick={() => {
                  alert('On Click')
                }}
              >
                <ListItem.Content>
                  <ListItem.Heading>Event Name</ListItem.Heading>
                  <ListItem.Info>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </ListItem.Info>
                </ListItem.Content>
                <ListItem.Actions>
                  <HoverActions
                    onClick={ev => {
                      ev.stopPropagation()
                      alert('Edit')
                    }}
                  >
                    <Button type="white">Edit</Button>
                  </HoverActions>
                </ListItem.Actions>
                <ListItem.Right ml={3}>
                  <Icons.Disclosure />
                </ListItem.Right>
              </ListItem>
              <ListItem onClick={() => {}}>
                <ListItem.Content>
                  <ListItem.Heading>Event Name</ListItem.Heading>
                  <ListItem.Info>Info</ListItem.Info>
                </ListItem.Content>
                <ListItem.Actions>
                  <HoverActions>Hover State</HoverActions>
                </ListItem.Actions>
                <ListItem.Right ml={3}>
                  <Icons.Disclosure />
                </ListItem.Right>
              </ListItem>
              <ListItem onClick={() => {}}>
                <ListItem.Content>
                  <ListItem.Heading>Event Name</ListItem.Heading>
                </ListItem.Content>
                <ListItem.Actions>
                  <HoverActions>Hover State</HoverActions>
                </ListItem.Actions>
                <ListItem.Right ml={3}>
                  <Icons.Disclosure />
                </ListItem.Right>
              </ListItem>
              {[...Array(3).keys()].map(key => (
                <ListItem key={key}>
                  <ListItem.Content>
                    <ListItem.Heading>Event Name {key + 1}</ListItem.Heading>
                    <ListItem.Info>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </ListItem.Info>
                  </ListItem.Content>
                </ListItem>
              ))}
            </List>
          </Card>
          <br />

          <Card>
            <Card.Header>
              <Heading>Card With List Items</Heading>
            </Card.Header>
            <List>
              {[...Array(3).keys()].map(key => (
                <ListItem key={key}>
                  <ListItem.Content>
                    <ListItem.Heading>Event Name {key + 1}</ListItem.Heading>
                    <ListItem.Info>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </ListItem.Info>
                  </ListItem.Content>
                </ListItem>
              ))}
            </List>
          </Card>

          <br />

          <ListItem bg="grays.1" borderRadius={0}>
            <ListItem.Content>
              <ListItem.Heading>Example</ListItem.Heading>
              <ListItem.Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </ListItem.Info>
            </ListItem.Content>
            <ListItem.Right>
              <Icons.CloseCircle />
            </ListItem.Right>
          </ListItem>
        </Example>

        <Example title="Non-Hover List with No Arrow">
          <Card>
            <List>
              {[...Array(5).keys()].map(key => (
                <ListItem key={key}>
                  <ListItem.Content>
                    <ListItem.Heading>Event Name {key + 1}</ListItem.Heading>
                  </ListItem.Content>
                </ListItem>
              ))}
            </List>
          </Card>
        </Example>

        <Example title="Tabs">
          <Text mb={1}>
            See{' '}
            <Link href="http://reactcommunity.org/react-tabs/">React Tabs</Link>{' '}
            for documentation
          </Text>

          <Card>
            <Tabs>
              <Tabs.TabList>
                <Tabs.Tab>Upcoming Events</Tabs.Tab>
                <Tabs.Tab>Events In Progress</Tabs.Tab>
                <Tabs.Tab>Past Events</Tabs.Tab>
              </Tabs.TabList>

              <Tabs.TabPanel>
                <List>
                  {[...Array(3).keys()].map(key => (
                    <ListItem key={key}>
                      <ListItem.Content>
                        <ListItem.Heading>
                          Event Name {key + 1}
                        </ListItem.Heading>
                        <ListItem.Info>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </ListItem.Info>
                      </ListItem.Content>
                    </ListItem>
                  ))}
                </List>
              </Tabs.TabPanel>

              <Tabs.TabPanel>
                <Card.Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Card.Content>
              </Tabs.TabPanel>

              <Tabs.TabPanel>
                <Card.Content>Content 3</Card.Content>
              </Tabs.TabPanel>
            </Tabs>
          </Card>
        </Example>

        <Example title="Modal">
          <Button
            mr={2}
            type="white"
            onClick={() => {
              this.setState(({ isFlexibleModalOpen }) => ({
                isFlexibleModalOpen: !isFlexibleModalOpen,
              }))
            }}
          >
            Open Modal
          </Button>

          <Modal
            title="Modal"
            isOpen={isFlexibleModalOpen}
            onRequestClose={() => {
              this.setState(({ isFlexibleModalOpen }) => ({
                isFlexibleModalOpen: !isFlexibleModalOpen,
              }))
            }}
          >
            <Card.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Card.Content>
          </Modal>

          <Button
            type="white"
            onClick={() => {
              this.setState(({ isModalOpen }) => ({
                isModalOpen: !isModalOpen,
              }))
            }}
          >
            Open Side Modal
          </Button>

          <SideModal
            title="Header"
            isOpen={isModalOpen}
            onRequestClose={() => {
              this.setState(({ isModalOpen }) => ({
                isModalOpen: !isModalOpen,
              }))
            }}
          >
            <Card.Content>A Modal</Card.Content>
          </SideModal>
        </Example>

        <Example title="Toaster">
          <Button onClick={() => Toaster.blue('A blue message')} mr={2}>
            Show Blue
          </Button>
          <Button
            mr={2}
            onClick={() =>
              Toaster.green('Green toaster notification', {
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit`,
              })
            }
          >
            Show Green
          </Button>
          <Button
            mr={2}
            onClick={() =>
              Toaster.red('Red toaster notification', {
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit`,
              })
            }
          >
            Show Red
          </Button>
        </Example>

        <Example title="Navbar">
          <Box borderTop="2px solid" borderColor="grays.2" mx={-6} mb={10}>
            <Navbar>
              <Navbar.Content>
                <Heading mr={5}>Marketplace</Heading>
                <Flex flex="1">
                  <Navbar.Nav>
                    <Navbar.NavItem active>
                      <Link href="/">Dashboard</Link>
                    </Navbar.NavItem>
                    <Navbar.NavItem>
                      <Link href="/">Analytics</Link>
                    </Navbar.NavItem>
                    <Navbar.NavItem>
                      <Link href="/">Checkins</Link>
                    </Navbar.NavItem>
                  </Navbar.Nav>
                </Flex>
                <Heading fontSize={2}>Right Content</Heading>
              </Navbar.Content>
            </Navbar>
          </Box>
        </Example>

        <Text>{packageJSON.version}</Text>
      </>
    )
  }
}

ReactDOM.render(
  <DefaultTheme>
    <Examples />
  </DefaultTheme>,
  document.getElementById('root'),
)
