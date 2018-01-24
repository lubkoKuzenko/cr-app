import './style.css'

import * as _ from 'lodash'
import * as moment from 'moment'

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default class About extends Component {
  state = {
    modal: false
  }
  static propTypes = { center: PropTypes.object, zoom: PropTypes.number, apiKey: PropTypes.string, data: PropTypes.array };
  static defaultProps = {
    buttonLabel: "testModal",
    center: { lat: 49.85, lng: 24.10 },
    zoom: 11,
    apiKey: 'AIzaSyBk8SXh_84KUePCYGQmSMkxtU7pCp5Wafs',
    data: [
      { name: 'A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
      { name: 'B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
      { name: 'C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
      { name: 'D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
      { name: 'E', uv: 278, pv: null, amt: 2400, uvError: 28 },
      { name: 'F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
      { name: 'G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
      { name: 'H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
      { name: 'I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
      { name: 'J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
    ]
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log('lodash.js version: ' + _.VERSION)
    console.log('moment.js version: ' + moment.version)
    return <div>
      <h1>Modal</h1>
      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.buttonLabel}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <hr/>
      <h1>Google Map</h1>
      <hr />
      <GoogleMap
        style={{ width: '100%', height: '400px', position: 'relative' }}
        bootstrapURLKeys={{
          key: this.props.apiKey,
          language: 'ru'
        }}
        center={this.props.center}
        zoom={this.props.zoom}>
      </GoogleMap>

      <h1>Chart (recharts)</h1>
      <hr />

      <LineChart width={600} height={300} data={this.props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  }
}