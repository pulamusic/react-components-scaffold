import React, { Component } from 'react'
import students from './../assets/js/students.js'

class Students extends Component {
  render() {
    function ListStudents(props) {
      const students = props.students;
      const listStudents = students.map((student) =>
        <li>{student.name} is {student.age} years old and has a {student.gpa} GPA at <strong>{student.school}</strong>.</li>
      )
      return (
        <ul>{listStudents}</ul>
      )
    }

    return (
      <div className="Main-students" id="students">
        <header>
          <h1>Sentences generated from an array of students</h1>
        </header>
        <div className="list">
          <ListStudents students={students} />
        </div>
      </div>
    )
  }
}

export default Students
