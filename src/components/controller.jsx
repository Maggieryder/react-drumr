import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/main.scss'
import Fader from './fader'
import Options from './options'
//import BarIcon from 'react-svg-loader!../../assets/images/icons/icon-bar.svg'
import MixerIcon from '../../assets/images/icons/icon-mixer.svg'
//import PlayIcon from 'react-svg-loader!../../assets/images/icons/icon-play.svg'
//import PauseIcon from 'react-svg-loader!../../assets/images/icons/icon-pause.svg'
import Icon from './icon'
import { connect } from 'react-redux'
import { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      //updateKit,
      assignKitId,
      togglePlay,
      toggleMixer,
      toggleBar } from '../actions'

const kitLib = {
  kitOptions:[
    {
      label:'Feelin Kit',
      path:'triton/FeelinKit/',
      voices: [
          {'name':'kick', 'smple':'FK_BD_08.wav'},
          {'name':'snare', 'smple':'FK_SNR_03.wav'},
          {'name':'hihat', 'smple':'FK_HH_05.wav'},
          {'name':'open hihat', 'smple':'FK_CYM_03.wav'}
      ]
    },
    {
      label:'Wild Soul Kit',
      path:'triton/WildSoulKit/',
      voices: [
        {'name':'kick', 'smple':'WSK_BD_03.wav'},
        {'name':'snare', 'smple':'WSK_SNR_08.wav'},
        {'name':'tambourine', 'smple':'WSK_HH_03.wav'},
        {'name':'open hihat', 'smple':'WSK_HH_12.wav'}
      ]
    }
  ],
  kitId: 0
}

class Controller extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Controller PROPS', this.props)
  }
  renderBars(bars){
    //let { bars } = controller
    let { toggleBar } = this.props
    let barlist = []
    for (let i=0; i<bars; i++){
      barlist.push(
        <a key={`bar${i}`} className='toggle-bar' href='#' id={`bar${i}`} onClick={()=>{toggleBar(i)}}>
          {<Icon type='bar'/> }
        </a>
      )
    }
    return barlist;
  }

  componentDIdMount(){}

  render(){

    let { controller, toggleMixer, togglePlay, updateTempo, updateSwing, assignKitId } = this.props //kitLib when json load implemented
    let { kitOptions, kitId } = kitLib
    let { tempo, swing, isPlaying, bars, barId, resolution } = controller

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
        <Options id='kits' options={kitOptions} value={kitId} onChange={(e)=>{assignKitId(parseInt(e.target.value))}}/>
        <div>
          {this.renderBars(bars)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ controller }){ //, kitLib
  return { controller } //, kitLib
}

export default connect(mapStateToProps,
  { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      //updateKit,
      assignKitId,
      togglePlay,
      toggleMixer,
      toggleBar })(Controller)
