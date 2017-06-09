import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'

class Switch extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Switch PROPS', this.props)
  }

  render(){
    let {label, cname, function} = this.props
    return (
      <div className="checkbox">
        <div className={`switch ${cname}`} onClick={function}></div>
        <label>{label}</label>
      </div>
    )
  }
}

export default Switch
