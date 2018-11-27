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

// JSX
const render = () => { 
  const element = (
    <div>
      <h1>{ title }</h1>
      { getMessageJSX() }
      <p>{ injection }</p>
      <p>It is { new Date().toLocaleTimeString() } now.</p>
    </div>    
  )

  // React elements are immutable
  // So we have to replace elements to change the page
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(render, 1000)
