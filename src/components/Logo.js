import React, { Component } from 'react'
import logoLg from './../assets/images/adinkra.png';

class Logo extends Component {
  render() {
    return (
      <div className="Nav-logo">
        <a href="/">
          <img src={logoLg} alt="Logo" width="4.375em" height="4.375em" />
        </a>
      </div>
    )
  }
}

export default Logo
