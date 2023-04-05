import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

const BlogList = ({userSignedIn}) => {
    const [blogs, setBlogs] = useState([])
    const [likedBlogIds, setLikedBlogIds] = useState([]);
    const [comment, setComment] = useState('');
    let navigate = useNavigate();
    let { id } = useParams();



    // fetch likes
    // useEffect(() => {
    //     axios.get('/likes').then(response => {
    //       setLikedBlogIds(response.data.map(like => like.blog_id));
    //     });
    //   }, []);


    //   handle likes


    //   fetch blogs
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
                                <div className="col-md-4" style={{maxHeight: "15rem"}}>
                                    <img src={blog.image_url} className="img-fluid rounded-start" alt="photo"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title" style={{color: "#f1356d"}}>{blog.title}</h4>
                                        <p className="card-text">{blog.news.substring(0, 250)}...</p>
                                        <p className="card-text"><small>Last updated {blog.updated_at_formatted}</small></p>
                                        <div className="d-flex justify-content-between">
                                            <button onClick={() => {
                                                                    userSignedIn? (navigate(`/blogs/${blog.id}`)) : (navigate(`/login`))   
                                                                }} className="btn btn-info">More...</button>
                                            <p className="h2">❣️ {blog.total_likes}</p>
                                            {/* <button onClick={()=>{navigate('/comments')}}>Comments</button> */}
                                        </div>
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