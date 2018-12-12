import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import GlobalStyle from './GlobalStyle'

export default function DefaultTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}
