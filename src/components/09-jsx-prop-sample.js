import React from 'react'

// single JSX prop example
const redBlockStyle = {
  backgroundColor: 'red'
}

const blueBlockStyle = {
  backgroundColor: 'blue'
}

class RedBlock extends React.Component {
  render () {
    return (
      <div style={redBlockStyle} >
        { this.props.children }
      </div>
    )
  }
}

// multi JSX prop example
class RedAndBlueBlock extends React.Component {
  render () {
    return (
      <div>
        <div style={redBlockStyle}>{ this.props.red }</div>
        <div style={blueBlockStyle}>{ this.props.blue }</div>
      </div>
    )
  }
}

export default class JSXPropSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>JSX prop Samples</h2>
        <RedBlock>
          <span>This is red back!!!</span>
        </RedBlock>
        <RedAndBlueBlock 
          red={<span>This is red back!!!!!</span>}
          blue={<span>This is blue back!!!!!</span>} />
      </div>
    )
  }
}
