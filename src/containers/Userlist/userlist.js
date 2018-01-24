import './style.css'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as userListActions from '../../store'
import { Loader } from '../../components'
import ActiveUser from './ActiveUser/activeUser'

class Userlist extends Component { 
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { userlist, selectUser } = this.props;
    if (!userlist) {
      return <div><Loader /></div>;
    }

    return <div>
      <ul class="list-group">
        {
          Object.values(userlist).map((user) => {
            return <li key={user.name} class="list-group-item" onClick={() => selectUser(user)}>
              <span>{user.name}</span>
            </li>
          })
        }
      </ul>
      <ActiveUser />
    </div>
  }
}

export default connect(
  state => ({
    userlist: state.userlist
  }), 
  dispatch => {
    return bindActionCreators({ ...userListActions }, dispatch)
  }
)(Userlist)
