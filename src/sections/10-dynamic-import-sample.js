import React, { Suspense } from 'react'
const LazyComponent = React.lazy(() => import('../components/lazy'))

export default class DynamicImportSampleSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.loadComponent = this.loadComponent.bind(this)
  }

  loadComponent () {
    this.setState({
      loaded: true
    })
  }

  render () {
    return (
      <div>
        <h2>Dynamic Import Samples</h2>
        {
          !this.state.loaded &&
          <button onClick={this.loadComponent}>Load Component</button>
        }
        {
          this.state.loaded &&
          <Suspense 
            fallback={
              <div>Loading...</div>
            }>
            <LazyComponent />
          </Suspense>
        }
      </div>
    )
  }
}
