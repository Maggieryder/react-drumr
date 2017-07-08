import React, {Component} from 'react'
import PropTypes  from 'prop-types'
import Beat from './beat'
import { connect } from 'react-redux'

class Bar extends Component {
  constructor(props) {
    super(props);
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
    return (
      <li className={`bar${this.props.cname}`}>
        <ul>
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
