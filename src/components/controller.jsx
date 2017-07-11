import React from 'react'
import PropTypes  from 'prop-types'
import Fader from './fader'
import Options from './options'
import Icon from './icon'

const Controller = ({
  updateTempo,
  updateSwing,
  updateResolution,
  updateBars,
  assignBuffers,
  assignKitId,
  togglePlay,
  toggleMixer,
  toggleBar,
  controller,
  drumr,
  kits
}) => {

  const renderBars = (bars, id) => {
    let barlist = []
    for (let i=0; i<bars; i++){
      barlist.push(
        <a key={`bar${i}`} className={`toggle-bar${i===id ? ' active':''}`} href='#' id={`bar${i}`} onClick={()=>{toggleBar(i)}}>
          {<Icon type='bar'/> }
        </a>
      )
    }
    return barlist;
  }

  const togglePlayState = () => {
    togglePlay();
    drumr.togglePlay();
  }

  const updateKit = (value) => {
    assignKitId(value);
    drumr.loadBuffers(kitData[kitId], assignBuffers)
  }

  let { kitData, kitId, buffers } = kits
  let { tempo, swing, isPlaying, numBars, barId, resolution } = controller

  // console.log('assignKitData', kitData)
  // if(kitData[kitId]) drumr.loadBuffers(kitData[kitId], assignBuffers)

  return (
    <div className='controls'>
      <div>
        <a className='toggle-mixer' href='#' onClick={()=>{toggleMixer()}}>
          <Icon type='mixer'/>
        </a>
      </div>
      <div>
        <a id='playBtn' href='#' onClick={()=>{togglePlayState()}}>
          {isPlaying ? <Icon type='pause'/> : <Icon type='play'/> }
        </a>
      </div>
      <Fader label='tempo' min={30} max={160} value={tempo} step={1} units=' bpm' onChange={ e => updateTempo(Number(e.target.value)) }/>
      <Fader label='swing' min={0} max={100} value={swing} step={1} units='%' onChange={ e => updateSwing(Number(e.target.value)) }/>
      <Options id='kits' options={kitData} value={kitId} onChange={ e => updateKit(parseInt(e.target.value)) }/>
      <div>
        {renderBars(numBars, barId)}
      </div>
    </div>
  )
}

Controller.propTypes = {

}

export default Controller
