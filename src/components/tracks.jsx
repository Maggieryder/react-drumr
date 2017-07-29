import React from 'react'
import PropTypes  from 'prop-types'
import Track from '../containers/track'

let nextTrackId = 0;

const Tracks = ({ tracks, addTrack, drumr }) => {

  const addNewTrack = (id) => {
    // drumr.addTrack(id)
    addTrack({id:id})
  }
  const soloActive = () => {
    return tracks.filter(t => t.solo).length > 0
  }
  return (
    <ul className="tracks">
      <li className="track">
        <a className='addTrackBtn' href='#' onClick={ () => addNewTrack(nextTrackId++) }>+</a> ADD TRACK
      </li>
      {tracks.map((track, i) => <Track key={i} track={track} drumr={drumr} soloActive={soloActive()}/>)}
    </ul>
  )
}

Tracks.propTypes = {
  addTrack: PropTypes.func.isRequired,
  tracks:   PropTypes.array.isRequired,
  drumr:    PropTypes.object.isRequired
}

export default Tracks
