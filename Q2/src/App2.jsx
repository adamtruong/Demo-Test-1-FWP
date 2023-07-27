import React from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const studentsData = [
  { id: 1, name: 'Alice', GPA: 3.2 },
  { id: 2, name: 'Bob', GPA: 2.4 },
  { id: 3, name: 'Carol', GPA: 1.8 },
  { id: 4, name: 'Truong', GPA: 3.9 }
];

const getGrade = (GPA) => {
  return ((GPA < 2) ? "NN" : (GPA >= 2 && GPA < 3) ? "OK" : "HD");
};

const App2 = () => {
  return (
    <div className="container mt-4">
      <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>GPA</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {studentsData.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.GPA}</td>
            <td>{getGrade(student.GPA)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default App2;  



