import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { putPost } from "../services/posts"

export default function PostEdit(props) {

const {
    username: username,
    title: title,
    img_url: img_url,
    handlePostEdit, 
    posts,
    loadUpdate
} = props
  const [formData, setFormData] = useState({
    title: ''
  });
  
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const { title } = posts.find((post) => post.id === Number(id));
      setFormData({ title });
    }
    // if (posts.length) {
    //   prefillFormData()
    // } return to this shit
  }, [posts, id]);

  const handleChange = (e) => {
    const { title, value } = e.target;
    setPost({ ...post, [title]: value });
  };
  const [post, setPost] = useState({
      username: username,
      title: title,
      img_url: img_url
  })
//   const handleSubmit = async (event) =>{
//       event.preventDefault()
//       await putPost(id, posts)
//       loadUpdate()
//   }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostEdit(id, formData);
      }}
    >
      <h3>Edit Post</h3>
      <label>
        Title:
        <input
          type="text"
          name="name"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
      <button>Delete</button>
    </form>
  );
}
