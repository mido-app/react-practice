import React from 'react'

export default class LazyComponent extends React.Component {
  render () {
    return (
      <div>This component is lazy loaded!!!</div>
    )
  }
}