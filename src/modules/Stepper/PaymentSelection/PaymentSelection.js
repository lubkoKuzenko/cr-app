import './PaymentSelection.css'
import 'react-web-tabs/dist/react-web-tabs.css';
import React, { Component } from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import PaymentForm from './CreditCardForm/CreditCardForm'

export class PaymentSelection extends Component {
    reserFormHandler(){
        this.props.jumpToStep(1)
    }

    submit(payment){
        this.props.submitHandler(payment) // save data to redux store
        this.props.jumpToStep(3)
    }

    tabChangeHandler(tabId){
        console.log(tabId)
    }

    render() {
        return <div class="payment-page">
            <h3>Select a payment method</h3>
            <Tabs defaultTab="vertical-tab-one" vertical onChange={(tabId) => { this.tabChangeHandler(tabId) }}>
                <TabList>
                    <Tab tabFor="vertical-tab-one">iDeal</Tab>
                    <Tab tabFor="vertical-tab-two">Giro Pay</Tab>
                    <Tab tabFor="vertical-tab-three">Payment method title</Tab>
                </TabList>
                <TabPanel tabId="vertical-tab-one">
                    <h3>Select your bank</h3>
                    <p>Sit culpa occaecat irure laborum anim Lorem excepteur sint. Nulla sunt voluptate ullamco voluptate commodo eu ullamco culpa reprehenderit voluptate. </p>
                    <p>Duis veniam non occaecat esse duis amet anim occaecat ad in sunt ad dolore. Dolor amet elit aliquip fugiat quis in qui. Reprehenderit sunt ullamco reprehenderit fugiat. Elit commodo labore veniam cillum eiusmod minim laboris eu ut esse in elit consectetur eu. Labore in deserunt aliquip deserunt consequat nisi aliqua mollit non reprehenderit aute consectetur et.</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-two">
                    <h3>Select your bank</h3>
                    <p>Ut laborum veniam adipisicing est nulla. Excepteur magna excepteur excepteur consectetur dolor nisi magna et. </p>
                    <p>Sint excepteur deserunt eiusmod cupidatat ea ea reprehenderit duis. Enim duis sint sint id sit cillum Lorem mollit officia Lorem consectetur.  </p>
                    <p>Et adipisicing anim dolor adipisicing tempor ex commodo et ullamco adipisicing.</p>
                    <p>Culpa id nisi sint ea incididunt consequat culpa reprehenderit reprehenderit. Aliquip exercitation ullamco id sunt. </p>
                    <p>Duis magna est nisi aliquip sunt cillum occaecat. Ut proident officia dolor voluptate cupidatat et ex elit.</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-three">
                    <PaymentForm onSubmit={(payment) => {this.submit(payment)}}/>
                </TabPanel>
            </Tabs>
            <a class="btn btn-prev btn-link btn-lg pull-left" onClick={() => {this.reserFormHandler()}}>Return to contact details</a>
        </div>
    }
}