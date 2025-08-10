import React from 'react';

export default function CourseDetails({ courses }) {
  // Early return (prevents rendering)
  if (!courses.length) return null;

  return (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>Duration: {course.duration}</p>
        </div>
      ))}
    </ul>
  );
}
