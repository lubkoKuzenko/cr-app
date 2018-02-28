import React, { Component } from 'react'

export default class Plan extends Component {
    render() {
        const { title, price, onClick} = this.props;

        return <div class="col-md-4 text-center">
            <div class="panel panel-danger panel-pricing">
                <div class="panel-heading">
                    <i class="fa fa-desktop"></i>
                    <h3>{title}</h3>
                </div>
                <div class="panel-body text-center">
                    <p><strong>${price} / Month</strong></p>
                </div>
                <ul class="list-group text-center">
                    <li class="list-group-item"><i class="fa fa-check"></i> Personal use</li>
                    <li class="list-group-item"><i class="fa fa-check"></i> Unlimited projects</li>
                    <li class="list-group-item"><i class="fa fa-check"></i> 27/7 support</li>
                </ul>
                <div class="panel-footer">
                    <button class="btn btn-lg btn-block btn-danger" onClick={() => onClick(price)}>Select this one</button>
                </div>
            </div>
        </div>
    }

}