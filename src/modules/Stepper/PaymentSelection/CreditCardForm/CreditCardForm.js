import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validate } from './CreditCardForm.validation'

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) =>
    <div>
        <input {...input} class="form-control" placeholder={placeholder} type={type} />
        {touched && ((error && <div class='invalid-feedback'> {error} </div>))}
    </div>

let PaymentForm = props => {
    const { handleSubmit, pristine, submitting } = props
    const isValid = (valid) => { return valid ? 'w-100 position-relative' : 'w-100 was-validated position-relative' };

    return (
        <div class="p-3 d-flex justify-content-center">
            <form onSubmit={handleSubmit} class={isValid()}>
                <div class="form-group">
                    <Field component={renderField} name="nameOnCard" type="text" placeholder="Name on card" />
                </div>
                <div class="form-group">
                    <Field component={renderField} name="cardNumber" type="text" placeholder="Card number" />
                </div>
                <div class="form-group w-50 pull-left">
                    <Field component={renderField} name="exodate" type="text" placeholder="Exo. date( MM/YY )" />
                </div>
                <div class="form-group w-50 pull-right">
                    <Field component={renderField} name="cvv" type="text" placeholder="CVV" />
                </div>
                <div class="form-group">
                    <p>Nulla incididunt exercitation duis in exercitation quis et quis excepteur. Aute laborum quis sit ea mollit laborum aliquip elit. Minim non deserunt nulla incididunt cupidatat. Sunt velit ullamco in sit laboris culpa commodo aliqua voluptate laboris elit labore. Commodo quis incididunt adipisicing adipisicing sit ullamco elit labore eu deserunt. Pariatur pariatur nostrud est laboris deserunt. Et cupidatat elit nostrud occaecat irure.</p>
                </div>

                <div class="w-100 clearfix pull-left" style={{"position": "absolute", "bottom": "-60px"}}>
                    <button type="submit" class="btn btn-prev btn-primary btn-lg pull-right" disabled={pristine || submitting}>Review Order</button>
                </div>
            </form>
        </div>
    )
}
export default reduxForm({
    form: 'payment',       // a unique identifier for this form
    validate,              // validation function given to redux-form
})(PaymentForm)