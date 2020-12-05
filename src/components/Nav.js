import React, { Component } from 'react';
// import logoSm from './../assets/images/adinkra-sm.png';
// import logoLg from './../assets/images/adinkra.png';
import NavBar from './NavBar';
import Logo from './Logo';

class Nav extends Component {
  render() {
    /*
    let winWidth = window.innerWidth;

    const layout1 = <div className="wrapper"><Logo /><NavBar /></div>
    const layout2 = <div className="wrapper"><NavBar /></div>


    let layout = () => {
      // let layout = layout2
      return winWidth <= 645 ? layout === layout1 : layout2

    }

    let logo = layout()
    */

    return (
      <div className="Nav">
        <Logo />
        <NavBar />
      </div>
    )
  }
}

export default Nav

/*
    let logo = logoVis()

    let logoLayout = () => {
      let layout
      return logo ? layout = layout1 : layout2
    }

    let layoutVis = logoLayout()

    console.log(layoutVis)
*/

/*
let winWidth = window.innerWidth;

let logoVis = () => {
  return winWidth <= 645 ? logoVis = false : logoVis = true
}

let logo = logoVis()

const layout1 = '<Logo /><NavBar />'
const layout2 = '<NavBar />'

let logoLayout = (logo) => {
  return logo ? Logo = layout1 : layout2
}

let layout = logoLayout()

return layout

*/

/*
let winWidth = window.innerWidth;

let logoSize = () => {
  return winWidth <= 645 ? logoSize = logoSm : logoSize = logoLg
}

let logo = logoSize()


let imageSize = () => {
  const logoSmall = <img width="2.5em" height="2.5em" src={logo} alt="Logo" />
  const logoLarge = <img width="4.375em" height="4.375em" src={logo} alt="Logo" />
  return logo === logoSm ? logoSmall : logoLarge
}

let img = imageSize()

console.log(img)
*/
