import React from "react";
import Comments from './Comments'
import { Link } from "react-router-dom"

export default function Posts(props) {
  const { posts } = props;
  

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.title}</p>
            <p>{post.username}</p>
            <img src={post.img_url}/>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button>Delete</button>
          <Comments />{/* add post.comments here  */}
        </div>
      ))}
    </div>
  );
}
