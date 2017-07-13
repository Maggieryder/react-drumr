import React from 'react'
import PropTypes  from 'prop-types'
import Track from '../containers/track'

let nextTrackId = 0;

const Tracks = ({ tracks, addTrack, drumr }) => {

  // let mutedTracks = tracks.filter(t => t.mute)
  // console.log('mutedTracks', mutedTracks)
  // let soloedTracks = tracks.filter(t => t.solo)
  // console.log('soloedTracks', soloedTracks)

  const addNewTrack = (id) => {
    drumr.addTrack(id)
    addTrack({id:id})
  }
  return (
    <ul className="tracks">
      <li className="track">
        <a className='addTrackBtn' href='#' onClick={ () => addNewTrack(nextTrackId++) }>+</a> ADD TRACK
      </li>
      {tracks.map((track, i) => <Track key={i} track={track} drumr={drumr} />)}
    </ul>
  )
}

Tracks.propTypes = {
  addTrack: PropTypes.func.isRequired,
  tracks:   PropTypes.array.isRequired,
  drumr:    PropTypes.object.isRequired
}

export default Tracks
