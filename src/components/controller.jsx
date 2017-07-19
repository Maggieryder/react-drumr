import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Fader from './fader'
import Options from './options'
import Icon from './icon'


class Controller extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    let { drumr, controller } = this.props
    let { tempo, swing } = controller
    drumr.updateTempo(tempo);
    drumr.updateSwingFactor(swing);
  }
  componentWillReceiveProps(props){
    let { kits, drumr, assignBuffers } = props
    let { kitData, kitId } = kits
    // console.log('>>> CONTROLLER componentWillReceiveProps same kitData PROPS', kitData === this.props.kits.kitData)
    if ( kitData !== this.props.kits.kitData) drumr.loadBuffers(kitData[kitId], assignBuffers)
  }
  handleInteraction = (action, value) => {
    let {
      updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      assignBuffers,
      assignKitId,
      togglePlay,
      toggleMixer,
      toggleBar,
      kits,
      drumr } = this.props

    // console.log('handleInteraction: ', action)

    switch ( action ) {
      case 'updateTempo':
      updateTempo(value);
      drumr.updateTempo(value);
      break;
      case 'updateSwing':
      updateSwing(value);
      drumr.updateSwingFactor(value/100);
      break;
      case 'updateKit':
      assignKitId(value);
      drumr.loadBuffers(kits.kitData[value], assignBuffers)
      break;
      case 'togglePlay':
      togglePlay();
      drumr.togglePlay();
      break;
      default:
      //
    }
  }

  renderBars(bars, id) {
    let { toggleBar } = this.props
    let barlist = []
    for (let i=0; i<bars; i++){
      barlist.push(
        <a key={`bar${i}`} className={`toggle-bar${i===id ? ' active':''}`} href='#' id={`bar${i}`} onClick={ () => toggleBar(i) }>
          {<Icon type='bar'/> }
        </a>
      )
    }
    return barlist;
  }

  render(){
    let handleInteraction = this.handleInteraction
    let { kits, controller } = this.props
    let { kitData, kitId, buffers } = kits
    let { tempo, swing, isPlaying, numBars, barId, resolution } = controller

    return (
      <div className='controls'>
        <div>
          <a className='toggle-mixer' href='#' onClick={ () => toggleMixer() }>
            <Icon type='mixer'/>
          </a>
        </div>
        <div>
          <a id='playBtn' href='#' onClick={()=> handleInteraction('togglePlay') }>
            {isPlaying ? <Icon type='pause'/> : <Icon type='play'/> }
          </a>
        </div>
        <Fader label='tempo' min={30} max={160} value={tempo} step={1} units=' bpm' onChange={ e => handleInteraction('updateTempo', parseInt(e.target.value)) }/>
        <Fader label='swing' min={0} max={100} value={swing} step={1} units='%' onChange={ e => handleInteraction('updateSwing', parseInt(e.target.value)) }/>
        <Options id='kits' options={kitData} value={kitId} onChange={ e => handleInteraction('updateKit', parseInt(e.target.value)) }/>
        <div>
          {this.renderBars(numBars, barId)}
        </div>
      </div>
    )
  }
}

Controller.propTypes = {
  updateTempo:    PropTypes.func.isRequired,
  updateSwing:    PropTypes.func.isRequired,
  // updateResolution:  PropTypes.func.isRequired,
  // updateBars:        PropTypes.func.isRequired,
  assignBuffers:  PropTypes.func.isRequired,
  assignKitId:    PropTypes.func.isRequired,
  togglePlay:     PropTypes.func.isRequired,
  toggleMixer:    PropTypes.func.isRequired,
  toggleBar:      PropTypes.func.isRequired,
  kits:           PropTypes.object.isRequired,
  drumr:          PropTypes.object.isRequired
}

export default Controller
