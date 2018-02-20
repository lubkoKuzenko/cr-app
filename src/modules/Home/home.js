import './style.css'

import * as _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import * as stackActions from '../../store'
import { Loader } from '../../components'

class Home extends Component {

  componentDidMount() {
    this.props.initStack();
  }

  render() {
    const { stack } = this.props;

    if (_.isEmpty(stack)) {
      return <div><Loader /></div>;
    }

    return <div>
      <Tabs defaultTab={stack[0].name} vertical>
        <TabList>
          {
            Object.values(stack).map(function (item) {
              return <Tab key={item.name} tabFor={item.name}>{item.name}</Tab>
            })
          }
        </TabList>
        {
          Object.values(stack).map(function (item) {
            return <TabPanel key={item.name} tabId={item.name} dangerouslySetInnerHTML={{__html: item.description}}></TabPanel>
          })
        }
      </Tabs>
    </div>
  }
}

export default connect(
  state => ({
    stack: state.stack
  }), 
  dispatch => {
    return bindActionCreators({ ...stackActions }, dispatch)
  }
)(Home)