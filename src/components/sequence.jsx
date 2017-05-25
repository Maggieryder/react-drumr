import React, {PropTypes, Component} from 'react'
import styles from '../css/notation.scss'
import Bar from './bar'


class Sequence extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }
  renderBars(){
    let { bars } = this.props;
    for (let i=0;i<bars;i++){
      //console.log('>>> bar ID', 'bar_'+i)
      return <Bar key = {'bar_'+i} />
    }
  }
  render(){
    return (
      <ul className='bar'>
        {renderBars()}
      </ul>
    )
  }
}

export default Sequence
