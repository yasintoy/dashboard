import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Dashboard from './containers/Dashboard';

import './styles/index.scss';

const store = configureStore();
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  </Provider>,
  rootElement
);
