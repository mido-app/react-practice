import React from 'react'

// lifting state up component
class PlusButton extends React.Component {
  render () {
    return (
      <button onClick={() => this.props.onNumChange(this.props.value + this.props.step)}>
        { this.props.value }+{ this.props.step }
      </button>
    )
  }
}

// lifting state up receiver component
class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0
    }
    this.onNumChange = this.onNumChange.bind(this)
  }

  onNumChange (newNum) {
    this.setState((state, props) => ({
      num: newNum
    }))
  }

  render () {
    return (
      <div>
        <div>current = { this.state.num }</div>
        <PlusButton step={1} value={this.state.num} onNumChange={this.onNumChange} />
        <PlusButton step={2} value={this.state.num} onNumChange={this.onNumChange} />
        <PlusButton step={3} value={this.state.num} onNumChange={this.onNumChange} />
      </div>
    )
  }
}

export default class LiftingStateUpSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>Lifting State Up Samples</h2>
        <Counter />
      </div>
    )
  }
}
