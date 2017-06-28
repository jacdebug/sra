import { combineReducers } from 'redux';
import filesReducer from './files';

const rootReducer = combineReducers({
  filesReducer,
});

export default rootReducer;
