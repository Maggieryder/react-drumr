import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/main.scss'
import Track from './track'
import { connect } from 'react-redux'
import { addTrack, removeTrack } from '../actions'


let nextTrackId = 0;
let self;

let tArray = [
  {
    name:'kick',
    buffer: {}
  },
  {
    name:'snare',
    buffer: {}
  },
  {
    name:'hi hat',
    buffer: {}
  }
]

class Tracks extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Tracks PROPS', this.props.tracks)
    self = this;
  }

  componentDidMount(){
    let { addTrack } = self.props
    for (let i=0; i <tArray.length; i++){
      addTrack({
        id: nextTrackId++,
        name: tArray[i].name,
        buffer: tArray[i].buffer
      })
    }
  }

  componentWillReceiveProps(props){
    //console.log('>>> Tracks componentWillReceiveProps PROPS', props.tracks)
  }

  render(){
    let { tracks, addTrack } = this.props
    let mutedTracks = tracks.filter(t => t.mute)
    console.log('mutedTracks', mutedTracks)
    let soloedTracks = tracks.filter(t => t.solo)
    console.log('soloedTracks', soloedTracks)
    return (
      <ul className="tracks">
        {tracks.map((track, i) => <Track key={i} track={track}/>)}
        <li><button onClick={() => {addTrack({id: nextTrackId++})}}>+</button></li>
      </ul>
    )
  }
}

function mapStateToProps({ tracks }){
  return { tracks }
}

export default connect(mapStateToProps, { addTrack, removeTrack })(Tracks)
