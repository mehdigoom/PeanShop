import React, { Component } from 'react'
import './styles.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import login from './components/login';

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
            <ul>
              <li><Link to="/login/">React</Link></li>
            </ul>
        </header>
    )
  }
}

export default Header
