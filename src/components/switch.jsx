import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/params.scss'

const Switch = (props) => {
  console.log('>>> Switch props', props)
  let { label, cname, onClick } = props
  return (
    <div className='checkbox'>
      <div className={`switch ${cname}`} onClick={onClick}></div>
      <label>{label}</label>
    </div>
  )
}

Switch.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
  options: PropTypes.array,
  onChange: PropTypes.func
}

export default Switch
