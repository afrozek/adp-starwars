import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

// import logging
import * as log from 'loglevel';

log.enableAll();
log.trace("logger trace test");
log.debug("logger debug test");
log.info("logger info test");
log.warn("logger warn test");
log.error("logger error test");


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
