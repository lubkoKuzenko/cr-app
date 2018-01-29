import './style.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Button } from 'reactstrap';
import { validate } from './validation'

const renderField = ({ input, icon, placeholder, meta: { touched, error, warning } }) =>
<div>
  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
    <div class="input-group-addon"><i class={"fa " + icon }></i></div>
    <input {...input} type="text" class="form-control" placeholder={placeholder} />
  </div>
  {touched && ((error && <div class='invalid-feedback'> {error} </div>))}
</div>

let LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props
  const isValid = (valid) => { return valid ? 'form-horizontal' : 'form-horizontal was-validated' };
  
  return (<form onSubmit={handleSubmit} class={isValid()}>
    <div class="row">
      <div class="col-md-12">
        <h2>Please Login</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label class="sr-only" for="email">E-Mail Address</label>
          <Field icon="fa-at" component={renderField} id="email" name="email" placeholder="you@example.com" required />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label class="sr-only" for="password">Password</label>
          <Field icon="fa-key" component={renderField} id="password" name="password" placeholder="Password" minLength="6" required />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 mb-1">
        <Button type="submit" color="success" class="mr-1" disabled={pristine || submitting}><i class="fa fa-sign-in"></i> Login</Button>{' '}
      </div>
    </div>
  </form>)
}

export default reduxForm({
  form: 'login',       // a unique identifier for this form
  validate,            // validation function given to redux-form
})(LoginForm)