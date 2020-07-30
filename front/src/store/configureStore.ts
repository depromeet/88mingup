import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { history } from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const isDevMode = process.env.NODE_ENV === 'development';

  const preloadState = {};
  const middleWares = [];

  // 미들웨어 셋팅
  if (isDevMode) {
    middleWares.push(createLogger);
  }

  middleWares.push(sagaMiddleware);
  middleWares.push(routerMiddleware(history));

  const storeEnhancers = isDevMode
    ? ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
        applyMiddleware(...middleWares),
      )
    : applyMiddleware(...middleWares);

  const store = createStore(rootReducer, preloadState, storeEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
