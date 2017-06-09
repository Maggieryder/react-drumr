import React, {PropTypes, Component} from 'react'
import styles from '../scss/params.scss'

class Switch extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Switch PROPS', this.props)
  }

  render(){
    let {label, cname, onClick} = this.props
    return (
      <div className="checkbox">
        <div className={`switch ${cname}`} onClick={onClick}></div>
        <label>{label}</label>
      </div>
    )
  }
}

export default Switch
