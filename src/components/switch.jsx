import React, {PropTypes, Component} from 'react'
import styles from '../css/notation.scss'

class Bar extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> bar PROPS', this.props)
  }

  render(){
    let {label, function} = this.props
    return (
      <div class="checkbox">
        <div class={`switch ${label}`} onClick={function}></div>
        <label>{label}</label>
      </div>
    )
  }
}

export default Bar
