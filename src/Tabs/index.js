import styled from 'styled-components'
import { themeGet } from 'styled-system'

import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs'

import { getHeight, getColor, px } from '../utils'

const Tabs = styled(UnstyledTabs)``

const TabList = styled(UnstyledTabList)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${getColor('grays.2')};
`

const borderBottomWidth = '3px'

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'ut__selected',
  disabledClassName: 'ut__disabled',
})`
  ${px(7)};
  color: ${getColor('grays.4')};
  font-weight: ${themeGet('fontWeights.1')};
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  cursor: pointer;
  min-height: ${getHeight(9)};
  border-bottom: ${borderBottomWidth} solid transparent;
  padding-top: ${borderBottomWidth};

  &.ut__selected {
    color: ${getColor('black')};
    border-bottom: ${borderBottomWidth} solid ${getColor('brand')};
  }

  &.ut__disabled {
    color: ${getColor('grays.2')};
    cursor: not-allowed;
  }
`

const TabPanel = styled(UnstyledTabPanel).attrs({
  selectedClassName: 'ut__selected',
})`
  display: none;

  &.ut__selected {
    display: block;
  }
`

Tab.tabsRole = 'Tab'
Tabs.tabsRole = 'Tabs'
TabPanel.tabsRole = 'TabPanel'
TabList.tabsRole = 'TabList'

Tabs.Tab = Tab
Tabs.TabPanel = TabPanel
Tabs.TabList = TabList

export default Tabs
