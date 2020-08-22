import _ from 'lodash';
import { RootState } from 'store/configureStore';

const createLoadingSelector = (actions: string[]) => (state: RootState) => {
  // returns true only when all actions is not loading
  return _(actions).some((action) => _.get(state, `loading.${action}`));
};

export default createLoadingSelector;
