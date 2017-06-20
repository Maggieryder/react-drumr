import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/notation.scss'
import Bar from './bar'
import { connect } from 'react-redux'


class Sequence extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Sequence PROPS', this.props.sequence)
  }
  renderBars(){
    let { numBars, barId } = this.props.controller
    let { trackId } = this.props
    let bars = []
    //for (let i=0;i<numBars;i++){
      //console.log('>>> bar ID', i===barId)
      //bars.push(<Bar key={'bar_'+i} id={'bar_'+i} trackId={trackId} cname={i===barId ? 'active' : ''} sequence={this.props.sequence[i]}/>)
    //}
    //return bars
    return <Bar key={'bar_'+barId} id={'bar_'+barId} trackId={trackId} sequence={this.props.sequence[barId]}/>
  }
  componentWillReceiveProps(props){
    console.log('>>> Sequence componentWillReceiveProps PROPS', props.sequence)
  }

  render(){
    let { barId } = this.props.controller
    let { trackId } = this.props
    return (
      <ul className='sequence'>
        <Bar key={'bar_'+barId} id={'bar_'+barId} trackId={trackId} sequence={this.props.sequence[barId]}/>
      </ul>
    )
  }
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)( Sequence )
