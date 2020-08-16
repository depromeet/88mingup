import { ConnectedRouter } from 'connected-react-router';
import MainPage from 'pages/main';
import RootPage from 'pages/root';
import React from 'react';
import { Provider } from 'react-redux';
import { history } from 'store/rootReducer';

import configureStore from './store/configureStore';
import { Switch, Route } from 'react-router-dom';
import MyPage from 'pages/mypage';
import LoginPage from 'pages/login';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootPage>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/:id" component={MyPage} />
          </Switch>
        </RootPage>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
