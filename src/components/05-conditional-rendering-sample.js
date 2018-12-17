import React from 'react'

// conditional component
class Switch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.switch = this.switch.bind(this)
  }

  render () {
    let message
    if (this.state.active) {
      message = <p>ON</p>
    } else {
      message = <p>OFF</p>
    }

    return (
      <div>
        { message }
        {
          this.state.active &&
          <p>This message is appear only when active state is true</p>
        }
        {
          this.state.active ?
          <p>This message is appear only when active state is true!!!</p> :
          <p>This message is appear only when active state is false!!!</p>
        }
        <button onClick={this.switch}>Switch!</button>
      </div>      
    )
  }

  switch () {
    this.setState(state => ({
      active: !state.active
    }))
  }
}

export default class ConditionalRenderingSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>Conditional Rendering Samples</h2>
        <Switch />
      </div>
    )
  }
}