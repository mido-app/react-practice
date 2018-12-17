import React from 'react'

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

export default class JSXSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>JSX Samples</h2>
        { getMessageJSX() }
        <p>{ injection }</p>
      </div>
    )
  }
}
