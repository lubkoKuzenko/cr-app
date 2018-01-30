import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './simpleForm.style.css'

import { Button } from 'reactstrap';
import { validate } from './loginForm.validation'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) =>
  <div>
    <input {...input} class="form-control" placeholder={label} type={type} />
    {touched && ((error && <div class='invalid-feedback'> {error} </div>))}
  </div>

let SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  const isValid = (valid) => { return valid ? 'w-50' : 'w-50 was-validated' };

  return (
    <div class="p-3 d-flex justify-content-center">
      <form onSubmit={handleSubmit} class={isValid()}>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <Field component={renderField} name="firstName" type="text" placeholder="First Name" />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <Field component={renderField} name="lastName" type="text" placeholder="Last Name" />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <Field component={renderField} name="email" id="email" type="email" placeholder="Enter Email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <hr />
        <div>
          <Button type="submit" color="primary" class="mr-1" disabled={pristine || submitting}>Submit</Button>{' '}
          <Button color="secondary" class="ml-1" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>{' '}
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'simple',       // a unique identifier for this form
  validate,             // validation function given to redux-form
})(SimpleForm)