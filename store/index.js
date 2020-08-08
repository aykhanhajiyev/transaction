import {createStore, combineReducers} from 'redux';
import {
  MODULE_NAME as TransactionModuleName,
  reducer as TransactionReducer,
  MODULE_NAME,
} from './transactions';

const rootReducer = combineReducers({
  [TransactionModuleName]: TransactionReducer,
});

const store = createStore(rootReducer);

export default store;
