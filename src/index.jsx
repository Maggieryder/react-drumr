import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Routes from './routes.jsx'
import { loadData, assignKitData, assignReverbData } from './actions'

//import '../vendor/bootstrap.min.css'
//import '../vendor/bootstrap-theme.min.css'
import './scss/main.scss'

const store = configureStore();
store.dispatch(loadData('json/kits.json', assignKitData))
store.dispatch(loadData('json/verbs.json', assignReverbData))

render(
  <Provider store={store}>
    {Routes}
  </Provider>, document.getElementById('root'))
