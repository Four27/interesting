import React from 'react';
import ReactDOM from 'react-dom';
import 'react-hot-loader/patch';

import { AppContainer } from 'react-hot-loader';
import User from './pages/User.jsx';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(User);

if (module.hot) {
  module.hot.accept('./pages/User.jsx', () => { render(RootContainer) });
}
