import React, { Component } from 'react'

const BarIcon = (props) => {
  //console.log('>>> BarIcon props', props)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 21" width="50" height="35">
      <g id="bar" data-name="bar">
        <rect y="0" width="32" height="1"/>
        <rect y="5" width="32" height="1"/>
        <rect y="10" width="32" height="1"/>
        <rect y="15" width="32" height="1"/>
        <rect y="20" width="32" height="1"/>
        <ellipse cx="8.5" cy="15.5" rx="2.5" ry="2.5"/>
        <ellipse cx="16.5" cy="10.5" rx="2.5" ry="2.5"/>
        <ellipse cx="24.5" cy="5.5" rx="2.5" ry="2.5"/>
      </g>
    </svg>
  )
}

export default BarIcon
