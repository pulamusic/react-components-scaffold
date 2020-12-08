import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <div className="Nav-navbar">
        <a href="#top"><button>top</button></a>
        <a href="#main"><button>main</button></a>
        <a href="#sections"><button>sections</button></a>
        <a href="#bottom"><button>bottom</button></a>
      </div>
    )
  }
}

export default NavBar
