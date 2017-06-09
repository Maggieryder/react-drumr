import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'

class Options extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> bar PROPS', this.props)
  }

  renderOptions(options){
    let {isSelected} = this.props
    options.map((i, opt)=>{
      return <option key={i} value={opt.value} selected={i===isSelected}>{opt.label}</option>
    })
  }

  render(){
    let {id, options, onChange} = this.props
    return (
      <div class="param param-option">
        <select id={id} onChange={onChange}>
          {this.renderOptions(options)}
        </select>
      </div>
    )
  }
}

export default Options
