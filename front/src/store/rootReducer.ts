import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';

import loadingReducer from './loading/reducer';
import modalReducer from './modal/reducer';
import { userReducer } from './user/reducer';

export const history = createBrowserHistory();

export default combineReducers({
  loading: loadingReducer,
  modal: modalReducer,
  router: connectRouter(history),
  user: userReducer,
});
