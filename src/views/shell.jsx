import React from 'react'
import PropTypes  from 'prop-types'

//import Header from 'header'
//import Footer from './footer.jsx'

const Shell = (props) => {
  console.log('SHELL props', props)
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
