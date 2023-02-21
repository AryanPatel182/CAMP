import { useEffect, useState } from "react";
import React from 'react'
import axios from "axios";
export const Student = () => {

  const [students, setstudents] = useState([])

  useEffect(() => {
    async function getAllStudent() {
      try {
        let students = await axios.get("http://127.0.0.1:8000/api/student/")
        console.log(students.data)
        setstudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])

  return (
    <div>
      <h1>Hello To React</h1>
      {
        students.map((student, i) => {
          return (
            <p key={i}>{student.stuname} {student.email}</p>
          )
        })
      }
    </div>
  )
}
