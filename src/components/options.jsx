import React, { Component } from 'react'
import PropTypes  from 'prop-types'

const Options = ({cname, value, onChange, options }) => {
  return (
    <div className='param param-option'>
      <select className={cname} value={value} onChange={onChange}>
        {
          options.map((opt, i) => {
            return <option key={i} value={i} >{opt.label}</option>
          })
        }
      </select>
    </div>
  )
}

Options.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
  options: PropTypes.array,
  onChange: PropTypes.func
}

export default Options
