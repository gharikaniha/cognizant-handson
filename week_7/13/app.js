import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

export const blogs = [
  { id: 1, title: 'React vs Angular', author: 'John' },
  { id: 2, title: 'JS Best Practices', author: 'Sarah' }
];

export const courses = [
  { id: 'c1', name: 'React Basics', duration: '6 weeks' },
  { id: 'c2', name: 'Advanced JavaScript', duration: '8 weeks' }
];

function App() {
  const showCourses = true; // Change to false to test

  return (
    <div>
      <div className="st2">
        <h1>📚 Book Details</h1>
        <BookDetails books={books} />
      </div>

      <div className="v1">
        <h1>📝 Blog Details</h1>
        <BlogDetails blogs={blogs} />
      </div>

      <div className="mystyle1">
        <h1>📘 Course Details</h1>
        {/* Conditional rendering using && */}
        {showCourses && <CourseDetails courses={courses} />}
      </div>
    </div>
  );
}

export default App;
