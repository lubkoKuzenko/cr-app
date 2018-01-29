import React, { Component } from 'react'
import SimpleForm from './simpleForm/simple'

export default class Forms extends Component {
  submit(values) {
    console.log(values)
  }

  render() {
    return <div>
      <h2>React Forms</h2>
      <SimpleForm onSubmit={this.submit} />
    </div>
  }
}