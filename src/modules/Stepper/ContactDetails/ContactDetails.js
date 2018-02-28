import './ContactDetails.css'
import React, { Component } from 'react'
import DetailsForm from './detailsForm/detailsForm'

export class ContactDetails extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }
    submit(contact) {
        this.props.submitHandler(contact) // save data to redux store
        this.props.jumpToStep(2)
    }

    render() {
        return <div class="contact-page">
            <h3>Enter your contact and biling details</h3>
            <DetailsForm onSubmit={(contact) => {this.submit(contact)}} {...this.props} />
        </div>
    }
}