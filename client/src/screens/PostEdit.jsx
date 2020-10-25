import React, { useState, useEffect } from "react";
import { putPost, destroyPost } from "../services/posts";

export default function PostEdit(props) {
  const { //items being passed down to props
    username: username,
    title: title,
    img_url: img_url,
    posts,
    postId,
    setPosts
  } = props;

  const [formData, setFormData] = useState({
    title: "",
  });

  

  useEffect(() => {
    const prefillFormData = () => {
      const { title } = posts.find((post) => post.id === Number(postId));
      setFormData({ title });
    };
      prefillFormData()
  }, [posts, postId]);

  //   const [post, setPost] = useState({
  //       username: username,
  //       title: title,
  //       img_url: img_url
  //   })

  const handlePostEdit = async (id, post) => {
      console.log(id)
      const postE = await putPost(id, post) 
      //post is variable name / put post is the value
      console.log(postE)
      const updatedPosts = posts.map((post) => {
        return post.id === postE.id ? post = postE : post
      })
      setPosts(updatedPosts) 
  }
  //for handle delete > onclick run handle delete function.
  // the handle delete function should call the destroyPostFunction from posts.js. 
  //made sure I include the posts id in the parameter. 
  // run a filter on all the posts to exclude the destoyed post
  // I would need to store the value of a destroyed post into a var. 
  // Set posts to the variable name which holds the destroyed post.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //   const handleSubmit = async (event) =>{
  //       event.preventDefault()
  //       await putPost(id, posts)
  //       loadUpdate()
  //   }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostEdit(postId, formData);
      }}
    >
      <h3>Edit Post</h3>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Create"/>
      <input type="submit" value="Delete" className="delete-btn" onClick={() => destroyPost(postId)}/>
    </form>
  );
}
