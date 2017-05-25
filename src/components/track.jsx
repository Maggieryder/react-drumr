import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'
import Sequence from './sequence'


class Track extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }
  renderParams(){

  }
  renderSequence(){

  }
  render(){
    return (
      <div class="track">
        <div class="name">{name}</div>
        <div class="params">
          {renderParams()}
        </div>
        <div class="sequence">
          {renderSequence()}
        </div>
      </div>
    )
  }
}

export default Track
