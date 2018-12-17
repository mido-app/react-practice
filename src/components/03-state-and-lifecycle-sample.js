import React from 'react'

// component having states and lifecycle methods
class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date1: new Date(),
      date2: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick () {
    // setState method that passed next directly
    // you should not use previous state or props to calculate next value when you use this type of setState
    this.setState({
      date1: new Date()
    })

    // setState method that passed update function
    // you can use previous state or props to calculate next value
    this.setState((state) => {
      let nextSec = new Date(state.date2)
      nextSec.setSeconds(nextSec.getSeconds() + 1)
      return {
        date2: nextSec
      }
    })

    // state passed to setState was merged by React.js
    // so date1 and date2 are both updated in this example  
  }

  render () {
    return (
      <div>
        <p>It is { this.state.date1.toLocaleTimeString() } now.</p>
        <p>It is { this.state.date2.toLocaleTimeString() } now.</p>
      </div>
    )
  }
}

export default class StateAndLifecycleSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>State and Lifecycle Samples</h2>
        <Clock />
      </div>
      )
  }
}
