import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { loadState } from './utils'

const customMiddleWare = store => next => action => {
  console.log("Action received:", action);
  next(action);
}

export function configureStore( persistedState = loadState() ) {
  return createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
