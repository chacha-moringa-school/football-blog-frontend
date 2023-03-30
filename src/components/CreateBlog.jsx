import React, { useState } from 'react';

function CreateBlog() {
  const [image_url, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [user_id, setUserId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogDetails = {image_url, title, news, user_id}

    fetch('/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogDetails)
    }).then((res)=> res.json()).then((blog)=> console.log(blog))
  }

  return (
    <div className="container" style={{minHeight: "100vh"}}>
        <form onSubmit={handleSubmit}>
        <label>
            Image URL:
            <input type="text" value={image_url} onChange={(event) => setImageUrl(event.target.value)} />
        </label>
        <label>
            Title:
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
            News:
            <textarea value={news} onChange={(event) => setNews(event.target.value)} />
        </label>
        
            <input type="hidden" value={user_id} onChange={(event) => setUserId(event.target.value)} />
        
        <button type="submit">Create Blog</button>
        </form>
    </div>
  );
}

export default CreateBlog;
