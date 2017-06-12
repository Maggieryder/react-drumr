import React from 'react'
import PropTypes  from 'prop-types'
import { Route, Link } from 'react-router-dom'
import User from './user'

const Users = ({ match }) => (
  <div>
    <h2>Users</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:id`} component={User}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a user.</h3>
    )}/>
  </div>
)

export default Users
