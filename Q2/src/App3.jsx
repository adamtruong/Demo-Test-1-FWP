import React from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const initialCourses = [
    { id: 1, name: 'Full Stack Development', score: 2 },
    { id: 2, name: 'Algorithms', score: 3 },
    { id: 3, name: 'Database Applications', score: 4 },
    { id: 4, name: 'Truong Course', score: 5 },
  ];
  
  const App3 = () => {
    const [courses, setCourses] = useState(initialCourses);
    const [courseName, setCourseName] = useState('');
    const [courseScore, setCourseScore] = useState('');
  
    const handleAddCourse = () => {
      if (courseName.trim() !== '' && !isNaN(courseScore) && courseScore !== '') {
        const newCourse = {
          id: courses.length + 1,
          name: courseName,
          score: Number(courseScore),
        };
        setCourses([...courses, newCourse]);
        setCourseName('');
        setCourseScore('');
      }
    };
  
    const handleDeleteCourse = (id) => {
      const updatedCourses = courses.filter((course) => course.id !== id);
      setCourses(updatedCourses);
    };
  
    const calculateAverageScore = () => {
      const totalScores = courses.reduce((sum, course) => sum + course.score, 0);
      return (totalScores / courses.length).toFixed(2);
    };
  
    return (
      <div>
        <h2>Learning Result</h2> <br />
        <div className="container mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Course name</th>
              <th>Score</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.score}</td>
                <td>
                  <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> <br />
        </div>
        <p>Average Score: {calculateAverageScore()}</p>
  
        <div>
          <input
            style={{margin: "10px"}}
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <input
            style={{margin: "10px"}}
            type="text"
            placeholder="Enter course score"
            value={courseScore}
            onChange={(e) => setCourseScore(e.target.value)}
          />
          <button onClick={handleAddCourse}>Add</button>
        </div>
      </div>
    );
  };
  
  export default App3;