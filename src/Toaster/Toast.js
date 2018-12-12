import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import styled, { keyframes } from 'styled-components'

import Alert from '../Alert'

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)',
}

const ANIMATION_DURATION = 240

const openAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-120%);
  }

  to {
    transform: translateY(0);
  }
`

const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.9);
    opacity: 0;
  }
`

const ToasterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  transition: all ${ANIMATION_DURATION}ms ${animationEasing.deceleration};

  &[data-state='entering'],
  &[data-state='entered'] {
    animation: ${openAnimation} ${ANIMATION_DURATION}ms
      ${animationEasing.spring} both;
  }

  &[data-state='exiting'] {
    animation: ${closeAnimation} 120ms ${animationEasing.acceleration} both;
  }
`

export default class Toast extends React.PureComponent {
  static propTypes = {
    /**
     * Duration of the toast.
     */
    duration: PropTypes.number.isRequired,

    /**
     * Function called when the toast is all the way closed.
     */
    onRemove: PropTypes.func,

    /**
     * The type of the alert.
     */
    color: PropTypes.oneOf(['green', 'red', 'blue']).isRequired,

    /**
     * The title of the alert.
     */
    title: PropTypes.node,

    /**
     * Description of the alert.
     */
    children: PropTypes.node,

    /**
     * When false, will close the Toast and call onRemove when finished.
     */
    isShown: PropTypes.bool,
  }

  static defaultProps = {
    onRemove: null,
    title: null,
    children: null,
    isShown: false,
  }

  state = {
    isShown: true,
    height: 0,
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  componentDidUpdate(prevProps) {
    const { isShown } = this.props
    if (prevProps.isShown !== isShown) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        isShown,
      })
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer()
  }

  close = () => {
    this.clearCloseTimer()
    this.setState({
      isShown: false,
    })
  }

  startCloseTimer = () => {
    const { duration } = this.props

    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close()
      }, duration * 1000)
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  handleMouseEnter = () => {
    this.clearCloseTimer()
  }

  handleMouseLeave = () => {
    this.startCloseTimer()
  }

  onRef = ref => {
    if (ref === null) return

    const { height } = ref.getBoundingClientRect()

    this.setState({
      height,
    })
  }

  render() {
    const { isShown, height } = this.state
    const { onRemove, zIndex, color, title, children } = this.props

    return (
      <Transition
        appear
        unmountOnExit
        timeout={ANIMATION_DURATION}
        in={isShown}
        onExited={onRemove}
      >
        {state => (
          <ToasterContainer
            data-state={state}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{
              height,
              zIndex,
              marginBottom: isShown ? 0 : -height,
            }}
          >
            <div ref={this.onRef} style={{ padding: 8 }}>
              <Alert
                hasIcon
                color={color}
                title={title}
                onRemove={() => this.close()}
                pointerEvents="all"
              >
                {children}
              </Alert>
            </div>
          </ToasterContainer>
        )}
      </Transition>
    )
  }
}
