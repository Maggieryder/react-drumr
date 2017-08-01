import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Bar from './bar'

class Sequence extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    // console.log('Sequence did Mount')
    let { trackId, sequences, drumr } = this.props
    // drumr.addTrackSequence(trackId, sequence);
  }
  renderBars(){

    let { trackId, sequences, controller, drumr } = this.props
    console.log('SEQ JSX sequences', sequences.byHash)
    console.log('trackId', trackId)
    let { numBars, barId } = controller
    let sequence = sequences.byHash[trackId]
    console.log('>>>>>>>> SEQ sequence', sequence)
    // let bars = []
    // for (let i=0;i<numBars;i++){
    //   // console.log('>>> bar ID', i===barId)
    //   bars.push(<Bar key={'bar_'+i} id={'bar_'+i} bar={i} trackId={trackId} drumr={drumr} cname={i===barId ? ' active' : ''} sequence={sequence[i]}/>)
    // }
    // return bars
    return <Bar key={'bar_'+barId} id={'bar_'+barId} trackId={trackId} cname='active' drumr={drumr} sequence={sequence[barId]}/>
  }
  componentWillReceiveProps(props){
    let { trackId, sequences, drumr } = props
    let sequence = sequences[trackId]
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
  sequences: PropTypes.object.isRequired,
  drumr:    PropTypes.object.isRequired
}

export default Sequence
