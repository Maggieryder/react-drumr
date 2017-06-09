import React, {PropTypes, Component} from 'react'
import styles from '../css/beat-box.scss'
import Track from './track'
import { connect } from 'react-redux'
import { addTrack, removeTrack } from '../actions/index'

class Tracks extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Tracks PROPS', this.props)
  }

  renderTracks(){
    let { tracks } = this.props;
    tracks.map((track)=> {
      return <Track name={track.name} sequence={track.sequence} params={track.params} />
    })
  }

  render(){
    return (
      <div className="tracks">
        {this.renderTracks()}
      </div>
    )
  }
}

function mapStateToProps({ tracks }){
  return { tracks }
}

export default connect(mapStateToProps, { addTrack, removeTrack })(Tracks)
