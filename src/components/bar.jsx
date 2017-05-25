import React, {PropTypes, Component} from 'react'
import styles from '../css/notation.scss'
import Beat from './beat'


class Bar extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> bar PROPS', this.props)
  }
  renderBeats(){
    let { bar, sig } = this.props;
    let numBeats = sig[0] === 3 ? 3 : 4;
    for (let i=0;i<numBeats;i++){
      //console.log('>>> beat ID', 'beat_'+(bar*numBeats)+i)
      return <Beat key = {'beat_'+(bar*numBeats)+i} />
    }
  }
  render(){
    return (
      <ul className='beat'>
        {renderBeats()}
      </ul>
    )
  }
}

export default Bar
