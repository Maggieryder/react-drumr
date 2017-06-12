import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import styles from '../scss/notation.scss'
import { connect } from 'react-redux'
import { updateTrackSequence } from '../actions/index'

class Note extends Component {
  constructor(props) {
    super(props);
    //this.state = {id: this.props.id, on: false}
    //console.log('>>> Note PROPS', this.props)
  }
  toggleMe(){
    //setState({on: !this.state.on})
    updateTrackSequence(this.state.id);
  }

  render(){

    let { id, sequence, controller } = this.props;

    return (
      <li id={id} className={controller.beatId===id ? 'note now' : sequence[id] === 1 ? 'note on' : 'note'} onClick={()=>{toggleMe}}>
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
