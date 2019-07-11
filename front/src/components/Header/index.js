import React, { Component } from 'react'
import './styles.scss'

class Header extends Component {
  render() {
    return (
        <header>
            <nav>
                <hr />
                <hr />
                <span>PEAN'SHOP</span>
            </nav>
            <br/>
              <a href='/'>Se connecter</a>
        </header>
    )
  }
}

export default Header
