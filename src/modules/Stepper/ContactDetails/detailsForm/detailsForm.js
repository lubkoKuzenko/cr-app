import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate } from './detailsForm.validation'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) =>
    <div>
        <input {...input} class="form-control" placeholder={label} type={type} />
        {touched && ((error && <div class='invalid-feedback'> {error} </div>))}
    </div>

let DetailsForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    const isValid = (valid) => { return valid ? 'w-100' : 'w-100 was-validated' };

    const reserFormHandler = () => {
        reset();
        props.jumpToStep(0)
    }

    return (
        <div class="p-3 d-flex justify-content-center">
            <form onSubmit={handleSubmit} class={isValid()}>
                <div class="w-50 pull-left padding-gap">
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
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <Field component={renderField} name="phoneNumber" type="text" placeholder="Phone Number" />
                    </div>
                </div>

                <div class="w-50 pull-right padding-gap">
                    <div class="form-group">
                        <label for="country">Country</label>
                        <Field component={renderField} name="country" type="text" placeholder="Country" />
                    </div>
                    <div class="form-group">
                        <label for="streetaddress">Street Address</label>
                        <Field component={renderField} name="streetaddress" type="text" placeholder="Street Address" />
                    </div>
                    <div class="form-group">
                        <label for="city">City</label>
                        <Field component={renderField} name="city" type="text" placeholder="City" />
                    </div>
                    <div class="form-group">
                        <label for="zip">Zip Code</label>
                        <Field component={renderField} name="zip" type="text" placeholder="Zip Code" />
                    </div>
                </div>

                <div class="w-100 clearfix pull-left">
                    <button type="submit" class="btn btn-prev btn-primary btn-lg pull-right" disabled={pristine || submitting}>Continue</button>
                    <a class="btn btn-prev btn-link btn-lg pull-left" disabled={pristine || submitting} onClick={reserFormHandler} >Return to choose your plan</a>
                </div>
            </form>
        </div>
    )
}
export default reduxForm({
    form: 'details',       // a unique identifier for this form
    validate,              // validation function given to redux-form
})(DetailsForm)