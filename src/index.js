import './index.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App/app'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
registerServiceWorker();