import './ChoosePlan.css'
import React, { Component } from 'react'
import Plan from "./Plan/Plan"

export class ChoosePlan extends Component {
    clickHandler(price){
        this.props.selectHandler(price) // save data to redux store
        this.props.jumpToStep(1)
    }

    render() {
        return <div class="plan-page">
            <h3>Choose your pricing plan</h3>
            <div class="row">
                <Plan title="Plan 1" price={490} onClick={(price)=>{this.clickHandler(price)}} />
                <Plan title="Plan 2" price={290} onClick={(price)=>{this.clickHandler(price)}} />
                <Plan title="Plan 3" price={690} onClick={(price)=>{this.clickHandler(price)}} />
            </div>
        </div>
    }
}