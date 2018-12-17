import React from 'react'

// loop component
class OrderedList extends React.Component {
  render () {
    let elements = this.props.list.map((e, index) => <li key={ index }>{ e }</li>)
    return (
      <ol>
        { elements }
        {
          this.props.list.map(e => <li key={ e }>{ e }</li>)
        }
      </ol>
    )
  }
}

export default class LoopSampleSection extends React.Component {
  render () {
    return (
      <div>
        <h2>Loop Samples</h2>
        <OrderedList list={ [ 'apple', 'orange', 'melon' ] } />
      </div>
    )
  }
}