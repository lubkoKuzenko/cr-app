import './Review.css'
import React, { Component } from 'react'

export class Review extends Component {
    reserFormHandler() {
        this.props.jumpToStep(2)
    }

    render() {
        return <div class="review-page">
            <h1>Summary</h1>
            <div class="summary-info">
                <div class='contact-details'>
                    <div class="head clearfix">
                        <h4 class="pull-left">Contact details</h4>
                        <button class="btn btn-link pull-right" onClick={() => { this.props.jumpToStep(1) }}>Edit</button>
                    </div>
                    <div class='content'>
                        <div class="content-item">
                            <label>First Name</label>
                            <p>todo</p>
                        </div>
                        <div class="content-item">
                            <label>Last Name</label>
                            <p>todo</p>
                        </div>
                        <div class="content-item">
                            <label>Email</label>
                            <p>todo</p>
                        </div>
                    </div>
                </div>
                <div class='payment-details'>
                    <div class="head clearfix">
                        <h4 class="pull-left">Payment method</h4>
                        <button class="btn btn-link pull-right" onClick={() => { this.props.jumpToStep(2) }}>Edit</button>
                    </div>
                    <div class="content-item">
                        <label>Your choose</label>
                        <p>todo</p>
                    </div>
                    <div class="content-item">
                        <label>Your bank</label>
                        <p>Bank Name</p>
                    </div>
                </div>
                <div class='preorder-details'>
                    <div class="head clearfix">
                        <h4 class="pull-left">Your pre-order</h4>
                        <button class="btn btn-link pull-right" onClick={() => { this.props.jumpToStep(0) }}>Edit</button>
                    </div>
                </div>
            </div>
            <a class="btn btn-prev btn-link btn-lg pull-left" onClick={() => { this.reserFormHandler() }}>Return to payment selection</a>
            <a class="btn btn-prev btn-primary btn-lg pull-left" onClick={() => { alert("redirect") }}>Purchase</a>
        </div>
    }
}