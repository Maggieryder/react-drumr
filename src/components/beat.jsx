import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Note from './note'
import { connect } from 'react-redux'


class Beat extends Component {
  constructor(props) {
    super(props);
  }
  renderNotes(){
    let { resolution } = this.props.controller;
    let { trackId, bar, stepId, sequence, drumr } = this.props

    let numNotes = resolution === 16 ? 4 : 3;
    let notes = []
    for (let i=0;i<numNotes;i++){
      // console.log('>>> note ID', stepId*numNotes+i)
      notes.push(<Note key={stepId*numNotes+i} id={stepId*numNotes+i} drumr={drumr} bar={bar} trackId={trackId} sequence={sequence}/>)
    }
    return notes
  }
  render(){
    return (
      <li>
        <ul className='beat'>
          {this.renderNotes()}
        </ul>
      </li>
    )
  }
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)(Beat)
