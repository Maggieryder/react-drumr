import React, {PropTypes, Component} from 'react'
import styles from '../css/notation.scss'
import Note from './note'


class Beat extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }
  renderNotes(){
    let { beat, resolution } = this.props;
    let numNotes = resolution === 16 ? 4 : 3;
    for (let i=0;i<numNotes;i++){
      //console.log('>>> note ID', beat*numNotes+i)
      return <Note key = {beat*numNotes+i} />
    }
  }
  render(){
    return (
      <li>
        <ul className='beat'>
          {renderNotes()}
        </ul>
      </li>
    )
  }
}

export default Beat
