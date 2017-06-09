import React, { PropTypes } from 'react'

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
