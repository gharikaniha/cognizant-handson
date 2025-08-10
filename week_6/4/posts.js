
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Lifecycle Hook: componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Method to fetch posts
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postList = data.slice(0, 10).map(
          post => new Post(post.id, post.title, post.body)
        );
        this.setState({ posts: postList });
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
      });
  }

  // Error Handling Hook
  componentDidCatch(error, info) {
    console.error("Caught error:", error, info);
    alert("An error occurred while displaying posts.");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
