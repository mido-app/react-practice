import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// We can embed variables to JSX
const title = 'Hello, world!'

// JSX is expression
// so we can use is as return value of function
const getMessageJSX = () => {
  if(Math.random() >= 0.5) {
    return (<p>You are luckey today</p>)
  } else {
    return (<p>You are unluckey today</p>)
  }
}

// JSX prevents injection attacks
const injection = '<script>alert("Injection occured!!!")</script>'

// function component
function FunctionComponent (props) {
  return (
    <div>
      <h3>{ props.title }</h3>
      <p>{ props.message }</p>
    </div>
  )
}

// class component
class ClassComponent extends React.Component {
  render () {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.message }</p>
      </div>
    )
  }
}

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

// main components
class App extends React.Component {
  render () {
    return (
      <div>
        <h1>{ title }</h1>
        <div>
          <h2>JSX Samples</h2>
          { getMessageJSX() }
          <p>{ injection }</p>
        </div>
        <div>
          <h2>Component Samples</h2>
          <FunctionComponent title="Function Components" message="Components made by JavaScript function called 'Function Components'" />
          <ClassComponent title="Class Components" message="Components made by JavaScript class called 'Class Components'" />
        </div>
        <div>
          <h2>State and Lifecycle Samples</h2>
          <Clock />
        </div>
        <div>
          <h2>Event Handling Samples</h2>
          <ClickCounter />
        </div>
      </div> 
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
