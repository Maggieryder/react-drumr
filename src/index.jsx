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

// redux.compose(
  //window.devToolsExtension ? window.devToolsExtension() : f => f
//)
/// remove thses possibly?? See webpack tute

//import '../vendor/bootstrap.min.css'
//import '../vendor/bootstrap-theme.min.css'
import './scss/main.scss'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {Routes}
  </Provider>, document.getElementById('root'))
