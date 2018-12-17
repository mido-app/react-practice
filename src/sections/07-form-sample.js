import React from 'react'

// form component
class FormComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    alert(`submit value ${this.state.value}`)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          { this.props.label } (={ this.state.value })
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
       </form>
    )
  }
}

// dropdown component
class FruitDropdownComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 'banana',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    alert(`selected value = ${this.state.value}`)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          { this.props.label } (={ this.state.value })
          <select value={this.state.value} onChange={this.handleChange}>
            {
              this.props.fruits.map(fruit => (
                <option value={fruit.key} key={fruit.key}>{ fruit.displayText }</option>
              ))
            }
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// component having multiple form
class MultiForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editable: false,
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    let value = event.target.name === 'editable' ? event.target.checked : event.target.value
    this.setState({
      [event.target.name]: value
    })
  }

  handleSubmit (event) {
    alert(`editable = ${this.state.editable}, text = ${this.state.text}`)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Editable (={ `${this.state.editable}` })
          <input name="editable"
                 type="checkbox"
                 checked={this.state.editable}
                 onChange={this.handleChange} />
        </label>
        <label>
          Number (={this.state.text})
          {
            this.state.editable ? (
              <input name="text"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange} />
            ) : (
              <input name="text"
                     type="text"
                     value={this.state.text}
                     readOnly />
            )
          }
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default class FormSampleSection extends React.Component {
  render () {
    const fruits = [
      {
        key: 'apple',
        displayText: 'リンゴ'
      },
      {
        key: 'banana',
        displayText: 'バナナ'
      },
      {
        key: 'melon',
        displayText: 'メロン'
      }
    ]
    
    return (
      <div>
        <h2>Form Samples</h2>
        <FormComponent label="Title" />
        <FruitDropdownComponent label="Favorite Fruits" fruits={fruits} />
        <MultiForm />
      </div>
    )
  }
}
