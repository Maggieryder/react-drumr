import React from 'react'
import PropTypes  from 'prop-types'
import Track from '../containers/track'

let nextTrackId = 0;

const Tracks = ({ tracks, kits, addTrack, drumr }) => {

  let { kitData, kitId, buffers } = kits
  // console.log('TRACKSSSS',buffers)
  // if (kitData[kitId]) drumr.loadBuffers(kitData[kitId], assignBuffers )
  // let { voices } = kitData[kitId].voices
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
      {tracks.map((track, i) => <Track key={i} track={track} drumr={drumr} buffers={buffers} voices={ kitData[kitId] ? kitData[kitId].voices : [] }/>)}

    </ul>
  )

}

Tracks.propTypes = {

}

export default Tracks
