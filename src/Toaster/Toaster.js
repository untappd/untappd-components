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
          bindNotify={this._bindNotify}
          bindGetToasts={this._bindGetToasts}
          bindCloseAll={this._bindCloseAll}
        />
      </DefaultTheme>,
      container,
    )
  }

  _bindNotify = handler => {
    this.notifyHandler = handler
  }

  _bindGetToasts = handler => {
    this.getToastsHandler = handler
  }

  _bindCloseAll = handler => {
    this.closeAllHandler = handler
  }

  getToasts = () => this.getToastsHandler()

  closeAll = () => {
    return this.closeAllHandler()
  }

  green = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, color: 'green' })
  }

  blue = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, color: 'blue' })
  }

  red = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, color: 'red' })
  }
}
