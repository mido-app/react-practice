import React from 'react'

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

export default class ComponentsSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>Component Samples</h2>
        <FunctionComponent title="Function Components" message="Components made by JavaScript function called 'Function Components'" />
        <ClassComponent title="Class Components" message="Components made by JavaScript class called 'Class Components'" />
      </div>
    )
  }
}
