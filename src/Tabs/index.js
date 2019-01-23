import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs'

import { getSpace, getColor } from '../utils'

const Tabs = styled(UnstyledTabs)`
  /*  border: 1px solid #e0e0e0;
  background: white;*/
`

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
  text-align: center;
  list-style: none;
  cursor: pointer;

  padding: ${getSpace(4)} ${getSpace(8)};
  border-bottom: ${borderBottomWidth} solid transparent;
  margin-top: ${borderBottomWidth};

  &.ut__selected {
    font-weight: ${themeGet('fontWeights.1')};
    border-bottom: ${borderBottomWidth} solid ${getColor('brand')};
  }

  &.ut__disabled {
    color: #e0e0e0;
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
