import React from 'react'
import PropTypes  from 'prop-types'

const Shell = (props) => {
  // console.log('SHELL props', props)
  return (
    <div id="wrapper">
      {props.children}
    </div>
  )
}

Shell.propTypes = {
  children: PropTypes.node
}

export default Shell
