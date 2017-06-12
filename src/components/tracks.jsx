import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import styles from '../scss/main.scss'
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
