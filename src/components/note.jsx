import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { updateTrackSequence } from '../actions'

class Note extends Component {
  constructor(props) {
    super(props);
  }

  onNoteTap(){
    let { id, trackId, controller, sequence, updateTrackSequence, drumr } = this.props;
    let { barId, resolution } = controller
    updateTrackSequence({id:trackId, barId:barId, seqId:id%resolution })
    // console.log('Note', sequence)
    drumr.onNoteTap(trackId)
  }

  render(){

    let { id, trackId, sequence, controller } = this.props;
    let { isPlaying, beatId, resolution } = controller
    // console.log('Note', sequence)
    return (
      <li id={id}
        className={sequence[id%resolution] === 1 ? isPlaying && beatId===id ? 'note now' : 'note on' : 'note'}
        onClick={ () => this.onNoteTap() } >
        <div className='status'>
          <div></div>
        </div>
      </li>
    )
  }
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps, { updateTrackSequence })(Note)
