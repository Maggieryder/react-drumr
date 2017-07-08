import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Bar from './bar'
import { connect } from 'react-redux'


class Sequence extends Component {
  constructor(props) {
    super(props);
  }
  renderBars(){
    let { numBars, barId } = this.props.controller
    let { trackId, sequence } = this.props
    let bars = []
    for (let i=0;i<numBars;i++){
      console.log('>>> bar ID', i===barId)
      bars.push(<Bar key={'bar_'+i} id={'bar_'+i} trackId={trackId} cname={i===barId ? ' active' : ''} sequence={this.props.sequence[i]}/>)
    }
    return bars
    //return <Bar key={'bar_'+barId} id={'bar_'+barId} trackId={trackId} sequence={sequence[barId]}/>
  }
  componentWillReceiveProps(props){
    console.log('>>> Sequence componentWillReceiveProps PROPS', props.sequence)
  }

  render(){
    let { barId } = this.props.controller
    let { trackId, sequence } = this.props
    return (
      <ul className='sequence'>
        {this.renderBars()}
      </ul>
    )
  }
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)( Sequence )
