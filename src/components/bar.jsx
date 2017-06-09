import React, {PropTypes, Component} from 'react'
import styles from '../scss/notation.scss'
import Beat from './beat'
import { connect } from 'react-redux'

class Bar extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Bar PROPS', this.props)
  }
  renderBeats(){
    let { barId, signature } = this.props.controller;
    let numBeats = signature[0];
    for (let i=0;i<numBeats;i++){
      //console.log('>>> beat ID', 'beat_'+(bar*numBeats)+i)
      return <Beat key={'beat_'+(barId*numBeats)+i} beatId={(barId*numBeats)+i} />
    }
  }
  render(){
    return (
      <li>
        <ul className='bar'>
          {renderBeats()}
        </ul>
      </li>
    )
  }
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)(Bar)
