import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import fetchSagaFi from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      {
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }
    )
  : compose;
/* eslint-enable */


const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
  combineReducers({
    rootReducer
  }),
  enhancer
);

sagaMiddleware.run(fetchSagaFi)

export default store;







/*
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(  
  applyMiddleware(sagaMiddleware)
)(createStore);

function configureStore(initialState) {  
  const store = createStoreWithMiddleware(rootReducer);
  sagaMiddleware.run(fetchSagaFi);
  console.log(store);
  return store;
}

export default configureStore();
*/


/*
function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )

  store.runSaga = sagaMiddleware.run
  store.runSaga(fetchSagaFi)
  //store.close = () => store.dispatch(END)
  return store
}

export default configureStore();


*/

/*
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(fetchSagaFi)


export default store;

*/