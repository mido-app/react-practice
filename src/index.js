import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import each section
import JSXSampleSection from './sections/01-jsx-sample'
import ComponentsSampleSection from './sections/02-components-sample'
import StateAndLifecycleSampleSection from './sections/03-state-and-lifecycle-sample'
import EventHandlingSampleSection from './sections/04-event-handling-sample'
import ConditionalRenderingSampleSection from './sections/05-conditional-rendering-sample'
import LoopSampleSection from './sections/06-loop-sample'
import FormSampleSection from './sections/07-form-sample'
import LiftingStateUpSampleSection from './sections/08-lifting-state-up-sample'
import JSXPropSampleSection from './sections/09-jsx-prop-sample'
import DynamicImportSampleSection from './sections/10-dynamic-import-sample'

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
        <DynamicImportSampleSection />
      </div> 
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
