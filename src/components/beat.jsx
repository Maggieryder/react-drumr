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
    let { trackId, beatId, sequence, drumr } = this.props
    
    let numNotes = resolution === 16 ? 4 : 3;
    let notes = []
    for (let i=0;i<numNotes;i++){
      //console.log('>>> note ID', beatId*numNotes+i)
      notes.push(<Note key={beatId*numNotes+i} id={beatId*numNotes+i} drumr={drumr} trackId={trackId} sequence={sequence}/>)
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
