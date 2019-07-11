import React, { Component } from 'react'
import './styles.scss'

class Header extends Component {

  togglePoppin = () => {
    this.setState({
      displayModal: !this.state.displayModal
    })
  }

  render() {
    return (
        <header>
            <nav>
                <hr />
                <hr />
                <span>PEAN'SHOP</span>
            </nav>
            <br/>
              <span className='button' onClick={this.props.onLogin}>Se connecter</span>
        </header>
    )
  }
}

export default Header
