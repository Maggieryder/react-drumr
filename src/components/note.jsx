import React, {PropTypes, Component} from 'react'
import styles from '../css/notation.scss'
//import {updateSequence} from ../actions/sequencer.js


class Note extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> note PROPS', this.props)
  }
  updateSequence(){

  }
  render(){
    let { on, now } = this.props;
    return (
      <li className={now ? 'note now' : on ? 'note on' : 'note'} onClick={this.updateSequence}>
        <div className='status'>
        </div>
      </li>
    )
  }
}

export default Note
