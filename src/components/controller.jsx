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
    // let { drumr, controller } = this.props
    // let { tempo, swing } = controller
    // drumr.updateTempo(tempo);
    // drumr.updateSwingFactor(swing);
  }
  componentWillReceiveProps(props){
    let { kits, drumr, assignBuffers } = props
    let { kitData, kitId } = kits
    // console.log('>>> CONTROLLER componentWillReceiveProps same kitData PROPS', kitData === this.props.kits.kitData)
    if ( kitData !== this.props.kits.kitData) drumr.loadBuffers(kitData[kitId], assignBuffers)
  }

  updateKit(value){
    let { drumr, kits, assignKitId, assignBuffers } = this.props
    let { kitData, kitId, buffers } = kits
    assignKitId(value);
    drumr.loadBuffers(kits.kitData[value], assignBuffers)
  }

  renderBars(bars, id) {
    let { updateBarId } = this.props
    let barlist = []
    for (let i=0; i<bars; i++){
      barlist.push(
        <a key={`bar${i}`} className={`toggle-bar${i===id ? ' active':''}`} href='#' id={`bar${i}`} onClick={ () => updateBarId(i) }>
          {<Icon type='bar'/> }
        </a>
      )
    }
    return barlist;
  }

  render(){

    let { kits, controller, updateTempo, updateSwing, togglePlay, toggleMixer } = this.props
    let { tempo, swing, isPlaying, numBars, barId, resolution } = controller
    let { kitData, kitId, buffers } = kits

    return (
      <div className='controls'>
        <div>
          <a className='toggle-mixer' href='#' onClick={ () => toggleMixer() }>
            <Icon type='mixer'/>
          </a>
        </div>
        <div>
          <a id='playBtn' href='#' onClick={ () => togglePlay() }>
            {isPlaying ? <Icon type='pause'/> : <Icon type='play'/> }
          </a>
        </div>
        <Fader label='tempo' min={30} max={160} value={tempo} step={1} units=' bpm' onChange={ e => updateTempo(parseInt(e.target.value)) }/>
        <Fader label='swing' min={0} max={100} value={swing} step={1} units='%' onChange={ e => updateSwing(parseInt(e.target.value)) }/>
        <Options id='kits' options={kitData} value={kitId} onChange={ e => this.updateKit(parseInt(e.target.value)) }/>
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
  updateBarId:      PropTypes.func.isRequired,
  kits:           PropTypes.object.isRequired,
  drumr:          PropTypes.object.isRequired
}

export default Controller
