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
      <div class="mixer">
        <div class="track" id="wetmix">
          <div class="name">WET MIX</div>
          <div class="params">
            <div class="param param-fader">
              <input class="input-fader" name="wet" type="range" min="0" max="100" value="70" />
              <div id="wetMeter" class="meter">7</div>
            </div>
            <div class="checkbox">
              <div class="switch mute"></div><label>MUTE</label>
            </div>
          </div>
        </div>
        <div class="track" id="drymix">
          <div class="name">DRY MIX</div>
          <div class="params">

            <div class="param param-fader">
              <input class="input-fader" name="dry" type="range" min="0" max="100" value="70" />
              <div id="dryMeter" class="meter">7</div>
            </div>
            <div class="checkbox">
              <div class="switch mute"></div><label>MUTE</label>
            </div>
          </div>
        </div>
        <div class="track" id="global">
          <div class="name">MASTER</div>
          <div class="params">
            <div class="param param-fader">
              <input id="master" class="input-fader" name="volume" type="range" min="0" max="100" value="70" step="1" list="volsettings"/>

              <datalist id="volsettings">
              	<option>0</option>
              	<option>20</option>
              	<option>40</option>
              	<option>60</option>
              	<option>80</option>
              	<option>100</option>
              </datalist>
              <div id="volumeMeter" class="meter">7</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tracks
