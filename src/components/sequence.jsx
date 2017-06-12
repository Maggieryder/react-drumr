import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import styles from '../scss/notation.scss'
import Bar from './bar'
import { connect } from 'react-redux'


class Sequence extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Sequence PROPS', this.props)
  }
  renderBars(){
    let { bars } = this.props.controller;
    for (let i=0;i<bars;i++){
      //console.log('>>> bar ID', 'bar_'+i)
      return <Bar key = {'bar_'+i} id= {'bar_'+i} />
    }
  }
  render(){
    return (
      <ul className='sequence'>
        {renderBars()}
      </ul>
    )
  }
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)( Sequence )
