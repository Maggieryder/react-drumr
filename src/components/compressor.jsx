import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/params.scss'
import Knob from './knob'
import Switch from './switch'
import { connect } from 'react-redux'
import { updateThreshold, updateKnee, updateRatio, updateAttack, updateRelease, toggleCompressor } from '../actions'


class Compressor extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Compressor PROPS', this.props)
  }
  render(){
    let { compressor, updateThreshold, updateKnee, updateRatio, updateAttack, updateRelease, toggleCompressor } = this.props
    let { active, threshold, knee, ratio, attack, release } = compressor
    return (
      <div className='track' id='compressor'>
        <div className='name'>compressor</div>
        <div className='params'>
          <Knob label='threshold' min={-100} max={0} value={threshold} step={1} onChange={(e)=>{updateThreshold(Number(e.target.value))}}/>
          <Knob label='knee' min={0} max={40} value={knee} step={1} onChange={(e)=>{updateKnee(Number(e.target.value))}}/>
          <Knob label='ratio' min={1} max={20} value={ratio} step={1} onChange={(e)=>{updateRatio(Number(e.target.value))}}/>
          <Knob label='attack' min={0} max={1} value={attack} step={.01} onChange={(e)=>{updateAttack(Number(e.target.value))}}/>
          <Knob label='release' min={0} max={1} value={release} step={.01} onChange={(e)=>{updateRelease(Number(e.target.value))}}/>
          <Switch label='on/off' cname={active ? 'on' : null} onClick={toggleCompressor}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ compressor }){
  return { compressor }
}

export default connect(mapStateToProps, { updateThreshold, updateKnee, updateRatio, updateAttack, updateRelease, toggleCompressor })(Compressor)
