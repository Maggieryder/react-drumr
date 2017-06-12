import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Menu from './menu.jsx'
import styles from '../css/container.css'

import img from '../../assets/images/art.png'

class Container extends Component {
  render() {
    return(
      <div className={styles}>
        <Menu/>
        <h1>Hello World!</h1>
        <img src={img} width="100" height="150" />
      </div>
    );
  }
}

export default Container
