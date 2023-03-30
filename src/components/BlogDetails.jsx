import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const [blog, setBlog] = useState([])
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/blogs/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            return setBlog(data)
        })
    },[])

    const handleDeleteBlog = ()=>{
        fetch(`/blogs/${blog.id}`, {
            method: 'DELETE'
        })
        .then((res)=>{
            navigate('/blogs')
            return res.json()})
        .then((data)=>{console.log(data)})
    }
    return (
        <div className="container" style={{minHeight: "100vh"}}>
            <div className="col-md-6">
                <img src={blog.image_url} className="img-fluid rounded" alt="image" style={{height: "50vh", width: "100vw"}} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p className="card-text">{blog.news}</p>
                    <p className="card-text"><small>Last updated {blog.updated_at}</small></p>
                </div>
            </div>
            <div className="mt-5">
                <button className="me-5 btn btn-primary">Edit</button>
                <button onClick={handleDeleteBlog} className="ms-5 btn btn-danger">Delete</button>
            </div>
        </div>
    );
}
 
export default BlogDetails;