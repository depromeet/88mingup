import { Card } from 'components';
import { ConnectedRouter } from 'connected-react-router';
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
          <Card
            url={
              new URL(
                'https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg',
              )
            }
          />
        </RootPage>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
