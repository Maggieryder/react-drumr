import React, {PropTypes, Component} from 'react'
import styles from '../scss/params.scss'
import Options from './options'
import Knob from './knob'
import Switch from './switch'
import { loadImpulse } from '../api/reverb'
import { connect } from 'react-redux'
import { assignReverbId, toggleReverb } from '../actions/index'


class Reverb extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Reverb PROPS', this.props)
  }
  componentWillReceiveProps(props){
    let { reverbOptions, active, reverbId } = props.reverb
    //console.log('componentWillReceiveProps', props)
  }
  onChange(e) {
    let { reverbOptions } = this.props.reverb
    console.log('Reverb onChange value',e.target.value)
    loadImpulse('assets/'+reverbOptions[e.target.value].smpl)
    assignReverbId(e.target.value);
  }
  render(){
    let { active, reverbOptions, reverbId } = this.props.reverb
    return (
      <div className='reverb'>
        <div className='name'>reverb</div>
        <div className='params'>
          <Options id='verbs' options={reverbOptions} isSelected={reverbId} onChange={(e) => {onChange}}/>
        </div>
        <Switch label='on/off' cname={active ? 'on' : null} function={toggleReverb}/>
      </div>
    )
  }
}

Reverb.propTypes = {
  reverb: PropTypes.object.isRequired,
  assignReverbId: PropTypes.func.isRequired,
  toggleReverb: PropTypes.func.isRequired
}
/* picked up from reducer defaults
Reverb.defaultProps = {
  reverb: {
    reverbOptions: {},
    reverbId: 0,
    active: false
  }
}
*/
function mapStateToProps({ reverb }){
  return { reverb }
}

export default connect(mapStateToProps, { assignReverbId, toggleReverb })(Reverb)
