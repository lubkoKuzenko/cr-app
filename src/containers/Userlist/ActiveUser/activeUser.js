import React, { Component } from 'react'
import { connect } from 'react-redux'

class ActiveUser extends Component {
  render() {
    const { name, eye_color } = this.props.activeUser;

    if (!name) { return null }

    return <div>
      <hr />
      <h3>Active User</h3>
      <ul class="list-group">
        <li class="list-group-item">
          <span>{name} with </span>
          <b>{eye_color}</b>
          <span> eyes</span>
        </li>
      </ul>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    activeUser: state.activeUser
  }
}

export default connect(mapStateToProps)(ActiveUser)
