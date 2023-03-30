import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateBlog({ userId, blogId }) {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (blogId) {
      axios.get(`https://your-api.com/blogs/${blogId}.json`)
        .then(response => {
          setBlogData(response.data);
          setImageUrl(response.data.image_url);
          setTitle(response.data.title);
          setNews(response.data.news);
        })
        .catch(error => console.log(error));
    }
  }, [blogId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the blog data to your backend API here
    // You can access the values using the state variables above
    const blogData = {
      image_url: imageUrl,
      title: title,
      news: news,
      user_id: userId,
    };

    if (blogId) {
      axios.patch(`https://your-api.com/blogs/${blogId}.json`, blogData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    } else {
      axios.post(`https://your-api.com/blogs.json`, blogData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        News:
        <textarea value={news} onChange={(event) => setNews(event.target.value)} />
      </label>
      {blogData && (
        <input type="hidden" name="blog_id" value={blogData.id} />
      )}
      <button type="submit">{blogId ? 'Update Blog' : 'Create Blog'}</button>
    </form>
  );
}

export default UpdateBlog;
