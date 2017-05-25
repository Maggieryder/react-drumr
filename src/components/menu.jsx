import React, {PropTypes, Component} from 'react'
import styles from '../css/menu.scss'


class Menu extends Component {
  render(){
    return (
      <nav className={styles.menu}>
        <h1>Navigation</h1>
        <h1 className={styles.red}>RedNavigation</h1>
        <ul>
          <li>one</li>
          <li className={styles.red}>two</li>
          <li>three</li>
        </ul>
      </nav>
    )
  }
}

export default Menu
