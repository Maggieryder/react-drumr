import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'

class Options extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> bar PROPS', this.props)
  }

  renderOptions(options){
    options.map((i, opt)=>{
      return <option key={i} value={opt.value} selected>{opt.label}</option>
    })
  }

  render(){
    let {id, options} = this.props
    return (
      <div class="param param-option">
        <select id={id}>
          {this.renderOptions(options)}
        </select>
      </div>
    )
  }
}

export default Options
