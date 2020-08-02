import { Card } from 'components';
import { ConnectedRouter } from 'connected-react-router';
import MainPage from 'pages/main';
import RootPage from 'pages/root';
import React from 'react';
import { Provider } from 'react-redux';
import { history } from 'store/rootReducer';

import configureStore, { RootState } from './store/configureStore';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootPage>
          <MainPage />
        </RootPage>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
