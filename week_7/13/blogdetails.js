import React from 'react';

export default function BlogDetails({ blogs }) {
  // Conditional rendering using ternary
  return blogs.length ? (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </ul>
  ) : (
    <p>No blogs found.</p>
  );
}
