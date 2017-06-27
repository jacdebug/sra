import { combineReducers } from 'redux';
import _ from 'lodash/object';
import files from './files'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { files: {} }, action) {
  if (action.response && action.response.entities) {
    return _.merge({}, state, action.response.entities)
  }

  return state
}

const rootReducer = combineReducers({
    entities,
    files
});

export default rootReducer;