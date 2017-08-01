import React from 'react'
import PropTypes  from 'prop-types'

const Step = ({ id, tracks, trackId, controller, sequences, updateTrackSequence, drumr }) => {

  let { isPlaying, stepId, barId, resolution } = controller

  let sequence = sequences[trackId]

  // console.log('tracks[trackId].sample', trackId, tracks[trackId].sample)

  const onStepTap = () => {
    updateTrackSequence({id:trackId, barId:barId, seqId:id%resolution })
    drumr.onStepTap(trackId)
    // if (!isPlaying) triggerSample(trackId)
  }

  return (
    <li id={id}
      className={sequence[id%resolution] === 1 ? isPlaying && stepId===id ? 'step now' : 'step on' : 'step'}
      onClick={ () => onStepTap() } >
      <div className='status'>
        <div></div>
      </div>
    </li>
  )
}

Step.propTypes = {
  updateTrackSequence: PropTypes.func.isRequired,
  controller:   PropTypes.object.isRequired,
  tracks:   PropTypes.array.isRequired,
  drumr:    PropTypes.object.isRequired
}

export default Step
