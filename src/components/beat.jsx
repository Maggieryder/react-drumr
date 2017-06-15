import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/notation.scss'
import Note from './note'
import { connect } from 'react-redux'


class Beat extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }
  renderNotes(){
    let { resolution } = this.props.controller;
    let beat = this.props.beatId
    let numNotes = resolution === 16 ? 4 : 3;
    for (let i=0;i<numNotes;i++){
      //console.log('>>> note ID', beat*numNotes+i)
      return <Note key={beat*numNotes+i} id={beat*numNotes+i}/>
    }
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
