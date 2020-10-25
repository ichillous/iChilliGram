import React from "react";
import PostEdit from "./PostEdit";
import { Link } from "react-router-dom";

export default function Posts(props) {
  const { posts, setPosts } = props;
  console.log(posts);
//should have a handle edit function
  return (
    <div className="posts">

      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.username}</p>
            <img src={post.img_url} />
          </Link>
          <p>{post.title}</p>
          <Link to={`/post/${post.id}/edit`}>
            <button>Edit</button>
          </Link>
          <PostEdit postId={post.id} posts={posts} setPosts={setPosts}/>
          
          {/* add post.com<Comments />ments here  */}
        </div>
      ))}
    </div>
  );
}
