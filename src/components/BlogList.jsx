import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(()=>{
        fetch("/blogs")
        .then((res)=> {
            return res.json()
        })
        .then((res)=> {
            console.log(res)
            return setBlogs(res)
        })
    },[])
    return ( 
        <div className="container">
            {
                blogs.map((blog)=>{
                   return(
                    <div key={blog.id} className="card m-3 p-3 text-bg-dark shadow" style={{maxWidth: "80vw", height: "18rem"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={blog.image_url} className="img-fluid rounded-start" alt="photo"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <p className="card-text">{blog.news.substring(0, 250)}...</p>
                                        <p className="card-text"><small>Last updated {blog.updated_at}</small></p>
                                        <button onClick={() => {
                                        navigate(`/blogs/${blog.id}`);
                                    }} className="btn btn-info">Details</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                   )
                })
            }
        </div>
     );
}
 
export default BlogList;