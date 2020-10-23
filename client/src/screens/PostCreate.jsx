import React, {useState} from 'react';

export default function PostCreate(props) {
    const [formData, setFormData] = useState({
        username: '',
        title: '',
        img_url: ''
      })
      const { handlePostCreate } = props;
      const handleChange = (e) => {
        const { username, value } = e.target;
        setFormData({ [username]: value })
      }
    
    return (
        <div className="newpost">
             <form onSubmit={(e) => {
      e.preventDefault();
      handlePostCreate(formData);
    }}>
      <h3>Create Post</h3>
      <label>
        Username:
        <input
          type="text"
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
        </div>
    );
};

