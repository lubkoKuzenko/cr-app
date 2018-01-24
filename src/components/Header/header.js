import './style.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import PropTypes from 'prop-types'
import * as loginActions from '../../store'

class Header extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    })
  };
  
  click = () => {
    this.props.logout();
    this.context.router.history.push('/login');
  }

  render() {
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <div class="container">
        <Link class="navbar-brand" to="/">Home</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav float-left mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/userlist">Products</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/forms">Forms</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/plan">Development Plan</Link>
            </li>
          </ul>

          <Button color="link" class="text-white" onClick={this.click}>LogOut</Button>
        </div>
      </div>
    </nav>
  }
}

export default connect(
  null,
  dispatch => {
    return bindActionCreators({ ...loginActions }, dispatch)
  }
)(Header)