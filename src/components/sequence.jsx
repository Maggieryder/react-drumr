import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Bar from './bar'

class Sequence extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    // console.log('Sequence did Mount')
    let { trackId, sequence, drumr } = this.props
    // drumr.addTrackSequence(trackId, sequence);
  }
  renderBars(){

    let { trackId, sequence, controller, drumr } = this.props
    let { numBars, barId } = controller
    // let bars = []
    // for (let i=0;i<numBars;i++){
    //   // console.log('>>> bar ID', i===barId)
    //   bars.push(<Bar key={'bar_'+i} id={'bar_'+i} bar={i} trackId={trackId} drumr={drumr} cname={i===barId ? ' active' : ''} sequence={sequence[i]}/>)
    // }
    // return bars
    return <Bar key={'bar_'+barId} id={'bar_'+barId} trackId={trackId} cname='active' drumr={drumr} sequence={sequence[barId]}/>
  }
  componentWillReceiveProps(props){
    let { trackId, sequence, drumr } = props
    // console.log('>>> Sequence componentWillReceiveProps PROPS', sequence)
    // drumr.updateSequence(trackId, sequence);
  }

  render(){

    return (
      <ul className='sequence'>
        {this.renderBars()}
      </ul>
    )
  }
}

Sequence.propTypes = {
  controller:   PropTypes.object.isRequired,
  drumr:    PropTypes.object.isRequired
}

export default Sequence
