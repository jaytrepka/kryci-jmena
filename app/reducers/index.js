// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import guess from './guess';
import help from './help';

const rootReducer = combineReducers({
  guess,
  help,
  router,
});

export default rootReducer;
