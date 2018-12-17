import React from 'react'

// component having event handling
class ClickCounter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count1: 0,
      count2: 0
    }

    // we have to bind 'this' to  class functions (or use allow function to declear functions)
    // if not, 'this' does not indicate Component instance
    this.increment = this.increment.bind(this)
    this.countUp = this.countUp.bind(this)
  }

  render () {
    return (
      <div>
        <button onClick={this.increment}>count1 = { this.state.count1 }</button>
        <button onClick={() => this.countUp(2)}>count2 = { this.state.count2 }</button>
      </div>
    )
  }

  increment () {
    this.setState((state) => ({
      count1: state.count1 + 1
    }))
  }

  countUp (amount) {
    this.setState((state) => ({
      count2: state.count2 + amount
    }))
  }
}

export default class EventHandlingSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>Event Handling Samples</h2>
        <ClickCounter />
      </div>
    )
  }
}
