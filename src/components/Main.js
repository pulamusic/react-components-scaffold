import React, { Component } from 'react'
import Section1 from './Section-1.js'
import Section2 from './Section-2.js'
import EyeAnimation from './EyeAnimation'
import Students from './Students'
import SectionDiv from './SectionDiv'
import sunRa from './../assets/images/sunRa.jpg'

class Main extends Component {
  render() {
    return (
      <div className="Main" id="main">

        <div className="Main-header">
          <SectionDiv url={"#sections"} />
          <h1>The...Man</h1>
          <figure>
            <img src={sunRa} alt="Sun Ra" />
            <figcaption>Sun Ra</figcaption>
          </figure>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida libero interdum scelerisque lobortis. Suspendisse potenti. Etiam et nisl consectetur neque maximus tempus. Nam in imperdiet diam. Donec id scelerisque est, vitae bibendum felis. Quisque ut sem luctus, sodales massa a, auctor ligula. Fusce porttitor risus at sem facilisis consectetur. Quisque varius sit amet ipsum in feugiat.</p>

          <p>Curabitur vel lacus a urna accumsan scelerisque. Mauris ac mollis justo. Integer dignissim risus leo, nec imperdiet ex consequat quis. Suspendisse ante nunc, porta in imperdiet a, pellentesque vel tortor. Nullam tristique faucibus libero, nec laoreet mauris sollicitudin et. Nunc dictum magna non tempus ultricies. Etiam non sagittis leo. Pellentesque scelerisque ut diam sit amet sollicitudin. Proin egestas turpis feugiat ultrices vehicula.</p>

        </div>
        <Students />
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

/*
<ul>
  {
    students.map(student => <li>{student.name} is {student.age} years old and has a {student.gpa} GPA at {student.school}.</li>)
  }
</ul>



{
  students.forEach(student => {
    const text = `${student.name} is ${student.age} years old and has a ${student.gpa} GPA at ${student.school}.`
    let listText = `<li>${text}</li>`
    return listText
  })
}
*/
