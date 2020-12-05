import React, { Component } from 'react';
import Section1 from './Section-1.js';
import Section2 from './Section-2.js';
import EyeAnimation from './EyeAnimation'

class Main extends Component {
  render() {
    return (
      <div className="Main" id="main">
        <div className="Main-header">
          <h1>Main</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida libero interdum scelerisque lobortis. Suspendisse potenti. Etiam et nisl consectetur neque maximus tempus. Nam in imperdiet diam. Donec id scelerisque est, vitae bibendum felis. Quisque ut sem luctus, sodales massa a, auctor ligula. Fusce porttitor risus at sem facilisis consectetur. Quisque varius sit amet ipsum in feugiat.</p>

          <p>Curabitur vel lacus a urna accumsan scelerisque. Mauris ac mollis justo. Integer dignissim risus leo, nec imperdiet ex consequat quis. Suspendisse ante nunc, porta in imperdiet a, pellentesque vel tortor. Nullam tristique faucibus libero, nec laoreet mauris sollicitudin et. Nunc dictum magna non tempus ultricies. Etiam non sagittis leo. Pellentesque scelerisque ut diam sit amet sollicitudin. Proin egestas turpis feugiat ultrices vehicula.</p>
        </div>
        <EyeAnimation />
        <div className="Main-sections" id="sections">
          <Section1 />
          <Section2 />
        </div>
      </div>
    )
  }
}

export default Main
