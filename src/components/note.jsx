import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/notation.scss'
import { connect } from 'react-redux'
import { updateTrackSequence } from '../actions'

class Note extends Component {
  constructor(props) {
    super(props);
    //this.state = {id: this.props.id, on: false}
    //console.log('>>> Note PROPS', this.props)
  }

  render(){

    let { id, sequence, controller, updateTrackSequence } = this.props;

    return (
      <li id={id} className={controller.beatId===id ? 'note now' : sequence[id] === 1 ? 'note on' : 'note'} onClick={()=>{updateTrackSequence(id)}}>
        <div className='status'>
        </div>
      </li>
    )
  }
}

function mapStateToProps({ controller, sequence }){
  return { controller, sequence }
}

export default connect(mapStateToProps, { updateTrackSequence })(Note)
