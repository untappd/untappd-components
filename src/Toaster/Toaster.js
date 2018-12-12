import React from 'react'
import ReactDOM from 'react-dom'
import ToastManager from './ToastManager'
import DefaultTheme from '../DefaultTheme'

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'

/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */
export default class Toaster {
  constructor() {
    if (!isBrowser) return

    const container = document.createElement('div')
    container.setAttribute('data-untappd-toaster-container', '')
    document.body.appendChild(container)

    ReactDOM.render(
      <DefaultTheme>
        <ToastManager
          bindNotify={this.bindNotify}
          bindGetToasts={this.bindGetToasts}
          bindCloseAll={this.bindCloseAll}
        />
      </DefaultTheme>,
      container,
    )
  }

  bindNotify = handler => {
    this.notifyHandler = handler
  }

  bindGetToasts = handler => {
    this.getToastsHandler = handler
  }

  bindCloseAll = handler => {
    this.closeAllHandler = handler
  }

  getToasts = () => this.getToastsHandler()

  closeAll = () => this.closeAllHandler()

  green = (title, settings = {}) =>
    this.notifyHandler(title, { ...settings, color: 'green' })

  blue = (title, settings = {}) =>
    this.notifyHandler(title, { ...settings, color: 'blue' })

  red = (title, settings = {}) =>
    this.notifyHandler(title, { ...settings, color: 'red' })
}
