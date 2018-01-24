import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      tooltipOpen: false
    };

    this.togglet = this.togglet.bind(this);
    this.togglem = this.togglem.bind(this);
  }

  togglem() {
    this.setState({
      modal: !this.state.modal
    });
  }

  togglet() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div className="App">
        <p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.togglet}>
          Hello world!
        </Tooltip>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>
          </div>
        <div>
          <Button color="danger" onClick={this.togglem}>Modal</Button>
          <Modal isOpen={this.state.modal} toggle={this.togglem} className={this.props.className}>
            <ModalHeader toggle={this.togglem}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.togglem}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.togglem}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
