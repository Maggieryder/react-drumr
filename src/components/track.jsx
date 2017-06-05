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
      <div className="track">
        <div className="name">{name}</div>
        <div className="params">
          {renderParams()}
        </div>
        <div className="sequence">
          {renderSequence()}
        </div>
      </div>
    )
  }
}

export default Track
