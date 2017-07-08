import React from 'react'
import PropTypes  from 'prop-types'
import Track from '../containers/track'

let nextTrackId = 0;

const Tracks = ({ tracks, kits, addTrack }) => {

  let { kitData, kitId } = kits
  console.log('kitData[kitId]', kitData[kitId])
  //let { voices } = kitData[kitId].voices
  // let mutedTracks = tracks.filter(t => t.mute)
  // console.log('mutedTracks', mutedTracks)
  // let soloedTracks = tracks.filter(t => t.solo)
  // console.log('soloedTracks', soloedTracks)
  return (
    <ul className="tracks">
      <li className="track">
        <a className='addTrackBtn' href='#' onClick={ () => addTrack({id: nextTrackId++}) }>+</a> ADD TRACK
      </li>
      {tracks.map((track, i) => <Track key={i} track={track} voices={ kitData[kitId] ? kitData[kitId].voices : [] }/>)}

    </ul>
  )

}

Tracks.propTypes = {

}

export default Tracks
