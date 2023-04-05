import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function EditBlogForm(props) {
    const [image_url, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [news, setNews] = useState('');
    const [user_id, setUserId] = useState('');
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        fetch(`/blogs/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            setImageUrl(data.image_url)
            setTitle(data.title)
            setNews(data.news)
            setUserId(data.user_id)
        })
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        const blogDetails = {image_url, title, news, user_id}
    
        fetch(`/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogDetails)
        }).then((res)=> {
            if(res.ok){
                alert("successfully updated!")
            navigate('/blogs')
            return res.json().then((blog)=> console.log(blog))
            } else{
                alert("Unauthorized! Only the owner of this blog can edit it.")
            }
            
        })
      }

  return (
    <div className="container" style={{minHeight: "100vh"}}>
        <form onSubmit={handleSubmit}>
            <div className="form-group my-5" >
                <span>
                    Image URL:
                </span>
                <input type="text" className='form-control' value={image_url} onChange={(event) => setImageUrl(event.target.value)} />
            </div>

            <div className="form-group my-5">
                <span>
                    Title:
                </span>
                <input type="text" className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            
            <div className="form-group my-5">
                <span>
                    News:
                </span>
                <textarea value={news} className='form-control' style={{height: "15rem"}} onChange={(event) => setNews(event.target.value)} />
            </div>

            
                <input type="hidden" value={user_id} onChange={(event) => setUserId(event.target.value)} />
            
            <button className='btn btn-primary my-2' type="submit">Edit Blog</button>
        </form>
    </div>
  );
}

export default EditBlogForm;
