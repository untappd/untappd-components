import React from 'react'
import ReactDOM from 'react-dom'
import { DefaultTheme } from '@untappd/components'

import './index.css'
import App from './App'

ReactDOM.render(
  <DefaultTheme>
    <App />
  </DefaultTheme>,
  document.getElementById('root'),
)
