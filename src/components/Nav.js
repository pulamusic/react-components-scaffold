import React, { Component } from 'react'
import NavBar from './NavBar'
import Logo from './Logo'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Logo />
        <NavBar />
      </div>
    )
  }
}

export default Nav
