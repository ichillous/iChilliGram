import React, { useState } from "react";
import { postPost } from "../services/posts";

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    img_url: "",
    tag_id: ""
  });
  const { handlePostCreate, tags } = props;

  //   const handlePostCreate = async (id, post) => {
  //       const postC = await postPost(id, post)
  //       const newPosts = posts.map((post) => {
  //           return post.id === postC.id ? post = postC : post
  //       })
  //       setFormData(newPosts)
  //   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="newpost">
      <form onSubmit={(e) => {
          e.preventDefault();
          handlePostCreate(formData);
        }}
      >
        <h3>Create Post</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          Image URL:
          <input
            type="text"
            name="img_url"
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <select onChange={handleChange} name="tag_id" defaultValue="default">
            <option disabled value="default">--Select a Tag--</option>
            {tags.map((tag) => (
                <option value={tag.id}>{tag.category}</option>
            ))}
        </select>
        <button className="create-btn">Post</button>
      </form>
    </div>
  );
}
