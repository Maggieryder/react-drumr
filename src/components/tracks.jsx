import React from 'react'
import PropTypes  from 'prop-types'
import Track from '../containers/track'

let nextTrackId = 0;

const Tracks = ({ tracks, kits, addTrack }) => {

  let { kitData, kitId } = kits
  console.log('kitData[kitId]', kitData[kitId])
  // let mutedTracks = tracks.filter(t => t.mute)
  // console.log('mutedTracks', mutedTracks)
  // let soloedTracks = tracks.filter(t => t.solo)
  // console.log('soloedTracks', soloedTracks)
  return (
    <ul className="tracks">
      {tracks.map((track, i) => <Track key={i} track={track}/>)}
      <li><button onClick={() => {addTrack({id: nextTrackId++})}}>+</button></li>
    </ul>
  )

}

Tracks.propTypes = {

}

export default Tracks
