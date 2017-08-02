import React from 'react'
import PropTypes  from 'prop-types'

const Step = ({ id, trackId, controller, sequences, updateTrackSequence, drumr }) => {

  let { isPlaying, stepId, barId, resolution } = controller

  let sequence = sequences.byHash[trackId]
  // console.log('STEP sequence', sequence )
  // console.log('tracks[trackId].sample', trackId, tracks[trackId].sample)

  const onStepTap = () => {
    let newSeq = sequence.map((arr, b) => b === barId ? arr.map((value, i) => i === stepId ? value === 0 ? 1 : 0 : value) : arr )
    console.log('STEP NEW sequence', newSeq )
    // updateTrackSequence({id:trackId, barId:barId, seqId:id%resolution })
    updateTrackSequence({id:trackId, barId:barId, sequence: newSeq })
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
  sequences:   PropTypes.object.isRequired,
  // tracks:   PropTypes.array.isRequired,
  drumr:    PropTypes.object.isRequired
}

export default Step
