import { Card } from 'components';
import { ConnectedRouter } from 'connected-react-router';
import MainPage from 'pages/main';
import MyPage from 'pages/mypage';
import RootPage from 'pages/root';
import React from 'react';
import { Provider } from 'react-redux';
import { history } from 'store/rootReducer';

import { AxiosInstance as axios } from 'apis';
import configureStore, { RootState } from './store/configureStore';
import Auth from 'pages/auth';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootPage>
          <Auth
            onLoginSuccess={(resp) => {
              axios.post('/api/v1/auth/login', { ...resp }).then((res) => {
                axios.get('/api/v1/articles');
              });
            }}
          ></Auth>
        </RootPage>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
