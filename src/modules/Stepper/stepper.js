import './stepper.css'
import React, { Component } from 'react'
import StepZilla from 'react-stepzilla'

import { ChoosePlan } from './ChoosePlan/ChoosePlan'
import { ContactDetails } from './ContactDetails/ContactDetails'
import { PaymentSelection } from './PaymentSelection/PaymentSelection'
import { Review } from './Review/Review'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: 0,
            contactDetails: null,
            payment: null
        }
    }

    // -----------------------------------------
    // Choose your plan methods
    // -----------------------------------------

    selectPlanHandler(price) {
        this.setState({ plan: price }, () => {
            console.log(this.state)
        })
        // place to trigger action to redux store
    }

    // -----------------------------------------
    // Contact details methods
    // -----------------------------------------

    submitContactDetailsHandler(contact){
        this.setState({ contactDetails: contact }, () => {
            console.log(this.state)
        })
        // place to trigger action to redux store
    }

    // -----------------------------------------
    // Payment selection methods
    // -----------------------------------------

    submitPaymentHandler(payment){
        this.setState({ payment }, () => {
            console.log(this.state)
        })
    }

    onChange(step) {
        console.log(step)
    }

    render() {
        const steps = [
            { name: 'Choose your plan', component: <ChoosePlan selectHandler={(price) => this.selectPlanHandler(price)} /> },
            { name: 'Contact details', component: <ContactDetails submitHandler={(contact)=>{this.submitContactDetailsHandler(contact)}} /> },
            { name: 'Payment selection', component: <PaymentSelection submitHandler={(payment)=>{this.submitPaymentHandler(payment)}}/> },
            { name: 'Review and checkout', component: <Review /> }
        ]

        return <div>
            <StepZilla
                steps={steps}
                showNavigation={false}
                startAtStep={0}
                preventEnterSubmission={true}
                stepsNavigation={false}
                onStepChange={(step) => this.onChange(step)}
            />
        </div>
    }
}