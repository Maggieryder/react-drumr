import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
//import { createHashHistory } from 'history'
//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
// const history =

import Shell from './views/shell.jsx'
import BeatBox from './views/beatbox.jsx'
import Users from './views/users.jsx'
import User from './views/user.jsx'
import NoMatch from './views/404.jsx'

const Routes = (
  <Router hashType='noslash'>
    <Shell>
      <Switch>
        <Route exact path='/' component={BeatBox} />
        <Route name='Users' path='/users' component={Users} />
        <Route name='Not Found' path='/*' component={NoMatch} />
      </Switch>
    </Shell>
  </Router>
)

export default Routes
