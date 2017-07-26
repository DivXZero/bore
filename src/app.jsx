import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App'
import configureStore from './store';

const store = configureStore();

require('./index.html');
const root = document.getElementById('react-root');

const appRender = (
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>
);

ReactDOM.render(
  appRender,
  root
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.render(
      appRender,
      root
    );
  });
}
