import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Toast from './Toast'

const Wrapper = styled.div({
  maxWidth: 560,
  width: '100%',
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: 5,
})

const hasCustomId = settings => Object.hasOwnProperty.call(settings, 'id')

export default class ToastManager extends React.PureComponent {
  static propTypes = {
    /**
     * Function called with the `this.notify` function.
     */
    bindNotify: PropTypes.func.isRequired,

    /**
     * Function called with the `this.getToasts` function.
     */
    bindGetToasts: PropTypes.func.isRequired,

    /**
     * Function called with the `this.closeAll` function.
     */
    bindCloseAll: PropTypes.func.isRequired,
  }

  static idCounter = 0

  constructor(props, context) {
    super(props, context)

    props.bindNotify(this.notify)
    props.bindGetToasts(this.getToasts)
    props.bindCloseAll(this.closeAll)

    this.state = {
      toasts: [],
    }
  }

  getToasts = () => {
    const { toasts } = this.state
    return toasts
  }

  closeAll = () => {
    this.getToasts().forEach(toast => toast.close())
  }

  notify = (title, settings) => {
    const { toasts } = this.state

    // If there's a custom toast ID passed, close existing toasts with the same custom ID
    if (hasCustomId(settings)) {
      // eslint-disable-next-line
      for (const toast of toasts) {
        // Since unique ID is still appended to a custom ID, skip the unique ID and check only prefix
        if (String(toast.id).startsWith(settings.id)) {
          this.closeToast(toast.id)
        }
      }
    }

    const instance = this.createToastInstance(title, settings)

    this.setState(previousState => ({
      toasts: [instance, ...previousState.toasts],
    }))

    return instance
  }

  createToastInstance = (title, settings) => {
    const uniqueId = ++ToastManager.idCounter // eslint-disable-line
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId

    return {
      id,
      title,
      description: settings.description,
      hasCloseButton: settings.hasCloseButton || true,
      duration: settings.duration || 5,
      close: () => this.closeToast(id),
      color: settings.color,
    }
  }

  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */
  closeToast = id => {
    this.setState(previousState => ({
      toasts: previousState.toasts.map(toast => {
        if (toast.id === id) {
          return {
            ...toast,
            isShown: false,
          }
        }
        return toast
      }),
    }))
  }

  removeToast = id => {
    this.setState(previousState => ({
      toasts: previousState.toasts.filter(toast => toast.id !== id),
    }))
  }

  render() {
    const { toasts } = this.state
    return (
      <Wrapper>
        {toasts.map(({ id, description, ...props }) => (
          <Toast key={id} onRemove={() => this.removeToast(id)} {...props}>
            {description}
          </Toast>
        ))}
      </Wrapper>
    )
  }
}
