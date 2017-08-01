import React from 'react'
import PropTypes  from 'prop-types'
import Step from '../containers/step'

const Beat = ({ trackId, step, resolution, drumr }) => {

  // console.log('trackId', trackId)

  const renderSteps = () => {

    let numNotes = resolution === 16 ? 4 : 3;
    let steps = []
    for (let i=0;i<numNotes;i++){
      // console.log('>>> note ID', step*numNotes+i)
      steps.push(<Step key={step*numNotes+i}
                  id={step*numNotes+i}
                  trackId={trackId}
                  drumr={drumr}/>)
    }
    return steps
  }

  return (
    <li>
      <ul className='beat'>
        {renderSteps()}
      </ul>
    </li>
  )
}

Beat.propTypes = {
  drumr: PropTypes.object.isRequired
}

export default Beat
