import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import JSXSampleSection from './components/01-jsx-sample'
import ComponentsSampleSection from './components/02-components-sample'
import StateAndLifecycleSampleSection from './components/03-state-and-lifecycle-sample'
import EventHandlingSampleSection from './components/04-event-handling-sample'
import ConditionalRenderingSampleSection from './components/05-conditional-rendering-sample'
import LoopSampleSection from './components/06-loop-sample'
import FormSampleSection from './components/07-form-sample'
import LiftingStateUpSampleSection from './components/08-lifting-state-up-sample'
import JSXPropSampleSection from './components/09-jsx-prop-sample'

// We can embed variables to JSX
const title = 'Hello, world!'

// main component
class App extends React.Component {
  render () {
    return (
      <div>
        <h1>{ title }</h1>
        <JSXSampleSection />
        <ComponentsSampleSection />
        <StateAndLifecycleSampleSection />
        <EventHandlingSampleSection />
        <ConditionalRenderingSampleSection />
        <LoopSampleSection />
        <FormSampleSection />
        <LiftingStateUpSampleSection />
        <JSXPropSampleSection />
      </div> 
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
