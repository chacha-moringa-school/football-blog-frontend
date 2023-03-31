import React, { useState } from 'react';
import axios from 'axios';

function EditBlogForm(props) {
  const [blogData, setBlogData] = useState({
    title: props.title,
    news: props.news,
    user_id: props.user_id,
    image_url: props.image_url
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.patch(`/blogs/${props.id}`, blogData)
      .then(res => {
        console.log(res);

      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={blogData.title} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="news">News</label>
        <textarea id="news" name="news" value={blogData.news} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="user_id">User ID</label>
        <input type="text" id="user_id" name="user_id" value={blogData.user_id} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="image_url">Image URL</label>
        <input type="text" id="image_url" name="image_url" value={blogData.image_url} onChange={handleInputChange} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditBlogForm;
