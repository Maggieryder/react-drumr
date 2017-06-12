import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import styles from '../scss/params.scss'

class Options extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Options PROPS', this.props)
  }

  renderOptions(){
    let { options, isSelected } = this.props
    console.log('>>> *** options', options)
    options.map((opt, i)=>{
      console.log('>>>opt.label', opt.label, i)
      return <option key={i} value={i} selected={i===isSelected}>{opt.label}</option>
    })
  }

  render(){
    let {id, value, onChange} = this.props
    console.log('*** options', onChange)
    return (
      <div className='param param-option'>
        <select id={id} value={value} onChange={onChange}>
          {this.renderOptions()}
        </select>
      </div>
    )
  }
}

export default Options
