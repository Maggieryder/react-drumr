import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/main.scss'
import Track from './track'
import { connect } from 'react-redux'
import { addTrack, removeTrack } from '../actions'


let nextTrackId = 0;

class Tracks extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Tracks PROPS', this.props)
  }

  renderTracks(){
    let { tracks } = this.props;
    return tracks.map((track, i) => {
      console.log('### TRACK', track)
      return <Track key={i} id={i} name={track.name} />
    })
  }

  render(){
    return (
      <div className="tracks">
        {this.props.tracks.map( (track, i) => <Track key={i} id={i}/>)}
      </div>
    )
  }
}

function mapStateToProps({ tracks }){
  return { tracks }
}

export default connect(mapStateToProps, { addTrack, removeTrack })(Tracks)
