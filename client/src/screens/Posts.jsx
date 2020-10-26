import React from "react";
import PostEdit from "./PostEdit";
import { Link } from "react-router-dom";
import Comments from "./Comments"
export default function Posts(props) {
  const { posts, setPosts, handleDelete } = props;
  console.log(posts);
//should have a handle edit function
  return (
    <div className="posts">

      {posts.map((post) => (
        <div className="post-container" key={post.id}>
          <i class='fa fa-user-circle'></i>
          <Link to={`/posts/${post.id}`}>
          <p>{post.username}</p><br/>
            <img src={post.img_url} /><br/><br/><br/>
          </Link>
          <div className="fa-and-title"><i class='fa fa-user-circle'></i><p className="post-title">{post.title}</p></div>
          <p className="post-tags">#{post.tag.category}</p>
          
          <PostEdit postId={post.id} posts={posts} setPosts={setPosts} handleDelete={handleDelete}/>
          <p className="comments-highlight">Comments here:</p><br/><br/><br/>
          <Comments comments={post.comments}/>
          {/* add post.com<Comments />ments here  */}
        </div>
      ))}
    </div>
  );
}
