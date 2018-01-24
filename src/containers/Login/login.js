import React, { Component } from 'react'
import LoginForm from './LoginForm/login.form'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../store'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Login extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    })
  };

  componentWillReceiveProps (){
    const token = localStorage.getItem('jwtToken')
    
    if(token){
      this.context.router.history.push('/');
    } else {
      return false;
    }
  }

  submit = (values) => {
    this.props.login(values);
    
  }

  render() {
    return <div>
      <div class="login-bg">
        <div class="login text-white">
          <LoginForm onSubmit={this.submit.bind(this)} />
        </div>
      </div>
    </div>
  }
}

export default connect(
  state => ({
    login: state.login
  }),
  dispatch => {
    return bindActionCreators({ ...loginActions }, dispatch)
  }
)(Login)