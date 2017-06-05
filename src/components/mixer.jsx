import React, {PropTypes, Component} from 'react'
import styles from '../css/beat-box.scss'
import Fader from './fader'
import Switch from './switch'

class Tracks extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }

  renderTracks(){
    let {tracks} = this.props;
    tracks.map((track)=> {
      return <Track name={track.name} sequence={track.sequence} params={track.params} />
    })
  }

  render(){
    let options = this.props
    return (
      <div className="mixer">
        <div className="track" id="wetmix">
          <div className="name">WET MIX</div>
          <div className="params">
            <div className="param param-fader">
              <input className="input-fader" name="wet" type="range" min="0" max="100" value="70" />
              <div id="wetMeter" className="meter">7</div>
            </div>
            <div className="checkbox">
              <div className="switch mute"></div><label>MUTE</label>
            </div>
          </div>
        </div>
        <div className="track" id="drymix">
          <div className="name">DRY MIX</div>
          <div className="params">

            <div className="param param-fader">
              <input className="input-fader" name="dry" type="range" min="0" max="100" value="70" />
              <div id="dryMeter" className="meter">7</div>
            </div>
            <div className="checkbox">
              <div className="switch mute"></div><label>MUTE</label>
            </div>
          </div>
        </div>
        <div className="track" id="global">
          <div className="name">MASTER</div>
          <div className="params">
            <div className="param param-fader">
              <input id="master" className="input-fader" name="volume" type="range" min="0" max="100" value="70" step="1" list="volsettings"/>

              <datalist id="volsettings">
              	<option>0</option>
              	<option>20</option>
              	<option>40</option>
              	<option>60</option>
              	<option>80</option>
              	<option>100</option>
              </datalist>
              <div id="volumeMeter" className="meter">7</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tracks
