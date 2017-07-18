import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'

const customMiddleWare = store => next => action => {
  console.log("Action received:", action);
  next(action);
}

export function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
}

// redux.compose(
  //window.devToolsExtension ? window.devToolsExtension() : f => f
//)
