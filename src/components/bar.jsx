import React, {Component} from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/notation.scss'
import Beat from './beat'
import { connect } from 'react-redux'

class Bar extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Bar PROPS', this.props.sequence)
  }
  renderBeats(){
    let { barId, signature } = this.props.controller
    let { trackId } = this.props
    let numBeats = signature[0]
    let beats = []
    for (let i=0;i<numBeats;i++){
      //console.log('>>> beat ID', 'beat_'+(barId*numBeats)+i)
      beats.push(<Beat key={'beat_'+(barId*numBeats)+i} trackId={trackId} beatId={(barId*numBeats)+i} sequence={this.props.sequence}/>)
    }
    return beats
  }
  render(){
    let { barId, signature } = this.props.controller;
    let numBeats = signature[0];
    return (
      <li className={this.props.cname}>
        <ul className='bar'>
          {this.renderBeats()}
        </ul>
      </li>
    )
  }
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)(Bar)
