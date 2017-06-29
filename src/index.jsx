//import React, {Component} from 'react'
//import {render} from 'react-dom'
//import Container from './components/container.jsx'

//import './css/main.css';

//render(<Container />, document.getElementById('root'))


import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import Routes from './routes.jsx'
import reducers from './reducers'


//import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

import {loadAssets} from './actions';
/*
export default function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk)
  );
}*/
// redux.compose(
  //window.devToolsExtension ? window.devToolsExtension() : f => f
//)
/// remove thses possibly?? See webpack tute

//import '../vendor/bootstrap.min.css'
//import '../vendor/bootstrap-theme.min.css'
import './scss/main.scss'

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

store.dispatch(loadAssets('./kits.json'));

render(
  <Provider store={store}>
    {Routes}
  </Provider>, document.getElementById('root'))
