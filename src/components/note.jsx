import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { updateTrackSequence } from '../actions'

class Note extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    let { id, trackId, sequence, controller, updateTrackSequence } = this.props;
    let { isPlaying, barId, beatId, resolution } = controller
    return (
      <li id={id}
        className={sequence[id%resolution] === 1 ? isPlaying && beatId===id ? 'note now' : 'note on' : 'note'}
        onClick={ ()=> updateTrackSequence({id:trackId, barId:barId, seqId:id%resolution }) } >
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
