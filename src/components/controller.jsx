import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/main.scss'
import Fader from './fader'
import Options from './options'
import MixerIcon from '../../assets/images/icons/icon-mixer.svg'
import Icon from './icon'
import { connect } from 'react-redux'
import { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      loadAssets,
      assignKitOptions,
      //updateKit,
      assignKitId,
      togglePlay,
      toggleMixer,
      toggleBar } from '../actions'


class Controller extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Controller PROPS', this.props)
  }
  renderBars(bars, id){
    //let { bars } = controller
    let { toggleBar } = this.props
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

  componentDidMount(){
    let { loadAssets, assignKitOptions } = this.props
    loadAssets('/json/kits.json', assignKitOptions)
  }

  render(){

    let { controller, toggleMixer, togglePlay, updateTempo, updateSwing, assignKitId, kitLib } = this.props
    let { kitData, kitId } = kitLib
    console.log('kitData', kitData)
    let { tempo, swing, isPlaying, numBars, barId, resolution } = controller

    return (
      <div className='controls'>
        <div>
          <a className='toggle-mixer' href='#' onClick={()=>{toggleMixer()}}>
            <Icon type='mixer'/>
          </a>
        </div>
        <div>
          <a id='playBtn' href='#' onClick={()=>{togglePlay()}}>
            {isPlaying ? <Icon type='pause'/> : <Icon type='play'/> }
          </a>
        </div>
        <Fader label='tempo' min={30} max={160} value={tempo} step={1} units=' bpm' onChange={(e)=>{updateTempo(Number(e.target.value))}}/>
        <Fader label='swing' min={0} max={100} value={swing} step={1} units='%' onChange={(e)=>{updateSwing(Number(e.target.value))}}/>
        <Options id='kits' options={kitData} value={kitId} onChange={(e)=>{assignKitId(parseInt(e.target.value))}}/>
        <div>
          {this.renderBars(numBars, barId)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ controller, kitLib }){
  return { controller, kitLib }
}

export default connect(mapStateToProps,
  { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      loadAssets,
      assignKitOptions,
      //updateKit,
      assignKitId,
      togglePlay,
      toggleMixer,
      toggleBar })(Controller)
