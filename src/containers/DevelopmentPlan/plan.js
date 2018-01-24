import './style.css'

import React, { Component } from 'react'
import { Icon } from 'react-fa'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as _ from 'lodash'

import * as planActions from './plan.actions'
import { Loader } from '../../components'

class DevelopmentPlan extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.initTodoList()
  }

  render() {
    const { todos } = this.props;
    const statusClass = (task) => { return task.done ? 'list-group-item list-group-item-success' : 'list-group-item list-group-item-danger' };
    const statusIcon = (task) => { return task.done ? 'check' : 'play' };

    if (_.isEmpty(todos)) {
      return <div><Loader /></div>;
    }

    return <div>
      <div class="list-group" id="list1">
        {
          Object.values(todos).map(function (task) {
            return <li key={task.name} class={statusClass(task)}>
              <Icon name={statusIcon(task)} size="lg" class="float-left pr-2" />
              <span>{task.name}</span>
            </li>
          })
        }
      </div>
    </div>
  }
}

export default connect(
  state => ({
    todos: state.todos
  }), 
  dispatch => {
    return bindActionCreators({ ...planActions }, dispatch)
  }
)(DevelopmentPlan)