import React, { Component } from 'react'
import { connect } from 'react-redux'

class ActiveUser extends Component {
  render() {
    const { activeUser } = this.props;

    if (!activeUser) { return null }

    return <div>
      <hr />
      <h3>Active User</h3>
      <ul class="list-group">
        <li class="list-group-item">
          <span>{activeUser.name} with </span>
          <b>{activeUser.eye_color}</b>
          <span> eyes</span>
        </li>
      </ul>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    activeUser: state.users.activeUser
  }
}

export default connect(mapStateToProps)(ActiveUser)
