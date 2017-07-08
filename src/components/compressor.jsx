import React from 'react'
import PropTypes  from 'prop-types'
import Knob from './knob'
import Switch from './switch'

const Compressor = ({
  compressor,
  updateThreshold,
  updateKnee,
  updateRatio,
  updateAttack,
  updateRelease,
  toggleCompressor
}) => {

  let { active, threshold, knee, ratio, attack, release } = compressor
  return (
    <div className='track' id='compressor'>
      <div className='name'>compressor</div>
      <div className='params'>
        <Knob label='threshold' min={-100} max={0} value={threshold} step={1} onChange={(e)=>{updateThreshold(e)}}/>
        <Knob label='knee' min={0} max={40} value={knee} step={1} onChange={(e)=>{updateKnee(e)}}/>
        <Knob label='ratio' min={1} max={20} value={ratio} step={1} onChange={(e)=>{updateRatio(e)}}/>
        <Knob label='attack' min={0} max={1} value={attack} step={.01} onChange={(e)=>{updateAttack(e)}}/>
        <Knob label='release' min={0} max={1} value={release} step={.01} onChange={(e)=>{updateRelease(e)}}/>
        <Switch label='on/off' cname={active ? 'on' : ''} onClick={toggleCompressor}/>
      </div>
    </div>
  )
}

Compressor.propTypes = {

}

export default Compressor
