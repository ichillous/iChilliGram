import React from "react";
import { Link } from "react-router-dom"

export default function Posts(props) {
  const { posts } = props;
  

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.name}</p>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
