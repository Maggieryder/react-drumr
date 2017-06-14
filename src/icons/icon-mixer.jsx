import React, { Component } from 'react'

const BarIcon = (props) => {
  //console.log('>>> BarIcon props', props)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
      <g id="mixer-settings" data-name="mixer-settings">
        <rect y="5" width="32" height="2"/>
        <rect y="15" width="32" height="2"/>
        <rect y="25" width="32" height="2"/>
        <rect x="15" width="4" height="12"/>
        <rect x="22" y="10" width="4" height="12"/>
        <rect x="10" y="20" width="4" height="12"/>
      </g>
    </svg>
  )
}

export default BarIcon
