import React, {PropTypes, Component} from 'react'
import styles from '../css/beat-box.scss'
import Track from './track'

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
      <div className="tracks">
        {this.renderTracks()}
      </div>
    )
  }
}

export default Tracks
