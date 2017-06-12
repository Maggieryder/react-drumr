import React from 'react'
import PropTypes  from 'prop-types'

let User = ({ match }) => {
  return (
    <h2>User {match.params.id} view</h2>
  )
}

User.propTypes = {
  params: PropTypes.object
}

export default User
